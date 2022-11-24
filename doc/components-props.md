# コンポーネントと props

コンポーネントを用いることで、UI を再利用できる部品として独立させることができる。

概念的には、コンポーネントは JavaScript の関数と似ている（例えば、引数に似たもので props と呼ばれる入力を受け取り、画面上に表示するべき React 要素を返り値として返す）

## 関数コンポーネントとクラスコンポーネント

コンポーネントを定義するシンプルな方法として、JavaScript の関数が用意されている

```jsx
import React from "react";

function ComponentProps01() {
  return (
    <>
      <h1>Hello, {props.name}</h1>
    </>
  );
}

export default ComponentProps01;
```

データの入った props というオブジェクトを引数として一つ受け取り、React 要素を返す関数である

文字通り JavaScript の関数であるため、このようなコンポーネントのことを関数コンポーネントと呼ぶ

別の方法として ES6 のクラスを利用することもできる

```jsx
import React from "react";

class ComponentProps02 extends React.Component {
  render() {
    return (
      <>
        <p>Good evening, {this.props.name}</p>
      </>
    );
  }
}

export default ComponentProps02;
```

クラスコンポーネントと関数コンポーネントは、React から見て等価である

props を関数内で受け取るときに、関数コンポーネントは`{props.variable}`だが、クラスコンポーネントは`{this.props.variable}`と記述しなければならない

---
