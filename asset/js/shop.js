$(function(){

    // 別ページからクエリ文字列ありで遷移した場合
    var options = getParam();
    if (options.length) {
        $.each(options, function(index, value) {
            $(".shop .chargeSelect .chargeSelect_list input[type='checkbox'][name='" + value + "']").prop('checked', true);
        });
        shop_search();
    }

    // サービスの種類から探す チェックボックス選択時
    $(".shop .chargeSelect .chargeSelect_list label").on("change",function() {
        shop_search();
    });
});


/**
 * URLからクエリ文字列を配列で取得する
 *
 * ?search_option[]=money&search_option[]=auto&search_option[]=payment&search_option[]=member
 *
 * @returns {Array|getParam.params}
 */
function getParam() {

    var queryString = window.location.search || '';
    queryString = queryString.substr(1, queryString.length);

    // パラメター毎にに分割
    var queryItems = queryString.split('&');

    var params = [];
    $.each(queryItems, function(index, value) {
       // パラメータと値に分割
       var option = value.split('=');
       var key = option[0];
       var val = option[1];

       if (key.match(/search_option\[\]/)) {
           params.push(val);
       }
    });
    return params;
}


/**
 * 店舗の絞り込み処理
 *
 */
function shop_search() {
    // チェック項目を配列に格納
    var options = $(".shop .chargeSelect .chargeSelect_list input[type='checkbox']:checked").map(function() {
        return $(this).attr('name');
    }).get();


    if (options.length > 0) {
        // 1つでもチェックがある場合
        // 一旦全店舗非表示にする
        $(".useShop li.useShop_boxInnerList").hide();

        // チェック項目に該当する店舗かどうかを独自データ属性で判断し、表示する
        $(".useShop").find("li.useShop_boxInnerList").each(function(i, list) {
            if (options.length === 1) {
                if ($(list).attr('data-use-' + options[0])) {
                    $(list).show();
                }
            } else if (options.length === 2) {
                if ($(list).attr('data-use-' + options[0]) && $(list).attr('data-use-' + options[1])) {
                    $(list).show();
                }
            } else if (options.length === 3) {
                if ($(list).attr('data-use-' + options[0]) && $(list).attr('data-use-' + options[1]) && $(list).attr('data-use-' + options[2])) {
                    $(list).show();
                }
            } else if (options.length === 4) {
                if ($(list).attr('data-use-' + options[0]) && $(list).attr('data-use-' + options[1]) &&
                    $(list).attr('data-use-' + options[2]) && $(list).attr('data-use-' + options[3])) {
                    $(list).show();
                }
            }
        });
    } else {
        // チェックが1つも無い場合は全件表示
        $(".useShop li.useShop_boxInnerList").show();
    }

    // 該当する店舗が1件も無い店舗種別には、メッセージを表示
    $(".shop .useShop .useShop_boxInner").each(function(i, elm) {
        if ($(elm).find('li').filter(':visible').length === 0) {
            $(elm).prev('.shop_message_none').show();
        } else {
            $(elm).prev('.shop_message_none').hide();
        }
    });
}