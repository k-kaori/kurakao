$('[name="payment_timing"]:radio').change(function(){
    var payment_timing_img = $("#payment_timing_img");
    if ($('#payment_timing1').prop('checked')) {
        payment_timing_img.attr("src", "/v3/image/jimu/keiyaku/paychg/kddi-seikyu/matome-image-06.png");
    } else if ($('#payment_timing2').prop('checked')) {
        payment_timing_img.attr("src", "/v3/image/jimu/keiyaku/paychg/kddi-seikyu/matome-image-04.png");
    } else if ($('#payment_timing3').prop('checked')) {
        payment_timing_img.attr("src", "/v3/image/jimu/keiyaku/paychg/kddi-seikyu/matome-image-07.png");
    } else if ($('#payment_timing4').prop('checked')) {
        payment_timing_img.attr("src", "/v3/image/jimu/keiyaku/paychg/kddi-seikyu/matome-image-05.png");
    }
});