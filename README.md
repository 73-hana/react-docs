# メモ

## 02 JSX

JSX とは、従来の「技術の分離」型の管理ではなく「関心の分離」型の管理を実現する JS の拡張構文である。

JSX は式であるため、`if`文や`for`文の中で利用したり、変数に代入したり、引数として関数に渡す事もできる。

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

### 中括弧

JSX 内の中括弧では JS の変数や関数、1 つの式など全て使用できる。

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

JSX 要素の属性には（HTML ライクな）引用符と、中括弧のどちらも利用できる。しかし、両方を同時に使うことはできないため、属性値に文字を当てる場合には引用符を用いて、JS 式を用いる場合は中括弧を用いる。

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

## 03 レンダリング

ReactDOM は HTML ファイルの中にある任意の要素を 1 つ選び、この要素の中身全てを ReactDOM で管理する。

React 要素をルート DOM ノードにレンダリングする場合は以下のように`createRoot()`の引数に DOM 要素を渡し、`render()`メソッドを呼び出す。

```jsx
import React from "react";
import { ReactDOM } from "react";

const rootDOMNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOMNode);
const element = <h1>Hello, world</h1>;
root.render(element);
```

React 要素はイミュータブルであるため、一度要素を作成したらその中身を変更することはできない。変更するためには state を使用するか、`render()`メソッドを再度呼び出す。

```jsx
import React from "react";
import { ReactDOM } from "react";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

function tick() {
  const element = <p>It is {new Date().toLocaleDateString()}</p>;
  root.render(element);
}

setInterval(tick, 1000);
```
