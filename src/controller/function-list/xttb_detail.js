layui.define(['layer', 'form', 'laytpl'], function (exports) {
    var $ = layui.$,
        layer = layui.layer,
        laytpl = layui.laytpl,
        form = layui.form;
    var isNotClick = true;
    var minHeight = $("#page-content1").height();

    function selectIndex(index) {
        $(".line-icon").each(function () {
            if ($(this).attr("index") == index) {
                $(this).addClass("line-icon-select");
            }
        });
        $(".line-item").each(function () {
            if ($(this).attr("index") == index) {
                $(this).addClass("line-item-select");
            }
        });
    }

    function clear() {
        $(".line-icon").each(function () {
            $(this).removeClass("line-icon-select");
        });

        $(".line-item").each(function () {
            $(this).removeClass("line-item-select");
        });
    }

    function scrollPosition(index) {
        $(".page-content").each(function () {
            if (index == $(this).attr("index")) {
                var top = 0;
                for (var i = 1; i < parseInt(index); i++) {
                    top = top + $("#page-content" + i).height();
                }

                $('#pageContent').animate({
                    scrollTop: top
                }, 1000, function () {
                    setTimeout(function () {
                        isNotClick = true;
                    }, 100);
                });
            }
        });
    }

    function initEvent() {
        $("#pageContent").bind('scroll', function () {
            if (isNotClick) {
                clear();
                var scrollTop = $(this)[0].scrollTop;
                var nScrollHeight = $(this)[0].scrollHeight;
                var height = $(this).height()
                if (scrollTop < minHeight) {
                    selectIndex(1);
                    return;
                }

                if (scrollTop + height + 20 > nScrollHeight) {
                    selectIndex(7);
                    return;
                }

                var position = 0;
                $(".page-content").each(function () {
                    var before = position;
                    var after = position + $(this).height();
                    if (scrollTop > before && scrollTop < after) {
                        var index = $(this).attr("index");
                        selectIndex(index);
                    }
                    position = after;
                })
            }
        });

        $(".line-icon").click(function () {
            var index = $(this).attr("index");
            handleItemClick(index);
        });

        $(".line-item").click(function () {
            var index = $(this).attr("index");
            handleItemClick(index);
        });

        $("#goBack").click(function () {
            window.history.back()
        });
    }

    function handleItemClick(index) {
        if (!isNotClick) {
            layer.msg("请等待跳转");
            return
        }

        isNotClick = false;
        clear();
        selectIndex(index);
        scrollPosition(index);
    }

    exports("xttb_detail", {
        init: function () {
            initEvent();
        }
    });
});