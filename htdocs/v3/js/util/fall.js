$(function () {
    return;

    // var fallFragmentName = "snow";
    // var fallFragmentName = "sakura";
    // var fallFragmentName = "momiji";
    var fallAreaSelector = '#fall_area';
    var fallFragmentNumber = 15;
    if ($(fallAreaSelector).length > 0) {
        $(fallAreaSelector).addClass("p-fall");
        for (var i = 1; i <= fallFragmentNumber; i++) {
            $(fallAreaSelector).append($('<span>').addClass("p-fall__fragment p-fall__fragment--" + i + " p-fall__fragment--" + fallFragmentName))
        }
    }
});