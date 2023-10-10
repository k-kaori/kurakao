$(function () {
    $('[data-form-tab]').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('aria-controls');

        $('[data-form-tab]').each(function () {
            $(this).attr('aria-selected', false);
        });
        $(this).attr('aria-selected', 'true');

        $('[data-form-panel]').each(function () {
            $(this).attr('aria-hidden', true);
        });
        $('#' + target).attr('aria-hidden', 'false');
    });
});