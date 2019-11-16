'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 8;


}());
//税率だけ何故かbtn.onclick関数内で使えなかったのでグローバル変数化
var TAXRATE = 10;
btn.onclick = function (event) {
  event.preventDefault();
  var tabletNum = tablet.value;
  var pcNum = pc.value;
  var Subtotal = calcSubtotal(tabletNum, pcNum);
  var Tax = calcTax(Subtotal, TAXRATE);
  var Total = calcTotal(Subtotal, Tax);
  subtotal.textContent = Subtotal;
  tax.textContent = Tax;
  total.textContent = Total;
}
//小計の計算
var calcSubtotal = function (tabletNum, pcNum) {
  return 10000 * tabletNum + 50000 * pcNum;
}
//税額の計算
var calcTax = function (Subtotal, TAXRATE) {
  return Subtotal * (TAXRATE / 100);
}
//合計の計算
var calcTotal = function (Subtotal, Tax) {
  return Subtotal + Tax;
}