$(function(){
    $("#ckBox").click(function(){
        if (this.checked) {
            $("#nextBt").html("<a href='https://aosgw.sso.biglobe.ne.jp/cgi-bin/aos/EnqAuth.cgi?EID=726846486d4c594d75416a7a767156596564522f44513d3d' class='c-btn c-btn--action c-btn--icon'><img src='/v3/image/icon/small-icon-lock-white.svg' alt='' class='c-btn--icon__img'><span class='c-btn--icon__text'>手続きに進む</span></a>");
            } else {
            $("#nextBt").html("<p class='c-btn c-btn--action c-btn--icon is-disabled'><img src='/v3/image/icon/small-icon-lock-white.svg' alt='' class='c-btn--icon__img'><span class='c-btn--icon__text'>手続きに進む</span></p>");
        }
    });
});