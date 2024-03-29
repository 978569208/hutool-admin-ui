layui.define(['table', 'form', 'element', 'common_util'], function (exports) {
	var $ = layui.$,
		admin = layui.admin,
		view = layui.view,
		table = layui.table,
		form = layui.form,
		common_util = layui.common_util,
		element = layui.element;

	var currentData = [{
		"id": "298110787304554496",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787321331712",
		"serialNumber": null,
		"fxmmc": "项目名称2",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787338108928",
		"serialNumber": null,
		"fxmmc": "项目名称2",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787354886144",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787371663360",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787291971584",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787308748800",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787342303232",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787359080448",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787375857664",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787329720320",
		"serialNumber": null,
		"fxmmc": "项目名称2",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787346497536",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787380051968",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787283582976",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787300360192",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787317137408",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787333914624",
		"serialNumber": null,
		"fxmmc": "项目名称2",
		"fxtmc": "系统名称2",
		"fcsmc": null,
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787350691840",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": null,
		"fcsmc": null,
		"fjsnr": null,
		"fmkmc": null,
		"fyjgn": null,
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787367469056",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787371663361",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容5",
		"fmkmc": "模块名称6",
		"fyjgn": "一级功能7",
		"fejgn": null,
		"fsjgn": null,
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}, {
		"id": "298110787359080449",
		"serialNumber": null,
		"fxmmc": "项目名称1",
		"fxtmc": "系统名称2",
		"fcsmc": "处室名称3",
		"fjsnr": "建设内容4",
		"fmkmc": "模块名称5",
		"fyjgn": "一级功能6",
		"fejgn": "二级功能7",
		"fsjgn": "三级功能4",
		"fbz": null,
		"fzt": 1,
		"version": 4,
		"versionFlag": 1,
		"isDevare": 0,
		"flrr": "1922",
		"flrjg": "2549",
		"flrsj": "2022-07-22 11:46:10",
		"submitDate": "2022-07-22 11:46:16",
		"fzhxgr": "1922",
		"fzhxgsj": "2022-07-22 11:46:10"
	}];

	function doInit() {
		initTable(currentData)
	}

	function initTable(data) {
		var tableData = [];
		var xmsSet = new Set();
		var xtsSet = new Set();
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			tableData.push({
				index: (i + 1),
				fxmmc: common_util.getNotEmptyStr(item.fxmmc),
				fxtmc: common_util.getNotEmptyStr(item.fxtmc),
				fcsmc: common_util.getNotEmptyStr(item.fcsmc),
				fjsnr: common_util.getNotEmptyStr(item.fjsnr),
				fmkmc: common_util.getNotEmptyStr(item.fmkmc),
				fyjgn: common_util.getNotEmptyStr(item.fyjgn),
				fejgn: common_util.getNotEmptyStr(item.fejgn),
				fsjgn: common_util.getNotEmptyStr(item.fsjgn),
				fbz: common_util.getNotEmptyStr(item.fbz),
			});

			xmsSet.add(item.fxmmc);
			xtsSet.add(item.fxtmc);
		}

		$("#xms").html(xmsSet.size);
		$("#xts").html(xtsSet.size);
		table.init('function-list-table', {
			data: tableData,
			done: function () {
				$(".layui-table th").each(function () {
					$(this).removeClass("layui-hide");
				});

				$(".layui-table td").each(function () {
					if ($(this).hasClass('layui-hide')) {
						$(this).remove();
					}
				});

				common_util.mergeTable(data, "#function-list .layui-table tbody",
					['fxmmc', 'fxtmc', 'fcsmc', 'fjsnr', 'fmkmc', 'fyjgn', 'fejgn', 'fsjgn', 'fbz'],
					[1, 2, 3, 4, 5, 6, 7, 8, 9]);
			}
		});
	}

	exports('merge_table2', {
		doInit: function () {
			doInit();
		}
	})
});