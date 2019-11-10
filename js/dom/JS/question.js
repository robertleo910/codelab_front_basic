'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
var txt1 = document.getElementById("txt1");
console.log(txt1);


// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
var txt2 = document.getElementById("txt2");
console.log(txt2.textContent);//HTMLタグを含まない
console.log(txt2.innerHTML);//HTMLタグを含む


// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
txt2.textContent = "書き換えました";
console.log(txt2);


// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
var txt3 = document.getElementById("txt3").textContent;//#id="txt3"のテキストを取得する
document.getElementById("btn1").onclick = function () {
  document.getElementById("txt4").textContent = txt3;
}//#id="txt4"の要素の内容を書き換え表示させる
//console.log(document.getElementById("btn1").onclick);


// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
var txt4 = document.getElementById("input1").value;
document.getElementById("form1").onsubmit = function (event) {
  event.preventDefault();//ページの再読み込みの防止
  document.getElementById("txt5").textContent = txt4;
}


// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
document.getElementById("form2").onsubmit = function (event) {
  event.preventDefault();
  document.getElementById("result1").textContent = document.getElementById("form2").item1.value;
}


// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。
document.getElementById("form3").onsubmit = function (event) {
  event.preventDefault();
  var array = [];
  var check = document.getElementById("form3").check;
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      array.push(check[i].value);
    }
  }
  document.getElementById("result2").textContent = array;
}


// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
document.getElementById("form4").onsubmit = function (event) {
  event.preventDefault();
  document.getElementById("result3").textContent = document.getElementById("form4").radio.value;
}


// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。
document.getElementById("form5").onsubmit = function (event) {
  event.preventDefault();
  var text = document.getElementById("form5").company.value;
  if (text.length === 0 || text === null) {
    window.alert("会社名が未入力です。");
  }
}


// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
var css = document.getElementById("txt6");
css.style.color = "red";
css.style.fontSize = "32px";


// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。
document.getElementById("btn2").onclick = function () {
  var pTag = document.createElement("p");
  var text = document.createTextNode("ノード追加テキスト");
  document.getElementById("parent").appendChild(pTag);
  pTag.appendChild(text);
}


// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
document.getElementById("btn3").onclick = function (event) {
  event.preventDefault();
  var parent = document.getElementById("parent");
  parent.removeChild(parent.firstChild);
}


// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
document.getElementById("btn4").onclick = function () {
  var link1 = document.getElementById("link1");
  var href = link1.getAttribute("href");
  console.log(href);
  link1.setAttribute("href", "https://www.yahoo.co.jp");
}


// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
var li = document.querySelectorAll("#list1 li");
console.log(li);
li.forEach(function (item, index) {
  item.onclick = function () {
    console.log(this.dataset.num);
  }
})

// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
document.getElementById("btn5").onclick = function (event) {
  event.preventDefault();
  document.getElementById("txt7").classList.add("red");
}


// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
document.getElementById("btn6").onclick = function (event) {
  event.preventDefault();
  document.getElementById("txt7").classList.remove("red");
}


// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
document.getElementById("btn7").onclick = function (event) {
  event.preventDefault();
  document.getElementById("txt7").classList.toggle("red");
}