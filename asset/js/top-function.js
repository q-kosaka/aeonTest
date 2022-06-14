




$(function(){

    var bxSliderConfig = {
        
        slideMargin : 0,
        controls    : true,
        auto        : true,
        //minSlides   : 3,
        maxSlides   : 3,
        moveSlides  : 1,
        speed       : 1000,
        pause       : 5000,
        touchEnabled: false,
       onSlideBefore: function(x){
            this.stopAuto();
            this.startAuto();
        }
    };

 
    var userAgent = window.navigator.userAgent.toLowerCase();
 
    // Firefox 59 以上で bxSlider のスライダーがクリック出来なくなる不具合対応
    // 本当はバージョンで見た方が良いのですが、とりあえずブラウザ判定で対応
    // マウスのスワイプでスライダーの移動が出来なくなるので注意です。
    if (userAgent.indexOf('firefox') != -1) {
      bxSliderConfig.touchEnabled = false;
    }

    var slide = $('#slider ul').bxSlider(bxSliderConfig);

    // var slide = $('#slider ul').bxSlider({
        
    //     slideMargin : 0,
    //     controls    : true,
    //     auto        : true,
    //     //minSlides   : 3,
    //     maxSlides   : 3,
    //     moveSlides  : 1,
    //     speed       : 1000,
    //     pause       : 5000,
    //    onSlideBefore: function(x){
    //         this.stopAuto();
    //         this.startAuto();
    //     }
    // });

    /**** topページのみheaderのpタグをh1にする *****************/
    var body = $('body');
    var hTtl = $('#headerTitle');

    if (body.hasClass('topH1')) {
        hTtl.replaceWith('<h1 id="headerTitle" class="header_boxInnerTitle header_boxInnerTitle-main"><a href="/"><img src="/asset/img/common/img-head-logo.png" alt="WAON"></a></h1>');
    }
    /******************************************************/
});

