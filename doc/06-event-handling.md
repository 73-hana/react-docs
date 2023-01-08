# イベント処理

React 要素のイベント処理は DOM 要素のイベント処理と似ているが、いくつか違いがある。

- React 要素のイベントは小文字でなくキャメルケースである
- JSX ではイベントハンドラとして関数を渡す
- React 要素では`false`を返してもデフォルトの動作を抑止することができない

React を使う場合、一般的には DOM 要素の生成後に`addEventListener`を使用する必要はない。代わりに要素が最初にレンダリングされる際にイベントリスナを設定するようにする。

関数コンポーネント内でイベント処理を行う場合は以下の通り：

```jsx
import React from "react";

export default function ReactEvent() {
  function handleSubmit(e) {
    e.preventDefault();
    window.alert("You clicked submit.");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

クラスコンポーネント内でイベント処理を行う場合は以下の通り：

```jsx
class ReactEventClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isToggleOn: ~prevState.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default ReactEventClassComponent;
```

JS では、クラスのメソッドはデフォルトではバインドされない。`this.handleClick`へのバインドを忘れて`onClick`に渡した場合、実際に関数が呼ばれても`this`は`undefined`となってしまう。`onClick={this.handleClick}`のように括弧を末尾に付けずに何らかのメソッドを参照する場合、そのメソッドはバインドしておく必要がある。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_objects/Function/bind

もしバインドを行いたくない場合は、以下の方法で回避できる。

- パブリッククラスフィールド構文

```jsx
class ReactEventPublicClass extends React.Component {
  handleClick = () => {
    console.log("This is:", this);
  };
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ReactEventPublicClass;
```

- イベントハンドラ内でアロー関数を利用する

この場合は、コンポーネントが再レンダリングされるたびに異なるアロー関数が都度生成される。

大体のユースケースでは問題にならないが、コールバックが props の一部として他のコンポーネントに渡される場合、下層のコンポーネントが余分に再描画されることになる。

```jsx
class ReactEventArrowFunction extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}

export default ReactEventArrowFunction;
```

一般的にはコンストラクタでバインドするか、クラスフィールド構文を利用するのが望ましい。

## イベントハンドラに引数を渡す

イベントハンドラに追加のパラメータを渡す場合は、アロー関数もしくは`function.prototype.bind`を使う。
