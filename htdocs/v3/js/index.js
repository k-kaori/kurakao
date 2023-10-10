/**
 * 緊急/災害情報・障害情報アコーディオンを制御します。
 */
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

/**
 * 「現在発生中の障害」、「緊急・災害情報」newラベル制御
 */
//newラベルを表示する
const displayNewLabel = (position) => {
    const newEl = document.createElement('span');
    newEl.classList.add('badge', 'badge--new');
    newEl.textContent = 'NEW';
    position.appendChild(newEl);
}

//エリア要素内にNewラベルをもっているかどうか(boolean)
const hasNewLabel = (el) => {
    return el.querySelector('.badge--new') !== null;
}

//今日の日付と掲載日の差を算出
const calculateBetweenDays = (dateEl) => {
    const publishDate = dateEl.textContent.split(" ")[0];
    const diffTime = new Date().getTime() - new Date(publishDate).getTime();
    const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDay;
}

/**
 * 現在発生中の障害アコーディオン制御
 */
const infoFailureEl = document.querySelector('[data-info-failure]');
const failureEls = infoFailureEl.querySelectorAll('[data-support-info="navigation"]');
const failureDateEls = infoFailureEl.querySelectorAll('[data-support-info="date"]');

//現在発生中の障害ssi内に記述されるdtの文言が不要なので書き換え
infoFailureEl.getElementsByTagName("dt")[0].textContent = "";

// 障害発生中の場合：アコーディオンを閉じ、アコーディオントリガー・掲載日にnewラベル表示
// 発生中の障害がない場合：アコーディオンを開き、「現在発生中の障害はありません」の文言を表示
if (failureEls.length > 0) {
    failureEls.forEach((failureEl) => {
        failureEl.style.marginBottom = "20px";
    });

    failureDateEls.forEach((failureDateEl) => {
        failureDateEl.style.display = "block";
        if (calculateBetweenDays(failureDateEl) < 7) {
            displayNewLabel(failureDateEl);
        }
    });

    //newラベルのつく要素があった場合はアコーディオントリガー文言にもnewラベルを付ける
    if (hasNewLabel(infoFailureEl)) {
        displayNewLabel(document.getElementById('failure_info'));
    }
} else {
    infoFailureEl.textContent = "現在発生中の障害はありません。";
    infoFailureEl.style.marginBottom = "30px";
    document.querySelector('[data-form-accordion="failure"]').setAttribute('aria-expanded', 'true');
    document.getElementById('failure_info_content').setAttribute('aria-hidden', 'false');
}

/**
 * 緊急・災害情報アコーディオン制御
 * 緊急・災害情報の日付が今日から1週間以内の場合、アコーディオントリガー・掲載日にnewラベル表示
 */
const infoSaigaiEl = document.querySelector('[data-info-saigai]');
const saigaiEls = infoSaigaiEl.querySelectorAll('[data-support-info="navigation"]');
const saigaiDateEls = infoSaigaiEl.querySelectorAll('[data-support-info="date"]');

//緊急・災害情報ssi内に記述されるdtの文言が不要なので書き換え
infoSaigaiEl.getElementsByTagName("dt")[0].textContent = "";

// 緊急・災害情報がある場合：1週間以内に掲載の情報があればアコーディオントリガー・掲載日にnewラベル表示
// 緊急・災害情報がない場合：「新しい情報はありません」の文言を表示(アコーディオンは閉じたまま)
if (saigaiEls.length > 0) {
    saigaiEls.forEach((saigaiEl) => {
        saigaiEl.style.marginBottom = "20px";
    });

    saigaiDateEls.forEach((saigaiDateEl) => {
        saigaiDateEl.style.display = "block";
        if (calculateBetweenDays(saigaiDateEl) < 7) {
            displayNewLabel(saigaiDateEl);
        }
    });

    //newラベルのつく要素があった場合はアコーディオントリガー文言にもnewラベルを付ける
    if (hasNewLabel(infoSaigaiEl)) {
        displayNewLabel(document.getElementById('saigai_info'));
    }
} else {
    infoSaigaiEl.textContent = "新しい情報はありません。";
    infoSaigaiEl.style.marginBottom = "30px";
}
