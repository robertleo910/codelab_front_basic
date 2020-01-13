"use stirct";
$(function () {
  // ハンバーガーメニュー
  // $("#hamberger").on("click", function () {

  // });

  // SOME OF OUR WORKのthumbnail-itemをマウスホバーするとマスクが表示される
  $(".work .thumbnail-item").on({
    "mouseenter": function () {
      $(".mask", this).toggleClass("hidden");
      $(".modal", this).toggleClass("show");
    },
    "mouseleave": function () {
      $(".mask", this).toggleClass("hidden");
      $(".modal", this).toggleClass("show");
    }
  });

  // WHY CHOOSE USのスライドショー
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerPadding: "30%",
    focusOnSelect: true
  })
});