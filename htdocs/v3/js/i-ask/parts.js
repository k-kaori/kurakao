$(function () {
    var label = "";
    var separator = "";
    var limit_count = 20;
    var url_arr = new Array();
    var postion_arr = new Array();
    var sp_flg = "";

    for (i = 1; i <= limit_count; i++) {
        separator = "&";
        label = i - 1;
        input_val1 = $("input[name='URL[" + i + "]']").val();
        input_val2 = $("input[name='postion[" + i + "]']").val();
        if (input_val1 && input_val2) {
            url_arr[label] = input_val1;
            url_arr[label] = "?" + url_arr[label] + separator + 'postion=' + input_val2;
        }
        else {
            break;
        }
    }

    if (url_arr.length > 0) {
        var href_url = "https://parts-biglobe.dga.jp/multi_faq_for_json.php";//本番

        loadContent(href_url, {
            params: url_arr,
            sp_flg: sp_flg
        }, function (res) {
            if (res.length > 0) {
                for (i = 0; i < res.length; i++) {
                    selector = "#" + res[i]["postion"];
                    $(selector).append(res[i]["res"]);
                }
            }
        });
    }
});

function loadContent(url, data, callback) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'callback',
        timeout: 3000,
        success: function (res) {
            var myData = res.responseText;
            callback(myData);
        },
        cache: false
    })
}