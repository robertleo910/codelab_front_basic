"use strict";
(function () {
  let question1 = document.getElementsByName("question1");
  let question2 = document.getElementsByName("question2");
  let question3 = document.getElementsByName("question3");
  let modal = document.getElementById("modal");
  let mask = document.getElementById("mask");
  let close = document.getElementById("close");

  //解答を押したときの処理
  document.getElementById("answer").addEventListener("click", function () {
    //ラジオボタンの値を取得
    let count = 0;
    for (let i = 0; i < question1.length; i++) {
      if (question1[i].checked) {
        let question1_answer = parseInt(question1[i].value);
        if (question1_answer === 2) {
          count++;
        }
      }
    }
    for (let i = 0; i < question2.length; i++) {
      if (question2[i].checked) {
        let question2_answer = parseInt(question2[i].value);
        if (question2_answer === 3) {
          count++;
        }
      }
    }
    for (let i = 0; i < question3.length; i++) {
      if (question3[i].checked) {
        let question3_answer = parseInt(question3[i].value);
        if (question3_answer === 2) {
          count++;
        }
      }
    }

    //正答率を計算しモーダルウィンドウを表示
    modal.classList.add("show");
    mask.classList.remove("hidden");
    document.getElementById("result").textContent = `正答率は${Math.floor((count / 3) * 100)}％でした`;

    //「閉じる」を押してモーダルを非表示する
    close.addEventListener("click", function () {
      mask.classList.add("hidden");
      modal.classList.remove("show");
    });

    //mask部分をクリックしてモーダルを非表示する
    mask.addEventListener("click", function () {
      mask.classList.add("hidden");
      modal.classList.remove("show");
    })
  });
}());
