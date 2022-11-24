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
