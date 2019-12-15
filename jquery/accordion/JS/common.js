"use strict";
$(function () {
  // デフォルト状態では１番目の説明パネルを開く
  $("#accordion>dd:not(dd:first-of-type)").css("display", "none");

  // メニューがクリックされた時対応する説明パネルは開き、それ以外は閉じる
  $("#accordion>dt").on("click", function () {
    $("#accordion>dd").slideUp();
    $(this).next().slideDown();
  });
});