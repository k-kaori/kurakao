$(function () {
    getNewsJson(function (data) {
        var bighikariNews = getFilteredNews(data, {
            "matchGroups": ["bighikari"]
        });

        makeNewsList(bighikariNews, 'bighikari_news');
    });
});