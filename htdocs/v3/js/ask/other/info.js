$(function () {
    var $triggers = $('[data-guidance-trigger]');

    // initialize
    $triggers.each(function(index, element){
        var targetIdSelector = $(element).attr('href');
        var status = $(element).attr('data-guidance-trigger');

        if(status === 'opened') {
            $(targetIdSelector).attr('aria-hidden', false);
        } else {
            $(element).attr('data-guidance-trigger', 'closed');
            $(targetIdSelector).attr('aria-hidden', true);
        }
    });

    $triggers.click(function (event) {
        event.preventDefault();
        var targetIdSelector = $(this).attr('href');
        var status = $(this).attr('data-guidance-trigger');

        if(status === 'opened') {
            $(this).attr('data-guidance-trigger', 'closed');
            $(targetIdSelector).attr('aria-hidden', true);
        } else {
            $(this).attr('data-guidance-trigger', 'opened');
            $(targetIdSelector).attr('aria-hidden', false);
        }
    });

});