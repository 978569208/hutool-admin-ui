/**
 layuiAdmin pro 构建
*/

var pkg = require('./package.json');
var inds = pkg.independents;

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var header = require('gulp-header');
var del = require('del');
var gulpif = require('gulp-if');
var minimist = require('minimist');
var connect = require('gulp-connect');
const sftp = require('gulp-sftp-up4');

//获取参数
var argv = require('minimist')(process.argv.slice(2), {
    default: {
      ver: 'all'
    }
  })

  //注释
  ,
  note = [
    '/** <%= pkg.name %>-v<%= pkg.version %> <%= pkg.license %> License By <%= pkg.homepage %> */\n <%= js %>', {
      pkg: pkg,
      js: ';'
    }
  ],
  destDir = './dist',
  task = {
    //压缩 JS
    minjs: function () {
        var src = [
          './src/**/*.js', '!./src/config.js', '!./src/lib/extend/echarts.js'
        ];

        return gulp.src(src).pipe(uglify())
          .pipe(header.apply(null, note))
          .pipe(gulp.dest(destDir));
      }

      //压缩 CSS
      ,
    mincss: function () {
        var src = [
            './src/**/*.css'
          ],
          noteNew = JSON.parse(JSON.stringify(note));


        noteNew[1].js = '';

        return gulp.src(src).pipe(minify({
            compatibility: 'ie7'
          })).pipe(header.apply(null, noteNew))
          .pipe(gulp.dest(destDir));
      }

      //复制文件夹
      ,
    mv: function () {
      gulp.src('./src/config.js', )
        .pipe(gulp.dest(destDir));

      gulp.src('./src/lib/**')
        .pipe(gulp.dest(destDir + '/lib'));

      gulp.src('./src/style/res/**/*')
        .pipe(gulp.dest(destDir + '/style/res'));

      return gulp.src('./src/views/**/*')
        .pipe(gulp.dest(destDir + '/views'));
    },
    copyCore: function () {
      //复制 json
      gulp.src('./start/json/**/*')
        .pipe(gulp.dest(destDir + '/json'));

      //复制并转义宿主页面
      return gulp.src('./index.html')
        .pipe(replace(/\<\!-- clear s --\>([\s\S]*?)\<\!-- clear e --\>/, ''))
        .pipe(replace('//local.res.layui.com/layui/src', 'layui'))
        .pipe(replace("base: '../dev-pro/'", "base: '../dist/'"))
        .pipe(replace('@@version@@', pkg.version))
        .pipe(gulp.dest(destDir + '/'));
    }
  };


//清理
gulp.task('clear', function (cb) {
  return del(['./dist/*'], cb);
});

gulp.task('minjs', task.minjs);
gulp.task('mincss', task.mincss);
gulp.task('mv', task.mv);
gulp.task('copyCore', task.copyCore);

gulp.task('src', function () {
  //命令：gulp src
  return gulp.src('./dev-pro/**/*')
    .pipe(gulp.dest('./src'));
});

//构建核心源文件
gulp.task('build', gulp.series('clear', 'src', 'minjs', 'mincss', 'mv', 'copyCore'), function () { //命令：gulp

});



gulp.task('server', function () {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080 //服务器端口
  });
});

gulp.task('upload', function (callback) {
  gulp.src('./dist/**')
    .pipe(sftp(Object.assign({
      remotePath: '/mydata/nginx/static', // 部署到服务器的路径
      host: '192.168.154.132', // ip地址
      user: 'root',
      pass: 'Hkl123456',
      port: 22 // 默认是22端口
    })))
  callback();
})