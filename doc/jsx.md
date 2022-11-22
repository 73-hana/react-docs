# jsx の導入

JSX とは、JavaScript の構文の拡張である

```jsx
const element = <h1>Hello, World!</h1>;
```

UI がどのような見た目なのか記述するために、React と共に JSX を使用することが推奨されている

JSX はテンプレート言語ではなく、JavaScript の機能を全て備えた拡張構文である

JSX は React 要素を生成する

---

## JSX を使う理由

表示のための JavaScript ロジックは、イベントへの応答や状態の時系列変化、画面表示のためのデータを用意する手段など、他の UI と本質的に結合したものである

マークアップ部分とロジック部分を別々のファイルにおいて、人為的に技術を分離するのが一般的だった

しかし、React はマークアップとロジックを疎結合（お互いが密接につながっていない状態）にしたコンポーネントという単位を用いて関心の分離を実現している

## JSX に式を埋め込む

JavaScript の式を JSX に埋め込む場合は、中括弧に囲む

中括弧内には、あらゆる有効な JavaScript の式を含めて使用できる

```jsx
import React from "react";
import ReactDOM from "react-dom";

const nickName = "Nanami-hana";

const fullName = {
  firstName: "John",
  lastName: "Doe",
};
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const elements = (
  <>
    <p>{nickName}</p>
    <p>{formatName(fullName)}</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("jsx01"));
root.render(elements);
```

---

## JSX もまた式である

JSX がコンパイルされた後、JSX の式は通常の JavaScript の関数呼び出しに変換され、JavaScript オブジェクトへと出力される

つまり、JSX を`if`文や`for`文の中で使用したり、変数に入力したり、引数として受け取ったりすることが可能であるということである

```jsx
import React from "react";
import ReactDOM from "react-dom";

const user = "Jonh Doe";

function getGreeting(user) {
  if (user) {
    return <p>Hello {user}</p>;
  } else {
    return <p>Who are you?</p>;
  }
}

const booksCart = ["book1 - basic", "book2 - advanced", "book3 - superhard"];

function listupBooks(arr) {
  let bookList = [];
  for (let i = 0; i < arr.length; i++) {
    bookList.push(<li>{arr[i]}</li>);
  }
  return <ul>{bookList}</ul>;
}

const output = (
  <>
    <div>{getGreeting(user)}</div>
    <div>{listupBooks(booksCart)}</div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("jsx02"));
root.render(output);
```

---

## JSX で属性を指定する

文字リテラルを属性として指定するため引用符を使用する

しかし、属性に JavaScript 式を埋め込む場合は、中括弧をさらに引用符で囲まない

文字の場合は引用符を用いて、式の場合は中括弧を用いるようにし、両方を使用することはない

```jsx
import React from "react";
import ReactDOM from "react-dom";

const attrObj = {
  className: "sapmleImage",
  src: "sample/image/xxx.png",
};

const root = ReactDOM.createRoot(document.getElementById("jsx03"));
root.render(
  <img className={attrObj.className} src={attrObj.src} alt="sample image" />
);
```

---
