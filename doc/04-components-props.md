# コンポーネントと props

コンポーネントを用いることで、UI を再利用できる部品として独立させることができる。コンポーネントは概念的には JS の関数と似ている。

例えば、引数として props を受け取り、React 要素を返り値として渡す。

## 関数コンポーネントとクラスコンポーネント

コンポーネントを定義するシンプルな方法は JS の関数を書くことである。

この場合の関数コンポーネントは、データの入った props というオブジェクトを引数として受け取り、React 要素を返す。

```jsx
import React from "react";

export default function FunctionComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx:App.jsx
<FunctionComponent name="hana"/>
```

別の方法として ES6 のクラスを利用することもできる。

props を関数内で受け取るときに、関数コンポーネントは`{props.variable}`だが、クラスコンポーネントは`{this.props.variable}`と記述しなければならない。

```jsx
import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default ComponentProps02;
```

クラスコンポーネントと関数コンポーネントは同じクオリティである。

---

## コンポーネントのレンダー

React 要素は HTML のタグを表すだけでなく、（上で設定したような）ユーザ定義のコンポーネントを表すこともできる。

ユーザ定義のコンポーネントを記述するとき、DOM 要素と同じように扱うことができる。では、DOM 要素のように属性を設定したり、子要素を持たせたりするとどうなるか。それらは単一オブジェクトとして、コンポーネントに渡される。

そのオブジェクトを`props`という。`props`とは、DOM 要素のように記述されたコンポーネントの属性や子要素のことである。

補足情報として、コンポーネントは常に大文字で始めることが推奨されている。React は小文字で始まるコンポーネントを DOM タグとして扱うように設定されているからである。

```jsx
import React from "react";

export default function ReactComponentProps(props) {
  return <h1>Hello {props.name}</h1>;
}
```

```jsx
import ReactDOM from "react-dom";
import ReactComponentProps from "./path/to/file.jsx";

const app = (
  <>
    <ReactComponentProps name="Nanami" />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
```

---

## コンポーネントを組み合わせる

コンポーネントは、他のコンポーネントを自身の出力（返り値）に含めることができる。これによって、ページが入り組んでいてもシンプルでも、コンポーネントという関心の分離を実現する方法の恩恵を受けることができる。

```jsx
import React from "react";

export default function ReactComponentChild(props) {
  return <h1>Welcome! {props.name}</h1>;
}
```

```jsx
import React from "react";
import ReactComponentChild from "./react-component-child";

export default function ReactComponentParent() {
  return (
    <div>
      <ReactComponentChild name="Alex" />
      <ReactComponentChild name="Bobby" />
    </div>
  );
}
```

---

## コンポーネントの抽出

コンポーネントが肥大してしまった場合は、恐れずに分割する方が良い。UI の一部が複数回使われている場合、またはその UI 自体が複雑である場合は、そのコンポーネントを分割するのがよい。

---

## Props は読み取り専用

関数コンポーネントもクラスコンポーネントも、自身の Props は決して変更してはいけない。

関数には純粋なものと純粋でないものがある。純関数は引数を変更せず、新しい値を返す必要がある。

```jsx
// 純関数
function sum(a, b) {
  return a + b;
}
```

```jsx
// 純関数でない
function withdraw(account, amount) {
  account.total -= amount;
}
```

全ての React コンポーネントは純関数として、自身の Props を変更してはいけない。
