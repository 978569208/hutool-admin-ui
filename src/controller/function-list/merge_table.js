layui.define(['table', 'form', 'element'], function (exports) {
	var $ = layui.$,
		admin = layui.admin,
		view = layui.view,
		table = layui.table,
		form = layui.form,
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
		initWidth();
	}

	function initWidth() {
		$("#table_header1").css("width", $("#table_data").outerWidth());
		$("#table_header2").css("width", $("#table_data").outerWidth());
		initCellWidth();
	}

	function initCellWidth() {
		var data = currentData;
		if (data == null || data == undefined || data.length == 0) {
			return;
		}
		var columnsName = ['fxmmc', 'fxtmc', 'fcsmc', 'fjsnr', 'fmkmc', 'fyjgn', 'fejgn', 'fsjgn', 'fbz'];
		var widthArray = getCellWidthArray();
		for (var i = 0; i < data.length; i++) {
			var trArr = $("#ltyqd-data-table-tbody").find("tr");
			for (var j = 0; j < columnsName.length; j++) {
				var tdCurArr = trArr.eq(i).find("td").eq(j + 1);
				tdCurArr.each(function () {
					console.log($(this).find("div").eq(0).html())
					$(this).find("div").eq(0).css("width", widthArray[j + 1] + 'px');
				});
			}
		}
	}


	function initTable(data) {
		console.log(data);
		var html = "";
		var xmsSet = new Set();
		var xtsSet = new Set();
		var widthArray = getCellWidthArray();
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			html += '<tr>'
			html += '<td>' + (i + 1) + '</td>';
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fxmmc) + '" style="width: ' + widthArray[1] + 'px">' + getNotEmptyStr(item.fxmmc) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fxtmc) + '" style="width: ' + widthArray[2] + 'px">' + getNotEmptyStr(item.fxtmc) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fcsmc) + '" style="width: ' + widthArray[3] + 'px">' + getNotEmptyStr(item.fcsmc) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fjsnr) + '" style="width: ' + widthArray[4] + 'px">' + getNotEmptyStr(item.fjsnr) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fmkmc) + '" style="width: ' + widthArray[5] + 'px">' + getNotEmptyStr(item.fmkmc) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fyjgn) + '" style="width: ' + widthArray[6] + 'px">' + getNotEmptyStr(item.fyjgn) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fejgn) + '" style="width: ' + widthArray[7] + 'px">' + getNotEmptyStr(item.fejgn) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fsjgn) + '" style="width: ' + widthArray[8] + 'px">' + getNotEmptyStr(item.fsjgn) + '</div></td>'
			html += '<td><div class="my-table-cell" str="' + getNotEmptyStr(item.fbz) + '" style="width: ' + widthArray[9] + 'px">' + getNotEmptyStr(item.fbz) + '</div></td>'
			html += '</tr>';
			xmsSet.add(item.fxmmc);
			xtsSet.add(item.fxtmc);
		}

		$("#xms").html(xmsSet.size);
		$("#xts").html(xtsSet.size);
		$("#ltyqd-data-table-tbody").html(html);
		$("#function-list .my-table-cell").click(function () {
			layer.tips($(this).attr('str'), $(this), {
				time: 2000,
				// shade: [0.01, '#000'],
				// shadeClose: true,
				success: function () {
					$(".layui-layer-tips .layui-layer-content").css("color", '#666');
					$(".layui-layer-tips .layui-layer-content").css("background-color", 'white');
					$(".layui-layer-tips .layui-layer-content i").css("display", 'none');
				}
			});
		})
		mergeTable(data);
		initCellWidth();
	}

	//合并单元格
	function mergeTable(data) {
		var mergeIndex = 0;
		var mark = 1;
		var columsName = ['fxmmc', 'fxtmc', 'fcsmc', 'fjsnr', 'fmkmc', 'fyjgn', 'fejgn', 'fsjgn', 'fbz'];
		var columsIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var mergeMap = new Map();
		for (var k = 0; k < columsName.length; k++) {
			var trArr = $("#ltyqd-data-table-tbody").find("tr");
			if (k == 0) {
				for (var i = 1; i < data.length; i++) {
					var tdCurArr = trArr.eq(i).find("td").eq(columsIndex[k]);
					var tdPreArr = trArr.eq(mergeIndex).find("td").eq(columsIndex[k]);
					if (data[i][columsName[k]] === data[i - 1][columsName[k]] && !isStrEmpty(data[i - 1][columsName[k]])) {
						mark += 1;
						tdPreArr.each(function () {
							$(this).attr("rowspan", mark);
						});

						tdCurArr.each(function () {
							$(this).css("display", "none");
						});
					} else {
						mergeIndex = i;
						mark = 1;
					}

					if (i == 1 && mergeIndex != 0) {
						mergeMap.set(k + ":" + 0, {
							start: 1,
							end: 1
						});
					}

					for (var j = mergeIndex; j < mergeIndex + mark; j++) {
						mergeMap.set(k + ":" + j, {
							start: mergeIndex + 1,
							end: mergeIndex + mark
						});
					}
				}

				console.log(mergeMap);
			} else {
				for (var i = 1; i < data.length; i++) {
					var tdCurArr = trArr.eq(i).find("td").eq(columsIndex[k]);
					var tdPreArr = trArr.eq(mergeIndex).find("td").eq(columsIndex[k]);
					// 获取前一列的合并情况
					var currMerge = mergeMap.get((k - 1) + ":" + (i));
					var preMerge = mergeMap.get((k - 1) + ":" + (i - 1));
					if (data[i][columsName[k]] === data[i - 1][columsName[k]] && !isStrEmpty(data[i - 1][columsName[k]]) && currMerge.start == preMerge.start && currMerge.end == preMerge.end) {
						mark += 1;
						tdPreArr.each(function () {
							$(this).attr("rowspan", mark);
						});
						tdCurArr.each(function () {
							$(this).css("display", "none");
						});
					} else {
						mergeIndex = i;
						mark = 1;
					}

					if (i == 1 && mergeIndex != 0) {
						mergeMap.set(k + ":" + 0, {
							start: 1,
							end: 1
						});
					}

					for (var j = mergeIndex; j < mergeIndex + mark; j++) {
						mergeMap.set(k + ":" + j, {
							start: mergeIndex + 1,
							end: mergeIndex + mark
						});
					}
				}
			}

			//重置数据
			mergeIndex = 0;
			mark = 1;
		}
	}

	function getNotEmptyStr(str) {
		if (str == null || str == undefined || str == '') {
			return "--"
		} else {
			return str;
		}
	}

	function isStrEmpty(str) {
		if (str == null || str == undefined || str == '') {
			return true;
		}

		return false;
	}

	function getCellWidthArray() {
		var columnsName = ['#index-width', '#fxmmc-width', '#fxtmc-width', '#fcsmc-width',
			'#fjsnr-width', '#fmkmc-width', '#fyjgn-width', '#fejgn-width', '#fsjgn-width', '#fbz-width'
		];
		var widthArray = [];
		for (var k = 0; k < columnsName.length; k++) {
			widthArray.push(($(columnsName[k]).width()));
		}

		return widthArray;
	}

	exports('merge_table', {
		doInit: doInit()
	})
});