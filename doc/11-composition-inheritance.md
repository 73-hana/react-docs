# コンポジションか継承か

## 子要素の出力（Containment）

コンポーネントの中には、動的な子要素を持つものもある。例えば、サイドバーやお知らせのように事前には子要素を知らないコンポーネントのことである。

このようなコンポーネントでは、特別な`children`という props を使い、以下のようにして受け取った子要素を出力することができる。

```jsx
import React from "react";

export default function ReactCompositionInheritanceChildren(props) {
  return <div>{props.children}</div>;
}
```

`children`の代わりに自作の props を用いることも可能。

```jsx
import React from "react";

function HandMadeDiv(props) {
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}

export default function ReactCompositionInheritanceHandmadeChildren() {
  return (
    <div>
      <HandMadeDiv left={<span>sample left</span>} />
      <HandMadeDiv right={<span>sample right</span>} />
    </div>
  );
}
```

## 特化したコンポーネント（Specialization）

コンポーネントを他のコンポーネントの特殊なケースとして活用したい場合、汎用的なコンポーネントに`props`を渡して設定することができる。

## 継承

コンポーネント継承を推奨するようなケースはまったく見つかっていない。

propsとコンポジションにより、コンポーネントの見た目とふるまいを明示的かつ安全にカスタマイズできる。
