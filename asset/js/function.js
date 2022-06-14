// ---------- リサイズ用 ---------- // 
var resizeWidth;

$(window).on('load resize', function() {
		resizeWidth = $(window).width();
})
/* _______________________________________ */


// ---------- 検索モーダル ---------- // 
var searchBtn = $('#searchBtn');
var searchBox = $('#searchBox');
var searchClose = $('#searchClose');

searchBtn.on('click', function() {
		if (resizeWidth > 767) {
			if (searchBox.hasClass('js-open')) {
				searchBox.removeClass('js-open');
			} else {
				searchBox.addClass('js-open');
			}
		}
});

searchClose.on('click', function() {
		if (resizeWidth > 767) {
			searchBox.removeClass('js-open');
		}
});

/* _______________________________________ */



// ---------- ハンバーガーメニュー(spのみ) ---------- //
var hamburgerBtn = $('#hamburgerBtn');
var hamburgerMenu = $('#hamburgerMenu');

hamburgerBtn.on('click', function() {
		if (resizeWidth < 768) {
			hamburgerMenu.slideToggle();
			$(this).toggleClass('js-hamburgerOpen');
			
			var slide = $('#lang ul').bxSlider({     
					controls    : true,
					auto        : false,
					pager: false,
					minSlides: 1,
					maxSlides: 2,
					moveSlides  : 1,
					nextText: '▲',
					prevText: '▲',
					touchEnabled: false,
					speed       : 100
			});
		}
});

$(window).on('load resize', function() {
		if (resizeWidth < 768) {
			$('.flow_box').css('display','block');
			$('#flow').bxSlider({
					controls    : false,
					auto        : false,
					pager: false,
					infiniteLoop: false,
					moveSlides  : 1,
					nextText: '▲',
					prevText: '▲',
					speed       : 100
			});
		}
});

// メガメニュー
var gnav_list = $('.gnav_list');
var gnav_full = $('.gnav_list-full');
var gnav_about = $('.gnav_list-about');
var gnav_aboutInner = $('.gnav_list-aboutInner');
var gnav_point = $('.gnav_list-point');
var gnav_pointInner = $('.gnav_list-pointInner');
var gnav_device = $('.gnav_list-device');
var gnav_deviceInner = $('.gnav_list-deviceInner');
var gnav_shop = $('.gnav_list-shop');
var gnav_shopInner = $('.gnav_list-shopInner');
var gnav_net = $('.gnav_list-net');
var gnav_campaign = $('.gnav_list-campaign');
var gnav_special = $('.gnav_list-special');
var gnav_specialInner = $('.gnav_list-specialInner');
var gnav_news = $('.gnav_list-news');
var gnav_newsInner = $('.gnav_list-newsInner');
var gnav_help = $('.gnav_list-help');

function megaOpen(here, open) {
	if (here.hasClass(open)) {
		here.removeClass(open);
	} else {
		gnav_list.removeClass(open);
		here.addClass(open);
	}
}

// spでメニューを開いた状態からpcサイズへリサイズされた際のリセット処理
$(window).on('resize', function() {
		if (resizeWidth > 767) {
			hamburgerBtn.removeClass('js-hamburgerOpen');
			hamburgerMenu.css('display','none');
			gnav_list.removeClass('js-megaOpen');
			gnav_full.css('display','none');
			gnav_full.removeClass('js-megaOpen');
		}
});

/*
// マウスを乗せたらメガメニューでる
gnav_list.on('mouseover', function() {
  if (resizeWidth > 767) {
	// 「WAONを知りたい」をマウスオーバーした時
	if ($(this).hasClass('gnav_list-about') || $(this).hasClass('gnav_list-aboutInner')) {
	  gnav_aboutInner.addClass('js-megaOpen');
	  gnav_about.addClass('js-triangle');
	}
	
	// 「ポイントを使いこなす」をマウスオーバーした時
	if ($(this).hasClass('gnav_list-point') || $(this).hasClass('gnav_list-pointInner')) {
	  gnav_pointInner.addClass('js-megaOpen');
	  gnav_point.addClass('js-triangle');
	}
	
	// 「WAON端末操作について」をマウスオーバーした時
	if ($(this).hasClass('gnav_list-device') || $(this).hasClass('gnav_list-deviceInner')) {
	  gnav_deviceInner.addClass('js-megaOpen');
	  gnav_device.addClass('js-triangle');
	}
	
	// 「使えるお店を探すについて」をマウスオーバーした時
	if ($(this).hasClass('gnav_list-shop') || $(this).hasClass('gnav_list-shopInner')) {
	  gnav_shopInner.addClass('js-megaOpen');
	  gnav_shop.addClass('js-triangle');
	}
  }
  });
  
  // マウスを離したらメガメニュー閉じる
  gnav_list.on('mouseout', function() {
  if (resizeWidth > 767) {
	// 「WAONを知りたい」からマウスが離れた時
	if ($(this).hasClass('gnav_list-about') || $(this).hasClass('gnav_list-aboutInner')) {
	  gnav_aboutInner.removeClass('js-megaOpen');
	  gnav_about.removeClass('js-triangle');
	}
	
	// 「ポイントを使いこなす」からマウスが離れた時
	if ($(this).hasClass('gnav_list-point') || $(this).hasClass('gnav_list-pointInner')) {
	  gnav_pointInner.removeClass('js-megaOpen');
	  gnav_point.removeClass('js-triangle');
	}
	
	// 「WAON端末操作について」からマウスが離れた時
	if ($(this).hasClass('gnav_list-device') || $(this).hasClass('gnav_list-deviceInner')) {
	  gnav_deviceInner.removeClass('js-megaOpen');
	  gnav_device.removeClass('js-triangle');
	}
	
	// 「使えるお店を探すについて」からマウスが離れた時
	if ($(this).hasClass('gnav_list-shop') || $(this).hasClass('gnav_list-shopInner')) {
	  gnav_shopInner.removeClass('js-megaOpen');
	  gnav_shop.removeClass('js-triangle');
	}
  }
  });
  */
/* _______________________________________ */


// ------ 言語切替遷移 ----- //
var langBtn = $('.lang');

langBtn.change(function() {
		
		// もし選択された言語が「日本語」なら
		if ($(this).val().match(/日本語/)) {
			window.location.href = "/";
		}
		
		// もし選択された言語が「English」なら
		if ($(this).val().match(/English/)) {
			window.location.href = "/language/en/";
		}
		
		// もし選択された言語が「中文（繁體字）」なら
		if ($(this).val().match(/中文（繁體字）/)) {
			window.location.href = "/language/tc/";
		}
		
		// もし選択された言語が「中文（简体字）」なら
		if ($(this).val().match(/中文（简体字）/)) {
			window.location.href = "/language/sc/";
		}
		
		// もし選択された言語が「ภาษาไทย」なら
		if ($(this).val().match(/ภาษาไทย/)) {
			window.location.href = "/language/th/";
		}
		
		// もし選択された言語が「Tiếng Việt」なら
		if ($(this).val().match(/Tiếng Việt/)) {
			window.location.href = "/language/vi/";
		}
		
		// もし選択された言語が「한국어」なら
		if ($(this).val().match(/한국어/)) {
			window.location.href = "/language/kr/";
		}
		
		// もし選択された言語が「русский」なら
		if ($(this).val().match(/русский/)) {
			window.location.href = "/language/ru/";
		}
});
/* _______________________________________ */

$('.bx-next').on('click',function() {
		console.log('click');
});



// ------ よくある質問ページ、アコーディオン ----- //
$(".linkList_link").click(function(){
		$($(this).next(".linkList_acdnArea")).animate(
			{height: "toggle", opacity: "toggle"},
			
			"nomal"
		);
});
/* _______________________________________ */


// ------ SPのフッターのアコーディオン ----- //
//   $(".sp-utilitiesNav li").click(function(){
//     $($(this).next(".sp-utilitiesNav_content")).animate(
//       {height: "toggle", opacity: "toggle"},

//       "nomal"
//     );
//   });
// /* _______________________________________ */


// ------ サッカー、アコーディオン ----- //

$('.moreOpenBtn').click(function () {
		//現在の状況に合わせて開閉
		$('.moreOpenBtn').toggleClass('js-moreOpenBtn');
		
		$('.soccerTableAll').toggleClass('js-soccerTableAll');
		$('.tableblockBoxWrap').slideToggle();
		
		
		
});



/* _______________________________________ */

// ------ SPのフッターのアコーディオン ----- //
$('.spnavBtn').click(function () {
		
		//   $('.spnavBtn').next().hide();
		//   $(this).next().slideDown();
		
		//   var offsetTop = $(this).next().offset().top;
		// var this_height = $(this).outerHeight();
		// $('html,body').animate({scrollTop: (offsetTop - this_height - this_height*0.4)}, 2000, 'swing');
		
		
		
		
		
		
		
		// // //現在の状況に合わせて開閉
		// if($(this).hasClass('js-spOpenList')){
		
		//  $(this).removeClass('js-spOpenList');
		//  $(this).next().slideUp(1000);
		
		//  // もしspnav-1がjs-spOpenList持っていたら
		//  //
		// }else{
		// $(this).addClass('js-spOpenList');
		
		// $(this).next().slideDown(1000);
		// if($(this).hasClass('spnav-2')){
		
		//   if($('.spnav-1').hasClass('js-spOpenList')){
		//    $('spnav-3').slideUp(1000);
		//   }
		// }
		// }
		
		
		
		
		// // $('.spOpenList').css('display','none');
		//   console.log($('.spnav-4').next());
		
		var spOpenListClass = 'js-spOpenList';
		var $this = $(this);
		
		// クリックした spnavBtn を直前にクリックしたか
		var isClickedJustBefore = $this.hasClass(spOpenListClass);
		
		// クリックした spnavBtn が所属する row のクラス名を取得する
		// js-spnav-row-1 など
		var currentRowClass = (function () {
				var classList = $this.attr('class').split(/\s+/);
				var matchPattern = /^js-spnav-row-\d+$/
				
				for (var i = 0; i < classList.length; i++) {
					if (matchPattern.test(classList[i])) {
						return classList[i];
					}
				}
		})()
		
		// 見た目上、クリックした spnavBtn の下にある ListBox が開かれているか
		var isOpenedListBox = false;
		
		// ".spnavBtn.js-spnav-row-1" などのセレクタ
		// 同じ行に属する spnavBtn をすべて取得して、ListBox が開かれているかを見ている
		$('.spnavBtn' + '.' + currentRowClass).each(function (_, element) {
				var $element = $(element);
				
				if ($element.hasClass(spOpenListClass)) {
					isOpenedListBox = true;
				}
		})
		
		$('.spnavBtn' + '.' + currentRowClass).each(function (_, element) {
				var $element = $(element);
				$element.removeClass(spOpenListClass);
				
				// ListBox が開かれていて、前回とは同じ navBtn がクリックされたとき
				if (isOpenedListBox && isClickedJustBefore) {
					$element.next('.spOpenList').slideUp(500);
				} else if (isOpenedListBox && !isClickedJustBefore) { // 前回とは異なる navbtn がクリックされたとき
					// アニメーションなしで切り替えられているように見せるため hide()
					$element.next('.spOpenList').hide();
				}
		})
		
		// 前回とは違う navBtn をクリックされたとき、つまり ListBox を開くとき
		if (!isClickedJustBefore) {
			$this.addClass(spOpenListClass);
			
			if (isOpenedListBox) {
				$this.next('.spOpenList').slideDown(0);
			} else {
				$this.next('.spOpenList').slideDown(500);
			}
		}
});




/* _______________________________________ */

/* ---------- 下層ページ、アコーディオン ---------- */

$( '.acdn_ttl' ).click( function(){
		if($(this).hasClass('js-acdnOpen')){
			$(this).next().slideUp(500,
				function(){
				$(this).prev().removeClass('js-acdnOpen');}
			);
			
			
		}else{
			$(this).next().slideDown(500);
			$(this).addClass('js-acdnOpen');
		};
});





// 遷移していた時、アコーディオンを１回分だけ開かせておく



// if (location.hash === '#money_waon_1'){
//       $('#money_waon_1').addClass('js-acdnOpen');
// $('#money_waon_1').next().slideDown(500);

//   }

//URLを読み込んで、ID名の部分（#〜〜）を取ってきて、hashに入れる
var hash = window.location.hash ;
var $hashEl = $(hash);

// ページ内をID名を検索して開かせる
if($hashEl.length){
	$hashEl.next().slideDown(500);
	$hashEl.addClass('js-acdnOpen');
}

/* _______________________________________ */


// ---------- モーダルウィンドウ ---------- //
// スクロールバーの横幅を取得
$('html').append('<div class="scrollbar" style="overflow:scroll;"></div>');
var scrollsize = window.innerWidth - $('.scrollbar').prop('clientWidth');
$('.scrollbar').hide();

// 「.modal-open」をクリック
$('.modal-open').click(function(){
		
		var bodyWidth = window.innerWidth;
		var contentWidth = document.body.clientWidth;
		var scrollbarWidth = bodyWidth - contentWidth;
		
		
		
		
		
		console.log(scrollbarWidth);
		
		
		// html、bodyを固定（overflow:hiddenにする）
		$('html, body').addClass('lock');
		
		
		
		$('body.lock').css('padding-right',scrollbarWidth+'px')
		$('.pageTop').css('right',scrollbarWidth+'px')
		
		
		// オーバーレイ用の要素を追加
		$('body').append('<div class="modal-overlay"></div>');
		
		// オーバーレイをフェードイン
		$('.modal-overlay').fadeIn('slow');
		
		// モーダルコンテンツのIDを取得
		var modal = '#' + $(this).attr('data-target');
		
		// モーダルコンテンツを囲む要素を追加
		$(modal).wrap("<div class='modal-wrap'></div>");
		
		// モーダルの.modalwrapの後に、閉じるボタンを追加
		$('.modal-wrap').show();
		$('.modalwrap').after('<a class="modal-close"><img src="/asset/img/common/btn-close.png" alt="閉じるボタン"></a>');
		
		
		// モーダルコンテンツの表示位置を設定
		modalResize();
		
		// モーダルコンテンツフェードイン
		$(modal).fadeIn('slow');
		
		// モーダルコンテンツをクリックした時はフェードアウトしない
		$(modal).click(function(e){
				e.stopPropagation();
		});
		
		// 「.modal-overlay」あるいは「.modal-close」をクリック
		$('.modal-overlay, .modal-close').off().click(function(){
				// モーダルコンテンツとオーバーレイをフェードアウト
				$(modal).fadeOut('slow');
				$('.modal-overlay').fadeOut('slow',function(){
						// html、bodyの固定解除
						$('body.lock').css('padding-right','');
						$('.pageTop').css('right',0);
						$('html, body').removeClass('lock');
						// オーバーレイを削除
						$('.modal-overlay').remove();
						$('.modalwrap').next('.modal-close').remove();
						// モーダルコンテンツを囲む要素を削除
						$(modal).unwrap("<div class='modal-wrap'></div>");
				});
		});
		
		// リサイズしたら表示位置を再取得
		$(window).on('resize', function(){
				modalResize();
		});
		
		// モーダルコンテンツの表示位置を設定する関数
		function modalResize(){
			// ウィンドウの横幅、高さを取得
			var w = $(window).width();
			var h = $(window).height();
			
			// モーダルコンテンツの横幅、高さを取得
			var mw = $(modal).outerWidth(true);
			var mh = $(modal).outerHeight(true);
			
			// モーダルコンテンツの表示位置を設定
			if ((mh > h) && (mw > w)) {
				$(modal).css({'left': 0 + 'px','top': 0 + 'px'});
			} else if ((mh > h) && (mw < w)) {
				var x = (w - scrollsize - mw) / 2;
				$(modal).css({'left': x + 'px','top': 0 + 'px'});
			} else if ((mh < h) && (mw > w)) {
				var y = (h - scrollsize - mh) / 2;
				$(modal).css({'left': 0 + 'px','top': y + 'px'});
			} else {
				var x = (w - mw) / 2;
				var y = (h - mh) / 2;
				$(modal).css({'left': x + 'px','top': y + 'px'});
			}
		}
		
});


var touch_start_y;

// タッチしたとき開始位置を保存しておく
$(window).on('touchstart', function(event) {
		touch_start_y = event.originalEvent.changedTouches[0].screenY;
});

$(window).on('.modalwrap ', function(event) {
		var current_y = event.originalEvent.changedTouches[0].screenY,
		height = $('.modal-overlay').outerHeight(),
		is_top = touch_start_y <= current_y && $('.modal-overlay')[0].scrollTop === 0,
		is_bottom = touch_start_y >= current_y && $('.modal-overlay')[0].scrollHeight - $('.overlay')[0].scrollTop === height;
		
		// スクロール対応モーダルの上端または下端のとき
		if (is_top || is_bottom) {
			// スクロール禁止
			event.preventDefault();
		}
});



if(location.hash){
	$('.modal-open[data-target="'+location.hash.split("#")[1]+'"]').trigger('click');
}
/* _______________________________________ */


/* 表のタイトルがfixする */
var $table = $('.titlefixtable');
if($table.length > 0) {
	$table.floatThead();
}



/* _______________________________________ */

/* リンクをスマートフォン端末以外では無効にする */
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

if (!isMobile) {
	$('a[href^="tel:"]').on('click', function(e) {
			e.preventDefault();
	});
	$('a[href^="tel:"]').hover(function(){
			$('a[href^="tel:"]').css('opacity','1');
	});
}

/* _______________________________________ */

/* 発行手数料 */

if (!$('.aeoncard-rightBox .aeoncard_top  img').length) {
	$('.aeoncard_top').hide();
}

/* _______________________________________ */


/* フローティングバナー____________________________ */


// スムーススクロール
$('a[href^="#"]').click(function(){
		var speed = 500;
		
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
});



/* =============================================
①期間内は無条件に毎回ページ遷移ごとに表示
================================================ */
// $('.bnrBox').css('display', 'block');
// $('.bnrBox_btnClose').click(function(){
//   $('.bnrBox').fadeOut();
// });


/* =============================================
②クローズボタンをクリックしておらず、表示期間中なら表示
================================================ */
// $('.bnrBox_btnClose').click(function(){
//   $.cookie('is-clicked-once','1',{expires:1825});
//   $('.bnrBox').fadeOut();
// });

// var isClickedOnce = $.cookie('is-clicked-once');



// // 例えば、表示期間が2018年2月20日から、
// var timeStart = new Date(2018,1,19);
// // 2018年2月23日までだったとき。
// var timeEnd = new Date(2018,1,23);
// // （現在時刻）
// var timeNow = new Date();

// if(isClickedOnce!=='1'&&timeStart <= timeNow && timeNow <=timeEnd){

// $('.bnrBox').css('display', 'block');

// }



/* ==========================================
③1度だけ表示します。ページ遷移したら消えます
============================================ */
// $('.bnrBox_btnClose').click(function(){
//   $('.bnrBox').fadeOut();
// });

// var isDisplayedOnce = $.cookie('is-displayed-once');
// if(isDisplayedOnce!=='1'){

// $('.bnrBox').css('display', 'block');

// }
// $.cookie('is-displayed-once','1',{expires:1825});


/* =============================================
④バナー消したら出ない。ページから離別して、帰ってきたら出てくる
================================================ */
/*$('.bnrBox_btnClose').click(function(){
		$.cookie('is-clicked-once','1',{expires:1825, path: "/"});
		$('.bnrBox').fadeOut();
});


var domain = location.host


if(!document.referrer.match(new RegExp('^' + location.protocol  + '//'  + location.host))){
	$.removeCookie('is-clicked-once');
}


var isClickedOnce = $.cookie('is-clicked-once');

if(isClickedOnce!=='1'){
	
	$('.bnrBox').css('display', 'block');
	
}*/


//フローティングバナーを表示する
floating_banner_show('.bnrBox');
function floating_banner_show(bnrElm){
	
	var bnr_cookName = 'floating_bnrcook',//cookieName
	showLimitTime = '86400',//リミット秒24時間
	showBnrStatus = true,//バナーを表示するか（デフォルトtrue)
	elapsedTime = 0,//closeからの経過時間
	closeElm = '.bnrBox_btnClose',//閉じるボタンエレメント
	$bnrElm = $(bnrElm);//バナー包括エレメント
	
	
	if($(bnrElm).length){
		var closeTime = $.cookie(bnr_cookName),
		nowTime = parseInt( (new Date).getTime() / 1e3, 10);
		
		if(closeTime){
			elapsedTime = nowTime - closeTime;
			showBnrStatus = (elapsedTime >= showLimitTime)? true : false;
		}
		showBanner(showBnrStatus);
	}
	
	
	function showBanner(status){
		if(status){
			$bnrElm.fadeIn('300',function(){
				closeBanner(closeElm);
			});
		}else{
			$bnrElm.fadeOut()
		}
	}
	
	function closeBanner(closeElm){
		$(closeElm).click(function(){
			var time = parseInt( (new Date()).getTime() / 1e3 );//現在時刻
				$.cookie(bnr_cookName,time,{expires:31,path:"/"});
			$('.bnrBox').fadeOut();//削除
		});
	}
}
