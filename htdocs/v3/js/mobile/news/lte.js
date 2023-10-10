$(function () {
    getNewsJson(function (data) {
        var lteNews = getFilteredNews(data, {
            "matchGroups": ["lte"]
        });

        makeNewsList(lteNews, 'lte_news');
    });
});