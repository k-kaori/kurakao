$(document).ready(function () {
    $.ajax('/v3/js/data/device.json',
        {
            type: 'get',
            dataType: 'json'
        }
    ).done(function (data) {
            /* 最新端末一覧 */
            var latestTerminalLists = $("#device_lists").addClass("p-list c-col c-col--sp1 c-col--pc2");
            for (var terminalIndex = 0; terminalIndex < data.latest.length; terminalIndex++) {
                var terminalData = $.extend({}, data.latest[terminalIndex]);

                if (terminalData.hasOwnProperty("mail")) {
                    if (typeof terminalData.mail.setting.href === "string" && terminalData.mail.setting.href.length > 0) {
                        var mailLink = $("<a></a>", {
                            "html": terminalData.title.html,
                            "class": "c-link c-link-detail",
                            "href": terminalData.mail.setting.href
                        });
                        latestTerminalLists.append($("<li></li>", {
                            "class": "c-col__item c-col--sp1__item c-col--pc2__item"
                        }).append(mailLink));
                    }
                }
            }

            /* メーカー一覧 */
            var makerLists = $("#maker_lists");
            for (var makerIndex = 0; makerIndex < data.maker.length; makerIndex++) {
                var makerData = $.extend({}, data.maker[makerIndex]);

                // メーカーの端末リスト
                var makerDeviceMailLinks = $("<ul></ul>", {
                    "class": "p-list c-col c-col--sp1 c-col--pc2"
                });
                for (var makerDevicesIndex = 0; makerDevicesIndex < makerData.devices.length; makerDevicesIndex++) {
                    var makerDeviceData = $.extend({}, makerData.devices[makerDevicesIndex]);

                    if (makerDeviceData.hasOwnProperty("mail")) {
                        if (typeof makerDeviceData.mail.setting.href === "string" && makerDeviceData.mail.setting.href.length > 0) {
                            var makerDeviceMailLink = $("<a></a>", {
                                "html": makerDeviceData.title.html,
                                "class": "c-link c-link-detail",
                                "href": makerDeviceData.mail.setting.href
                            });
                            makerDeviceMailLinks.append($("<li></li>", {
                                "class": "c-col__item c-col--sp1__item c-col--pc2__item"
                            }).append(makerDeviceMailLink));
                        }
                    }
                }
                if (makerDeviceMailLinks[0].childElementCount > 0) {
                    var makerHeader = $("<div></div>",
                        $.extend({
                            "class": "u-txt-weight-bold"
                        }, makerData.title));

                    makerLists.append($("<li></li>", {"class": "u-mb20"}).append(makerHeader).append(makerDeviceMailLinks));
                }
            }

        });
});