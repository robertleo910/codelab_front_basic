$(function () {
  $('#slider').slick({
    // ここにオプションを追記する
    // 自動再生処理
    autoplay: true,
    // 自動再生速度
    autoplaySpeed: 1500,
    // ドットの表示
    dots: true,
    centerPadding: '30%',
    focusOnSelect: true,
    speed: 1000,
  });
});