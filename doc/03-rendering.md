# 要素のレンダー

要素とは React アプリケーションの最小単位の構成ブロックである。要素は画面上に表示したものの説明書きである。

ブラウザの DOM 要素とは異なり、React 要素はプレーンオブジェクトであるため安価に作成できる。 `reactDOM`が React 要素を元に DOM を更新する作業を担当している。

要素とはコンポーネントを構成するものである。

## 要素を DOM として描画する

ReactDOM は HTML ファイルの中にある任意の要素を 1 つ選び、この要素の中身全てを reactDOM で管理することができる。この要素をルート DOM ノードという。

React だけで構成されたアプリケーションは、通常ルート DOM ノードを一つだけ持っている。既存のアプリに React を追加しようとしている場合は、独立したのルート DOM ノードを好きなだけ持つことができる。

React 要素をルート DOM ノードにレンダリングする場合は、まず`const root = ReactDOM.createRoot()`の引数に DOM 要素（HTML の要素を取得する`document.getElementById()`）を渡し、`root.render()`に React 要素を渡す。

```jsx
import React from "react";
import { ReactDOM } from "react";

const rootDOMNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOMNode);
const element = <h1>Hello, world</h1>;
root.render(element);
```

---

## レンダーされた要素の更新

React 要素はイミュータブルであるため、一度要素を作成したらその子要素や属性を変更することはできない。要素は一つのフレームのため、ある地点の UI を表すだけである。

UI を更新する方法の 1 つとして、新しい要素を作成して`root.render()`に渡すことができる。

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

---

## React は必要な箇所の実を更新する

ReactDOM は`render()`が呼ばれたタイミングで、要素と子要素をいままでのものと比較して、DOM を望ましい状態に変更する。そのとき必要な分だけ DOM を更新する。

時間の経過によりどのように UI が更新されるかを考えるよりも、任意の時点に置いて UI がどのように見えるかを考えることがバグの排除に一躍買っている。

---
