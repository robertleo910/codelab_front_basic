"use strict";
$(function () {
  // 矢印をクリックするとページトップに遷移する
  $("#pageTop a").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, { duration: 1500 });
    return false;
  })

  // 150px下にスクロールすると右下にページトップボタンに表示される
  let pageTop = $("#pageTop");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 150) {
      pageTop.fadeIn(0);
    } else {
      pageTop.fadeOut(0);
    }
    return false;
  })
});