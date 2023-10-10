// タブ部分の挙動制御
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

// アコーディオンの挙動制御
{
    const accordionEls = document.querySelectorAll('[data-form-accordion]');
    const initAccordion = () => {
        accordionEls.forEach(v =>
            v.addEventListener('click', e => {
                e.preventDefault();
                const isExpanded = e.currentTarget.getAttribute('aria-expanded');
                const targetId = e.currentTarget.getAttribute('aria-controls');
                e.currentTarget.setAttribute('aria-expanded', isExpanded !== 'true');
                document.getElementById(targetId).setAttribute('aria-hidden', isExpanded === 'true');
            })
        )
    }

    initAccordion();
}