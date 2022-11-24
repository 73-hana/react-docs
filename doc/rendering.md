# 要素のレンダー

要素とは、React アプリケーションの最小単位の構成ブロックのことである（HTML 要素ににたもの）

要素は画面上に描画したいものの説明書きであり、ブラウザの DOM 要素と違い React 要素はプレーンなオブジェクトになる

## 要素を DOM として描画する

HTML ファイルにある任意の要素を 1 つ選び、それをルート DOM ノードと呼ぶ（ルート DOM ノードの中身は ReactDOM によって管理される）

React だけで構成されたアプリケーションは通常ルート DOM ノードを一つだけ持っており、既存のアプリに React を追加しようとしている場合は独立したのルート DOM ノードを好きなだけ持つことができる

React 要素をルート DOM ノードにレンダリングする場合は、まず`const root = ReactDOM.createRoot()`の引数に DOM 要素（HTML の要素を取得する`document.getElementById()`）を渡し、`root.render()`に React 要素を渡す

```jsx
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<p>Hello World</p>);
```

---

## レンダーされた要素の更新

React 要素はイミュータブルであるため、一度要素を作成した場合その子要素や属性を変更することは出来ない

UI を更新する方法の 1 つとして、新しい要素を作成して`root.render()`に渡すことができる

```jsx
import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <>
      <h1>Hello World!</h1>
      <p>It is {new Date().toLocaleTimeString()}</p>
    </>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

しかし、この方法ではないさらに良い方法として、`state`付きコンポーネントを定義することができる

---

## React は必要な箇所の実を更新する

ReactDOM は要素とその要素を以前のものと比較し、差分を検知し、DOM を最新の状態に変えるため必要な部分の DOM だけを更新する

時間の経過によりどのように UI が更新されるかを考えるよりも、任意の時点に置いて UI がどのように見えるかを考えることがバグの排除に一躍買っている

---
