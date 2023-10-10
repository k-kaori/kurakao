var inquirySectionId = 'inquiry';
var initialId = 'question_first';
var moveTo = new MoveTo();

/* 初期化 */
$('[data-inquiry-area]').attr('aria-hidden', true);
var $currentShow = $('#' + initialId);
$currentShow.attr('aria-hidden', false);

/* 次へ */
var nextDuration = 800;
$('[data-inquiry-element="next"]').click(function (e) {
    e.preventDefault();

    // 今表示している領域を非表示
    $currentShow.attr('aria-hidden', true);

    // 次の領域表示（同時に透過）
    // -> スクロールと同じ時間かけて非透過アニメーション
    $currentShow = $($(this).attr('href'));
    $currentShow.attr({'aria-hidden': false}).css({'opacity': 0});
    $currentShow.animate({opacity: 1}, {duration: nextDuration});
});


/* 表示リセット */
var resetDuration = 1000;
$('[data-inquiry-element="reset"]').click(function (e) {
    e.preventDefault();

    // 今表示している領域をスクロールと同じ時間かけて透過アニメーション
    $currentShow.animate({opacity: 0}, {
        duration: resetDuration / 2,
        complete: function () {
            $currentShow.attr({'aria-hidden': true}).css({'opacity': 1});

            // 初期領域表示（同時に透過）
            $currentShow = $('#' + initialId);
            $currentShow.css({'opacity': 0.01}).attr({'aria-hidden': false});
            $currentShow.animate({opacity: 1}, {duration: resetDuration / 2});

            moveTo.move(document.getElementById(inquirySectionId), {
                tolerance: 0,
                duration: resetDuration / 2,
                easing: 'easeOutQuart'
            });
        }
    });
});