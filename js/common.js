//NAVI PC
$(function() {
    // ナビゲーションのリンクを指定
   var navLink = $('.gnav li a');
 
    // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
   var contentsArr = new Array();
  for (var i = 0; i < navLink.length; i++) {
       // コンテンツのIDを取得
      var targetContents = navLink.eq(i).attr('href');
      // ページ内リンクでないナビゲーションが含まれている場合は除外する
      if(targetContents.charAt(0) == '#') {
         // ページ上部からコンテンツの開始位置までの距離を取得
            var targetContentsTop = $(targetContents).offset().top;
         // ページ上部からコンテンツの終了位置までの距離を取得
            var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
         // 配列に格納
            contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
   };
 
  // 現在地をチェックする
   function currentCheck() {
       // 現在のスクロール位置を取得
        var windowScrolltop = $(window).scrollTop();
        for (var i = 0; i < contentsArr.length; i++) {
           // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
          if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
                // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
               navLink.removeClass('current');
               navLink.eq(i).addClass('current');
                i == contentsArr.length;
            }
       };
  }
 
   // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on('load scroll', function() {
      currentCheck();
 });
 
 // ナビゲーションをクリックした時のスムーズスクロール
    navLink.click(function() {
      $('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top
       }, 300);
        return false;
   })
});

//Page TOP
//このページのはじめに戻る
$(function() {
//id="goto-pagetop"の要素が「このページのはじめに戻る」ボタン

//はじめは非表示
$('#goto-pagetop').hide();
//スクロールで段々表示・非表示
$(window).scroll(function () {
if ($(this).scrollTop() > 200) {
$('#goto-pagetop').fadeIn();
} else {
$('#goto-pagetop').fadeOut();
}
});
//クリックでページの一番上へ行く
$('#goto-pagetop').click(function () {
$('body, html').animate({ scrollTop: 0 }, 500);
return false;
});
});

//NAVI SP
$(function() {
	$('.sp-menu').click(function(){
		$(".menu-icon").toggleClass('active');
		$(".navMenu ul").slideToggle(800);
	});
});

//NAVI CHANGE
$(function(){
	$('#navMenu ul li').each(function(){
		$('a', this).attr({ 
			'data-label': $('img', this).attr('alt')
		});
	});
});