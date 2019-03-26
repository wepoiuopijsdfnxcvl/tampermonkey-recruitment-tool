"use strict";

(function() {
    function blacklistRefresh() {
        blacklistFilter(), function() {
            blacklistFunction.HtmlToList().each(function(index, element) {
                if (0 === $(element).find(".xyzs-del-div").length) blacklistFunction.ItemToNameJq(element).after($('<div title="加入黑名单" style="' + blacklistFunction.DleButtonStyle + '" class="xyzs-del-div"><i class="fa fa-trash xyzs-del-ico"></i></div>').click(function() {
                    return function(name) {
                        if (name += "", -1 === blacklistList.indexOf(name)) blacklistList.push(name), GM_setValue(blacklistKey, JSON.stringify(blacklistList));
                        blacklistFilter();
                    }(blacklistFunction.NameJqToNameText(blacklistFunction.ItemToNameJq(blacklistFunction.DleButtonToItem(this)))), 
                    !1;
                }));
            });
        }();
    }
    function blacklistFilter() {
        blacklistFunction.HtmlToList().each(function(index, element) {
            var isShow = !0, name = blacklistFunction.NameJqToNameText(blacklistFunction.ItemToNameJq(element));
            if (-1 < blacklistList.indexOf(name)) isShow = !1; else for (var i = 0; i < blacklistList.length; i++) if (new RegExp(blacklistList[i], "i").test(name)) {
                isShow = !1;
                break;
            }
            if (isShow) $(element).show(); else $(element).hide();
        });
    }
    var positionLeft = !0, isExpand = !0, body = $("body");
    body.before('<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />'), 
    body.before("<style>\n            .xyzs-tool-region{\n            position: fixed;\n             z-index: 20480;\n             left: 0;\n             top: 0;\n             width: 100%;\n             height: 100%;\n            }\n            .xyzs-tool{\n             background-color: #ff5c4c;\n             width: 50px;\n             height: 50px;\n             border-radius:25px;\n             -moz-border-radius:25px; \n             position: absolute;\n             left: 10px;\n             bottom: 10px;\n             cursor: move;\n             pointer-events:auto;\n             -moz-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);;\n             -webkit-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);\n             box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);\n            }\n            .xyzs-tool .menu{\n            width: 200px;\n            height: 50px;\n            position: absolute;\n            left: 50px;\n            display: none;\n            transition: display 3s;\n            padding: 0 10px;\n            }\n            .xyzs-tool .fa-tool{\n             font-size: 27px;\n             color: #FFF!important;\n            }\n            .xyzs-menu-item{\n            height: 30px;\n            width: 30px;\n            border-radius:15px;\n            float: left;\n            margin: 10px;\n            background-color: #ff5c4c;\n             -moz-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);;\n             -webkit-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);\n             box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);\n             text-align: center;\n            }\n            .xyzs-menu-item:hover{\n             -moz-box-shadow:1px 1px 15px rgb(35,35,35);\n             -webkit-box-shadow:1px 1px 15px rgb(35,35,35);\n             box-shadow:1px 1px 15px rgb(35,35,35);\n            }\n            .xyzs-menu-item .fa-item{\n                font-size: 20px;\n                margin: auto 0;\n                width: 30px;\n                height: 30px;\n                line-height: 30px;\n                cursor: pointer;\n                color: #fff;\n            }\n            .xyzs-menu-item .fa-item:hover{\n\n            }\n            /*===== win =====*/\n            .xyzs-win{\n                width: 500px;\n                margin: 0 auto;\n                position: relative;\n                outline: 0;\n                top: 100px;\n                pointer-events:auto;\n            }\n            .xyzs-modal-content{\n                border-radius: 5px;\n                background-clip: padding-box;\n                background-color: #fff;\n                -moz-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);;\n                -webkit-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);\n                box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);\n                pointer-events:auto;\n                border: solid 1px #ff5c4c;\n            }\n            .xyzs-modal-close{\n                z-index: 1;\n                position: absolute;\n                right: 12px;\n                top: 8px;\n                overflow: hidden;\n                cursor: pointer;\n            }\n            .xyzs-icon-ios-close{\n                font-size: 25px;\n                color: #999;\n            }\n            .xyzs-modal-header{\n                border-bottom: 1px solid #e8eaec;\n                padding: 10px 16px;\n                text-align: left;\n                font-size: 15px;\n                font-weight: bold;\n                font-family: cursive;\n            }\n            .xyzs-modal-body{\n                padding: 16px;\n                font-size: 12px;\n            }\n\n            .xyzs-enterprise-list{\n                width: 100%;\n                height: 300px;\n                overflow-y: auto;\n                overflow-x: hidden;\n            }\n            .xyzs-enterprise-item{\n                /*height: 20px;*/\n                line-height: 20px;\n                margin: 5px;\n                font-size: 12px;\n                padding: 5px 12px;\n                border: solid 1px #dedede;\n            }\n            .xyzs-enterprise-item-ico{\n                color: #ff5c4c;\n                float: right;\n                font-size: 18px;\n            }\n\n            .xyzs-scrollbar::-webkit-scrollbar-track {\n              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n              background-color: #F5F5F5;\n              border-radius:5px\n            }\n\n            .xyzs-scrollbar::-webkit-scrollbar {\n              width: 10px;\n              background-color: #F5F5F5;\n            }\n\n            .xyzs-scrollbar::-webkit-scrollbar-thumb {\n              background-color: rgba(255,92,76,0.7);\n              border-radius:5px\n            }\n            .xyzs-scrollbar::-webkit-scrollbar-thumb:hover {\n              background-color: #ff5c4c;\n            }\n            /*=== 功能 ===*/\n            .xyzs-del-div{\n                color: #ff5c4c;\n                font-size: 20px;\n                cursor: pointer;\n            }\n            .xyzs-del-ico{\n            \n                color: #ff5c4c!important;\n            }\n        </style>");
    var isMobile = !1, mousedownPosition = {
        x: 0,
        y: 0
    }, toolPosition = {
        x: 0,
        y: 0
    }, toolRegion = $('<div class="xyzs-tool-region"></div>').mousedown(function() {
        toolRegion.css("pointer-events", "auto");
    }).mouseup(function() {
        isMobile = !1, toolRegion.css("pointer-events", "none");
    }).mousemove(function(e) {
        if (isMobile) {
            var mouseX = e.originalEvent.x || e.originalEvent.layerX || 0, mouseY = e.originalEvent.y || e.originalEvent.layerY || 0, Y = tool.position().top, X = tool.position().left, winH = $(window).height(), winW = $(window).width();
            toolPosition.x = X, toolPosition.y = Y;
            var left = X + mouseX - mousedownPosition.x, bottom = winH - 50 - Y - mouseY + mousedownPosition.y;
            if (tool.css({
                left: (left < 0 ? 0 : winW < 50 + left ? winW - 50 : left) + "px",
                bottom: (bottom < 0 ? 0 : winH < bottom + 50 ? winH - 50 : bottom) + "px"
            }), positionLeft === winW / 2 < X + 25) menu.css({
                width: 50 * menuItems.length + 20 + "px",
                left: (winW / 2 < X + 25 ? -1 * (50 * menuItems.length + 20) : 50) + "px"
            }), menuItems.reverse(), createMenu(), positionLeft = !positionLeft;
            mousedownPosition.x = mouseX, mousedownPosition.y = mouseY;
        }
    }).css("pointer-events", "none"), tool = $('\n        <div class=\'xyzs-tool\'>\n        <div style="position: absolute;text-align: center;width: 50px;top: 10px;color: #fff;">\n        <i class="fa fa-wrench fa-tool" title="工具箱"></i>\n        </div>\n        </div>').mouseleave(function() {
        menu.hide(70);
    }).mouseenter(function() {
        menu.show(70);
    }).mousedown(function(e) {
        isExpand = isMobile = !0, toolRegion.css("pointer-events", "auto"), mousedownPosition.x = e.originalEvent.x || e.originalEvent.layerX || 0, 
        mousedownPosition.y = e.originalEvent.y || e.originalEvent.layerY || 0;
    }).mousemove(function() {
        isExpand = !1;
    }).click(function() {
        if (isExpand) menu.toggle();
    }).css({
        left: "10px",
        bottom: "10px"
    }), menuItems = [ {
        ico: "fa-eye-slash",
        title: "黑名单管理",
        callback: function() {
            var div = $('\n                    <div class="xyzs-enterprise-list xyzs-scrollbar" ></div>\n                ');
            $.each(blacklistList, function(index, item) {
                div.append($('<div class="xyzs-enterprise-item">' + item + "</div>").append($('<i class="fa fa-times xyzs-enterprise-item-ico" title="删除" item-name="' + item + '"></i>').click(function() {
                    (function(name) {
                        if (-1 < blacklistList.indexOf(name)) blacklistList.splice(blacklistList.indexOf(name), 1), 
                        GM_setValue(blacklistKey, JSON.stringify(blacklistList));
                        blacklistFilter();
                    })($(this).attr("item-name")), $(this).closest(".xyzs-enterprise-item").remove();
                })));
            }), function(t, div) {
                toolRegion.css({
                    "pointer-events": "auto",
                    "background-color": "rgba(55,55,55,.6)"
                }), win.show(500), win.find(".xyzs-modal-header-inner").text(t), win.find(".xyzs-modal-body").empty().append(div);
            }("黑名单管理", div);
        }
    }, {
        ico: "fa-podcast",
        title: "作者博客",
        callback: function() {
            window.open("https://qq943260285.github.io");
        }
    }, {
        ico: "fa-github",
        title: "github开源",
        callback: function() {
            window.open("https://github.com/qq943260285/tampermonkey-recruitment-tool.git");
        }
    } ], menu = $("\n    <div id='xyzs-menu' class='menu'>\n    </div>\n    ").css({
        width: 50 * menuItems.length + 20 + "px"
    }), createMenu = function() {
        menu.empty();
        for (var _loop = function(i) {
            menu.append($('<div class="xyzs-menu-item"><i class="fa ' + menuItems[i].ico + ' fa-item " title="' + menuItems[i].title + '"></i></div>').click(function() {
                menuItems[i].callback();
            }));
        }, i = 0; i < menuItems.length; i++) _loop(i);
    };
    createMenu(), tool.append(menu), toolRegion.append(tool), body.append(toolRegion);
    var win = $('\n        <div class="xyzs-win">\n            <div class="xyzs-modal-content">\n                <div class="xyzs-modal-close">\n                    <i title="关闭" class="fa fa-remove xyzs-icon-ios-close"></i>\n                </div>\n                <div class="xyzs-modal-header">\n                    <div class="xyzs-modal-header-inner">标题</div>\n                </div>\n                <div class="xyzs-modal-body">\n                    内容\n                </div>\n            </div>\n        </div>\n    ').hide();
    win.find(".xyzs-modal-close").click(function() {
        win.hide(), toolRegion.css({
            "background-color": ""
        });
    }), toolRegion.append(win);
    var blacklistKey = "blacklist", blacklistList = GM_getValue(blacklistKey) ? JSON.parse(GM_getValue(blacklistKey)) : [], blacklistFunction = {
        WebUrl: null,
        IsRefresh: null,
        DleButtonStyle: null,
        HtmlToList: function() {},
        ItemToNameJq: function() {},
        NameJqToNameText: function() {},
        DleButtonToItem: function() {}
    }, WebJqList = [ {
        WebUrl: "search.51job.com",
        IsRefresh: !1,
        DleButtonStyle: "margin: 0 10px;display: contents;",
        HtmlToList: function() {
            return $(".el .t2 a[title]").closest(".el");
        },
        ItemToNameJq: function(item) {
            return $(item).find(".t2 a[title]");
        },
        NameJqToNameText: function(item) {
            return $(item).attr("title");
        },
        DleButtonToItem: function(item) {
            return $(item).closest(".el");
        }
    }, {
        WebUrl: "sou.zhaopin.com",
        IsRefresh: !0,
        DleButtonStyle: "margin: 0 10px;display: inline-table;",
        HtmlToList: function() {
            return $("#listContent .clearfix .commpanyName a[title]").closest(".clearfix");
        },
        ItemToNameJq: function(item) {
            return $(item).find(".commpanyName a[title]");
        },
        NameJqToNameText: function(item) {
            return $(item).attr("title");
        },
        DleButtonToItem: function(item) {
            return $(item).closest(".clearfix");
        }
    }, {
        WebUrl: "www.zhipin.com",
        IsRefresh: !1,
        DleButtonStyle: "margin: 0 10px;display: inline-table;",
        HtmlToList: function() {
            return $(".company-text h3 a[ka]").closest("li");
        },
        ItemToNameJq: function(item) {
            return $(item).find(".company-text h3 a[ka]");
        },
        NameJqToNameText: function(item) {
            return $(item).text();
        },
        DleButtonToItem: function(item) {
            return $(item).closest("li");
        }
    }, {
        WebUrl: "www.lagou.com",
        IsRefresh: !1,
        DleButtonStyle: "margin: 0 10px;display: inline-table;",
        HtmlToList: function() {
            return $("li .company_name a[data-lg-tj-cid]").closest("li");
        },
        ItemToNameJq: function(item) {
            return $(item).find(".company_name a[data-lg-tj-cid]");
        },
        NameJqToNameText: function(item) {
            return $(item).text();
        },
        DleButtonToItem: function(item) {
            return $(item).closest("li");
        }
    }, {
        WebUrl: "www.liepin.com",
        IsRefresh: !1,
        DleButtonStyle: "margin: 0 10px;display: inline-flex;position: absolute;right: 12px;",
        HtmlToList: function() {
            return $("li .company-name a[title]").closest("li");
        },
        ItemToNameJq: function(item) {
            return $(item).find(".company-name a[title]");
        },
        NameJqToNameText: function(item) {
            return $(item).text();
        },
        DleButtonToItem: function(item) {
            return $(item).closest("li");
        }
    } ];
    (function() {
        for (var i = 0; i < WebJqList.length; i++) if (WebJqList[i].WebUrl === window.location.host) {
            blacklistFunction = WebJqList[i];
            break;
        }
        if (blacklistRefresh(), blacklistFunction.IsRefresh) setInterval(blacklistRefresh, 3e3);
    })();
})();