layui.define(['table', 'form', 'element'], function (exports) {
	var $ = layui.$,
		admin = layui.admin,
		view = layui.view,
		table = layui.table,
		form = layui.form,
		element = layui.element;


	function getNotEmptyStr(str) {
		if (str == null || str == undefined || str == '') {
			return "--"
		} else {
			return str;
		}
	}

	//自动合并单元格
	function mergeTable(data, tableId, columsName, columsIndex) {
		var mergeIndex = 0;
		var mark = 1;
		var mergeMap = new Map();
		for (var k = 0; k < columsName.length; k++) {
			var trArr = $(tableId).find("tr");
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

	function isStrEmpty(str) {
		if (str == null || str == undefined || str == '') {
			return true;
		}

		return false;
	}

	exports('common_util', {
		getNotEmptyStr: function (str) {
			return getNotEmptyStr(str);
		},
		mergeTable: function (data, tableId, columsName, columsIndex) {
			mergeTable(data, tableId, columsName, columsIndex);
		}
	})
});