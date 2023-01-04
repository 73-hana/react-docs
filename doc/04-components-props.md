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

## コンポーネントのレンダー

React 要素は、DOM のタグを表すものだけではなく、要素はユーザ定義のコンポーネントを表すこともできる

ユーザが定義したコンポーネントを記述するとき、通常の DOM 要素と似たように属性や子要素を記述することができる

この属性や子要素は、単一のオブジェクトとして、それら自身が記述されているコンポーネントに渡される

このオブジェクトのことを`props`という

```jsx
import React from "react";

function ComponentProps03(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
    </>
  );
}

export default ComponentProps03;
```

```jsx
import ReactDOM from "react-dom";
import ComponentProps03 from "./components/ComponentProps03";

const app = (
  <>
    <ComponentProps03 name="Nanami" />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
```

---

## コンポーネントを組み合わせる

コンポーネントは、他のコンポーネントを自身の出力（返り値）に含めることができる

これによって、ページの詳細度が低い時も高い時でも、コンポーネントという単一の抽象化の恩恵を受けることができる

```jsx
import React from "react";

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

function ComponentProps04() {
  return (
    <div>
      <Welcome name="Nanami" />
      <Welcome name="Saa" />
      <Welcome name="John" />
    </div>
  );
}

export default ComponentProps04;
```

---

## コンポーネントの抽出

コンポーネントが肥大してしまった場合は、恐れずに分割する方が良い

UI の一部が複数回使われている場合、またはその UI 自体が複雑である場合は、そのコンポーネントを分割するのがよい

---

## Props は読み取り専用

関数コンポーネントもクラスコンポーネントも、自身の Props は決して変更してはいけない

```jsx
function sum(a, b) {
  return a + b;
}
```

このような関数は入力されたものを変更せず、新しい値を返す（同じ入力に対して同じ結果が返ってくる）ので純粋であると言える

```jsx
function withdraw(account, amount) {
  account.total -= amount;
}
```

先ほどの関数と対照的に、上記の関数は引数を変化するため純粋ではない

全ての React コンポーネントは、自身の Props に対して順関数のようにふるまう必要がある

もちろん UI は動的であり、時間や状態に応じて変化するものであるため、React には state という概念が用意されている
