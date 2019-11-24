'use strict';
(function () {
  var form = document.getElementById("form");
  var name = form.name.value;
  var kana = form.kana.value;
  var tel = form.tel.value;
  var mail = form.mail.value;
  document.getElementById("submit").addEventListener("click", function (event) {
    if (name.length === 0 || name === null) {
      event.preventDefault();
      document.getElementById("err-name").textContent = "名前が未入力です。";
    }
    if (!kana.match(/[\x01-\x7E]{1,}/)) {
      event.preventDefault();
      document.getElementById("err-kana").textContent = "全角カナで入力して下さい。";
    }
    if (!tel.match(/[^\d]{10,11}/)) {
      event.preventDefault();
      document.getElementById("err-tel").textContent = "電話番号をハイフンなしで入力して下さい。";
    }
    if (!mail.match(/^[a-zA-Z0-9]{1}[a-zA-Z0-9\.\_\-]*@{1}[a-zA-Z0-9\.\_\-]{1,}\.[a-zA-Z0-9]{1,}$/)) {
      event.preventDefault();
      document.getElementById("err-mail").textContent = "メールアドレスの形式ではありません。";
    }
  })
}());
