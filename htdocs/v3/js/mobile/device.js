$(function(){
    // 端末一覧
    $.ajax('/v3/js/data/device.json',
        {
            type: 'get',
            dataType: 'json'
        }
    ).done(function (data) {
            /* 最新端末一覧 */
            // <li class="terminal-list__item">
            //     <div class="terminal-list__item__content">
            //         <div class="terminal-main-description">
            //             <div class="terminal-main-description__icon">
            //                 <img alt="" src="画像パス">
            //             </div>
            //             <div class="terminal-main-description__content">
            //                 <div class="terminal-main-description__content__title">端末名</div>
            //                 <ul>
            //                     <li class="u-mb20">
            //                         <a class="c-btn c-btn--detail" href="パス">接続設定情報</a>
            //                     </li>
            //                     <li>
            //                         <span class="c-btn c-btn--detail is-disabled" href="">BIGLOBE<br>オンラインサポート</span>
            //                         <!-- パスが定義されてない場合はaタグでなくspanタグに -->
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div>
            //         <div class="terminal-sub-description">
            //             <p class="terminal-sub-description__title">メーカー提供</p>
            //             <ul class="terminal-sub-description__list p-list">
            //                 <!-- すべてtarget="_blank"がつく -->
            //                 <li class="terminal-sub-description__list__item">
            //                     <a class="c-link c-link-detail c-link-icon c-link-icon--jump" target="_blank" href="パス">取扱説明書</a>
            //                 </li>
            //                 <li class="terminal-sub-description__list__item">
            //                     <a class="c-link c-link-detail c-link-icon c-link-icon--jump" target="_blank" href="パス">製品情報</a>
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </li>
            var latestTerminalLists = $("#device_lists");
            for (var terminalIndex = 0; terminalIndex < data.latest.length; terminalIndex++) {
                var terminalData = $.extend({}, data.latest[terminalIndex]);
                if (terminalData.hasOwnProperty("mobile")) {
                    //アイコン画像
                    var mainDescriptionIcon = $("<div></div>", {
                        "class": "device-main-description__icon"
                    }).append($("<img>", $.extend({
                        "alt": ""
                    }, terminalData.mobile.image)));

                    //コンテンツ
                    var mainDescriptionContent = $("<div></div>", {
                        "class": "device-main-description__content"
                    });
                    //端末名
                    var mainDescriptionContentTitle = $("<div></div>", $.extend({
                        "class": "device-main-description__content__title"
                    }, terminalData.title));
                    mainDescriptionContent.append(mainDescriptionContentTitle);

                    //メインのリンク
                    var mainLinks = $("<ul></ul>");
                    for (var mainLinksIndex = 0; mainLinksIndex < terminalData.mobile.mainLinks.length; mainLinksIndex++) {
                        var mainLinkData = $.extend({}, terminalData.mobile.mainLinks[mainLinksIndex]);
                        var listAttr = mainLinksIndex < terminalData.mobile.mainLinks.length - 1 ? {"class": "u-mb20"} : {};

                        var mainLink;
                        if (typeof mainLinkData.href === "string" && mainLinkData.href.length > 0) {
                            mainLink = $("<a></a>", $.extend({
                                "class": "c-btn c-btn--detail"
                            }, mainLinkData));
                        } else {
                            mainLink = $("<span></span>", $.extend({
                                "class": "c-btn c-btn--detail is-disabled"
                            }, mainLinkData));
                        }


                        mainLinks.append($("<li></li>", listAttr).append(mainLink));
                    }
                    mainDescriptionContent.append(mainLinks);

                    //メイン要素
                    var mainDescription = $("<div></div>", {
                        "class": "device-main-description"
                    });
                    mainDescription.append(mainDescriptionIcon);
                    mainDescription.append(mainDescriptionContent);

                    //コンテンツ作成、メイン要素を追加
                    var latestTerminalContent = $("<div></div>", {
                        "class": "device-list__item__content"
                    }).append(mainDescription);

                    //サブ要素
                    if (terminalData.mobile.subLinks.length > 0) {
                        var subLinks = $("<ul></ul>", {
                            "class": "device-sub-description__list p-list"
                        });
                        for (var subLinksIndex = 0; subLinksIndex < terminalData.mobile.subLinks.length; subLinksIndex++) {
                            var subLinkData = $.extend({}, terminalData.mobile.subLinks[subLinksIndex]);

                            var subLinkAttr = {
                                "class": "c-link c-link-detail c-link-icon c-link-icon--jump",
                                "target": "_blank"
                            };

                            subLinks.append($("<li></li>", {
                                "class": "device-sub-description__list__item"
                            }).append($("<a></a>", $.extend(subLinkAttr, subLinkData))));
                        }


                        var subDescription = $("<div></div>", {
                            "class": "device-sub-description"
                        }).append($("<p></p>", {
                            "class": "device-sub-description__title",
                            "text": "メーカー提供"
                        })).append(subLinks);

                        latestTerminalContent.append(subDescription);
                    }

                    latestTerminalLists.append($("<li></li>", {
                        "class": "device-list__item"
                    }).append(latestTerminalContent));
                }
            }

            /* メーカー一覧 */
            // <li class="p-accordion u-mb30">
            //     <div class="p-accordion__head" id="maker_メーカーID_header" data-accordion-head="" aria-controls="maker_メーカーID_body" aria-expanded="true">
            //         メーカー名
            //     </div>
            //     <div class="p-accordion__content" id="maker_メーカーID_body" aria-labelledby="maker_メーカーID_header" aria-hidden="false">
            //         <ul class="maker-terminals">
            //             <li class="maker-terminals__item u-mb20">
            //                 <p class="u-txt-weight-bold u-mb10">端末名</p>
            //                 <ul class="p-list">
            //                     <li>
            //                         <a class="c-link c-link-detail" href="パス、設定されてなければliごと差し込まれない">接続設定情報</a>
            //                     </li>
            //                     <li><a class="c-link c-link-detail" href="パス、設定されてなければliごと差し込まれない">BIGLOBEオンラインサポート</a></li>
            //                     <li>
            //                         <a class="c-link c-link-detail c-link-icon c-link-icon--jump" target="_blank" href="パス、設定されてなければliごと差し込まれない">取扱説明書</a>
            //                     </li>
            //                     <li>
            //                         <a class="c-link c-link-detail c-link-icon c-link-icon--jump" target="_blank" href="パス、設定されてなければliごと差し込まれない">製品情報</a>
            //                     </li>
            //                 </ul>
            //             </li>
            //         </ul>
            //     </div>
            // </li>
            var makerLists = $("#maker_lists");
            for (var makerIndex = 0; makerIndex < data.maker.length; makerIndex++) {
                var makerData = $.extend({}, data.maker[makerIndex]);


                // メーカーの端末リスト
                var makerTerminals = $("<ul></ul>", {
                    "class": "maker-terminals"
                });

                for (var makerTerminalsIndex = 0; makerTerminalsIndex < makerData.devices.length; makerTerminalsIndex++) {
                    var makerTerminal = $.extend({}, makerData.devices[makerTerminalsIndex]);
                    var terminalListAttr = makerTerminalsIndex < makerData.devices.length - 1 ? {"class": "maker-terminals__item u-mb20"} : {"class": "maker-terminals__item"};

                    if (makerTerminal.hasOwnProperty("mobile")) {
                        //端末名
                        var makerTerminalsItem = $("<li></li>", terminalListAttr).append(
                            $("<p></p>", $.extend({
                                "class": "u-txt-weight-bold u-mb10"
                            }, makerTerminal.title))
                        );

                        //端末の各リンク
                        var makerLinks = $("<ul></ul>", {"class": "p-list"});
                        for (var makerMainLinksIndex = 0; makerMainLinksIndex < makerTerminal.mobile.mainLinks.length; makerMainLinksIndex++) {
                            var makerMainLinkData = $.extend({}, makerTerminal.mobile.mainLinks[makerMainLinksIndex]);

                            if (typeof makerMainLinkData.html === "string") {
                                if (typeof makerMainLinkData.href === "string" && makerMainLinkData.href.length > 0) {
                                    //タグ要素を削除
                                    makerMainLinkData.html = makerMainLinkData.html.replace(/<[^>]*>/g, '');

                                    makerLinks.append($("<li></li>").append(
                                        $("<a></a>", $.extend({
                                            "class": "c-link c-link-detail"
                                        }, makerMainLinkData))
                                    ));
                                }
                            }
                        }
                        makerTerminalsItem.append(
                            makerLinks
                        );

                        makerTerminals.append(makerTerminalsItem);
                    }
                }
                if (makerTerminals[0].childElementCount > 0) {

                    //アコーディオンのヘッダー作成
                    var makerHeader = $("<div></div>",
                        $.extend({
                            "class": "p-accordion__head",
                            "id": "maker_" + makerData.name + "_header",
                            "data-accordion-head": "",
                            "aria-controls": "maker_" + makerData.name + "_body",
                            "aria-expanded": "false"
                        }, makerData.title));

                    //アコーディオンのコンテンツ作成
                    var makerContent = $("<div></div>", {
                        "class": "p-accordion__content",
                        "id": "maker_" + makerData.name + "_body",
                        "aria-labelledby": "maker_" + makerData.name + "_header",
                        "aria-hidden": "true"
                    });
                    makerContent.append(makerTerminals);


                    var makerListAccordionAttr = makerIndex < data.maker.length - 1 ? {"class": "p-accordion u-mb30"} : {"class": "p-accordion"};
                    makerLists.append($("<li></li>", makerListAccordionAttr).append(makerHeader).append(makerContent));
                }
            }

            /* メーカーのアコーディオンの開閉 */
            $('[data-accordion-head]').click(function () {
                var expanded = $(this).attr('aria-expanded');
                var target = $(this).attr('aria-controls');

                $(this).attr('aria-expanded', expanded !== 'true');
                $('#' + target).attr('aria-hidden', expanded === 'true');
            });
        });
});
