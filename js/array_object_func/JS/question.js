// 'use strict';
// 例題 コンソールに数値「1」を出力してください。
console.log(1);


// 配列問題
// 変数programを宣言し、配列の要素として「HTML」「CSS」「JavaScript」「PHP」を代入してください.
// 変数programをコンソールに表示してください。
var program = ["HTML", "CSS", "JavaScript", "PHP"];
console.log(program);

// 配列問題(インデックス)
// 変数programの要素のうち、CSSのみコンソールに表示してください。
console.log(program[1]);

// 配列問題(入れ子)
// 以下の変数carsの要素アクアのみコンソールに表示してください。
var cars = ['トヨタ', ['プリウス', 'クラウン', 'アクア'], 'ニッサン', 'ホンダ'];
console.log(cars[1][2]);

// 配列問題(要素の個数)
// 変数carsの要素の個数を取得し、コンソールに表示してください。
console.log(cars.length);

// 配列問題(for文との組み合わせ)
// 変数carsの要素をfor文を使い全て表示してください。
for (var i = 0; i < cars.length; i++) {
  if (i === 1) {
    for (var j = 0; j < cars[1].length; j++) {
      console.log(cars[i][j]);
    }
  } else {
    console.log(cars[i]);
  }
}

// 配列問題(要素の追加)
// 変数carsの配列末尾に文字列「スバル」を追加してください。
// 追加後、for文を使い、結果をコンソールに表示してください。
cars.push("スバル");
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// 配列問題(要素の更新)
// 変数carsの要素「クラウン」の値を「セルシオ」に更新してください。
// 更新後、for文を使い、結果をコンソールに表示してください。
cars[1][1] = "セルシオ";
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
cars.forEach(function (value) {
  console.log(value);
});

// 配列問題(要素の削除)
// 変数carsの配列末尾の要素(スバル)を削除してください。
// 削除後、for文を使い、結果をコンソールに表示してください。
cars.pop();//pop()は最後の要素を削除する
cars.forEach(function (value) {
  console.log(value);
});
//shift(); shift()は最初の要素を削除する
cars.forEach(function (value) {
  console.log(value);
});


// 配列問題(indexof)
// indexOfメソッドを使い、変数carsに「ダイハツ」という要素が存在する場合は「ダイハツはあります。」、存在しない場合は「ダイハツはありません。」というメッセージをコンールに表示してください。
//含まれていない場合は-1を返す。
if (cars.indexOf("ダイハツ") === -1) {
  console.log("ダイハツはありません。");
} else {
  console.log("ダイハツはあります。");
}
//console.log(cars.indexOf("ダイハツ"));
//console.log(cars.indexOf("ニッサン"));

// オブジェクト問題
// 変数dogを宣言し、オブジェクトを作成しましょう。以下の名前と値を代入してください。
// 名前:type 値:Bulldog
// 名前:length 値:80
var dog = {
  type: "Bulldog",
  length: 80
};
console.log(dog);

// オブジェクト問題
// 変数dogの名前「type」の値をコンソールに表示してください。
console.log(dog.type);


// オブジェクト問題(値の更新)
// 変数dogのlengthの値を90に更新してください。
// 更新後、結果をコンソールに表示してください。
dog.length = 90;
console.log(dog);

// オブジェクト問題(プロパティの追加)
// 変数dogにプロパティ(名前:bark、値：Bow!!)を追加してください。
// 追加後、結果をコンソールに表示してください。
dog.bark = "Bow!!";
console.log(dog);
//delete dog.bark;　　　　//deleteで削除できる
//console.log(dog);

// オブジェクト問題(for..in文)
// 変数dogをfor..in文を使い、下の結果と同じなるように名前と値をコンソールに全て表示してください。
// ↓表示される結果
// type:Bulldog
// length:90
// bark:Bow!!
for (var p in dog) {
  console.log(`${p}:${dog[p]}`);
}

// オブジェクト問題(プロパティの削除)
// 変数dogのtypeプロパティを削除しましょう。
// 結果をfor..in文を使いコンソールに表示し、プロパティが削除されたことを確認してください。
delete dog.type;
for (var p in dog) {
  console.log(`${p}:${dog[p]}`);
}

// 関数問題
// 関数messageを定義し、関数内にコンソールを表示する処理を記載してください。その後、関数messageを実行してください。
function message() {
  console.log("やっほー");
}
message();

// 関数問題(引数)
// 関数plusCalcを定義し、足し算の結果をコンソールに表示してください。また引数は2つ取り、返り値は使わないものとする。その後、関数pulsCalcを実行してください。
function plusCalc(a, b) {
  console.log(`${a}+${b}=${a + b}`);
}
plusCalc(100, 200);

// 関数問題(返り値)
// 関数multipliedCalcを定義し、掛け算の結果を返り値とする関数を作成してください。引数は2つ取るものとする。
function multipliedCalc(a, b) {
  return a * b;
}
console.log(multipliedCalc(100, 50));

// 関数問題(オブジェクト)
// 以下の変数humanにメッセージを表示するmesメソッドを追加し、メソッドを実行してください。
// コンソールに表示する結果は以下となること。
// 私の名前はJimです
var human = {
  name: 'Jim',
  weight: 180,
};
human.mes = function () {
  console.log(`私の名前は${human["name"]}です`);
}
human.mes();
//console.log(human);

// 関数問題(ローカル変数、グローバル変数)
// 以下の変数fruitの出力結果が異なる理由を記載してください。
// 理由：変数の名前が同じ場合、関数が呼び出されれば関数の中の変数(ローカル変数)が優先されるので、前者は関数の中のfruitプロパティの値を読み取られるのに対し、後者は関数外のfruitプロパティの値を読み取るように命令しているから(ただし、関数の中でもvarを使わずに宣言するとグローバル変数として扱われる)。

var fruit = 'りんご';

function getFruitName() {
  var fruit = 'バナナ';
  return fruit;
}

console.log(getFruitName()); // バナナ
console.log(fruit); // りんご

// 関数問題(ローカル変数、グローバル変数)
// 以下の変数countryの出力結果が同じとなる理由を記載してください。
// 理由：関数の中のcountryにはvarが使われていないのでグローバル変数として扱われ、結果coutryを呼び出してもgetCountryName()に上書きされ「アメリカ」が出力される。
country = '日本';

function getCountryName() {
  country = 'アメリカ';
  return country;
}

console.log(getCountryName()); // アメリカ
console.log(country); // アメリカ

// 関数問題(即時関数)
// 以下の記述を即時関数で囲んでください。またES2015以前の環境では即時関数を使ったほうが良い理由を記載してください。
// 理由：変数の有効範囲（スコープ）をなるべく狭めることで、スコープの外側に影響を与えることを防ぐため。
(function () {
  var shop = 'コンビニ';
  console.log(shop);
}());


// 関数問題(無名関数)
// 以下の関数を無名関数に書き換えて実行してください。
/*function greet(name) {
  return name;
}
*/

var greet = function (name) {
  return name;
}
console.log(greet('Jim'));