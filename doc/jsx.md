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
