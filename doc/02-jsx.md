# jsx の導入

```jsx
const element = <h1>Hello, World!</h1>;
```

UI がどのような見た目なのか記述するために、React と共に JSX を使用することが推奨されている。

JSX はテンプレート言語ではなく、JavaScript の機能を全て備えた拡張構文である。

JSX は React 要素を生成する。

---

## JSX を使う理由

何かを表示させるための JS コード（JS ロジック）は、イベントに対する反応や状態の時系列変化、画面表示のためのデータ取得など、他のロジックと結合したものである。

昔はフロントエンドのマークアップ部分（HTML/CSS）とロジック部分（JS）とを別々のファイルに記述していた。これは技術の分離（技術の違いを基準にソースコードを管理していた）。

しかし、React はマークアップ部分とロジック部分を緩やかな繋がりでまとめたコンポーネントを単位とする JSX 記法を用いることで、関心の分離（機能や役割を基準にソースコードを管理する）を実現している。

## JSX に式を埋め込む

JavaScript の式を JSX に埋め込む場合は、中括弧に囲む。中括弧内には、あらゆる有効な JavaScript の式を含めて使用できる。

```jsx
import React from "react";
import { ReactDOM } from "react";

const user = {
  firstName: "Don",
  lastName: "Joe",
};

function returnAge(age) {
  return `I am ${age} years old.`;
}

export default function CurlyBracket() {
  return (
    <div>
      <p>My name is {user.firstName + " " + user.lastName}.</p>
      <p>{returnAge(34)}</p>
    </div>
  );
}
```

---

## JSX もまた式である

JSX は、コンパイルされると関数呼び出しに変換され、その関数は JS オブジェクトを出力する。

つまり、JSX は JS の式であるため、`if`文や`for`文の中で使用することもでき、また変数に代入したり、関数の引数として渡すことも可能である。

```jsx
import React from "react";

const isTrue = true;

export default function JsxAsExpression() {
  if (isTrue) {
    return <p>Yes, this is true.</p>;
  } else {
    return <p>Nope, this isn't true.</p>;
  }
}
```

---

## JSX で属性を指定する

JSX 要素の属性には引用符と中括弧のどちらも使用できる。

引用符と中括弧を同時に利用することはできないため、属性値に文字を当てる場合には引用符を用いて、JS 式を用いる場合は中括弧を用いる。

```jsx
import React from "react";

export default function JsxAttribute() {
  const attr = {
    name: "sample",
  };
  return (
    <div>
      <p className="sample">sample element</p>
      <p className={attr.name}>sample element</p>
    </div>
  );
}
```

---

## JSX で子要素を指定する

タグが空の場合、XML のように`/>`で閉じることができる。

JSX のタグは子要素を持つことができる。

---

## JSX はインジェクション攻撃を防ぐ

ReactDOM は、JSX に埋め込まれた値をレンダー前にエスケープするされ、全てが文字列に変換される。

このため、自分のアプリケーションで明示的に書かれたものではないあらゆるコードは、注入できない。

---

## JSX はオブジェクトの表現である

Babel は JSX を`React.createElement()`の呼び出しに変換（コンパイル）する。

```jsx
const element = <h1 className="greeting">Hello, World!</h1>;
```

これは以下のように変換（コンパイル）される。

```jsx
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, World!"
);
```

そして、上記コードは本質的には以下のようなオブジェクトが生成される。

```jsx
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, World!",
  },
};
```

このオブジェクトは React 要素と呼ばれるものである。React 要素は画面に表示したいものの説明書きとして考えることができる。

---
