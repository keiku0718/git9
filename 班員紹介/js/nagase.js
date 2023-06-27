window.addEventListener("scroll", function () {
  // ヘッダーを変数の中に格納する
  const header = document.querySelector("header");
  // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("scroll-nav", window.scrollY > 450);
});

// $(function(){
//   $('button').on('click',function(){
//     $('h2').toggleClass('slide_on');
//   }); 
// });
$(document).ready(function(){
  $('h2').toggleClass('slide_on');
})

//コンテンツを下から上へ
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});