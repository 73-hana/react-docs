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

---

## 04 コンポーネントと props

React におけるコンポーネントとは、再利用できる部品として設計された UI を定義する JS 関数またはクラスである。

### コンポーネントの種類

React におけるコンポーネントは 2 種類ある：

- 関数コンポーネント

```jsx
import React from "react";

export default function FunctionComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx:App.jsx
<FunctionComponent name="hana"/>
```

- クラスコンポーネント

```jsx
import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default ComponentProps02;
```

```jsx:App.jsx
<ClassComponent name="hana"/>
```

### props

コンポーネントは、JSX 内で DOM 要素のように記述される。なので JSX 内のコンポーネントは属性値や子要素を持つ。

それらは全てオブジェクトとしてコンポーネントに渡される。それを props という。

関数コンポーネントには引数として props が渡され、クラスコンポーネントにはクラスのプロパティとして props が渡されるようになっている。

また、コンポーネントは純関数であり、自身の props を変更するように記述してはいけない。

---

## 05 state とライフサイクル

state はクラスコンポーネントでしか利用できない。また、state はカプセル化されているため、外部からアクセスすることはできない。

あるコンポーネントが持つ state や props は、他のコンポーネントに渡すことができる。しかし、受け取った props が何由来のものであるかは知ることができない。このデータフローは一般的に「トップダウン」または「単一方向」データフローと呼ばれる。

state を利用する際の注意事項としては以下の通りである：

- state を直接変更してしまうと、再レンダリングが起きなくなってしまう
- state の更新は非同期に行われる可能性があることを念頭に置く
- state の変更はマージされるため、データを一つ一つ変更しても問題ない

### クラスにローカルな state を追加する

クラスコンポーネントに state を追加するには、`constructor()`メソッドで設定する。`constructor()`は常に props を引数として親クラスのコンストラクタを呼び出す必要がある。

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}
```

### クラスにライフサイクルメソッドを追加する

クラスコンポーネントが DOM にレンダリングされるタイミングで実行されるメソッドは`componentDidMount()`であり、クラスコンポーネント由来の DOM が削除されるタイミングで実行されるメソッドは`componentWillUnmount()`である。

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <p>It is {this.state.date.toLocaleTimeString()}.</p>;
  }
}
```

## 06 イベント処理

イベントハンドラを追加するのは、一般的には DOM 要素の生成後に`addEventListener`を使用する必要はない。その代わりに要素が最初にレンダリングされる際にイベントリスナが設定されるようにする。

React 要素のイベント処理は：

- React 要素のイベントは小文字でなくキャメルケースである
- JSX ではイベントハンドラとして関数を渡す
- React 要素では`false`を返してもデフォルトの動作を抑止することができない

関数コンポーネントを用いる場合は以下の通り。

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

クラスコンポーネントを利用する場合は以下の通り。

クラスコンポーネントを使う場合は、イベントハンドラをバインドする必要がある。

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

バインドを使いたくない場合は、パブリッククラスフィールド構文もしくはイベントハンドラ内でアロー関数を用いる方法の 2 つがある。

アロー関数を用いる場合、コンポーネントがレンダリングされるたびに新しいイベントハンドラが生成されることになる。よって、一般的にはコンストラクタのバインドか、クラスフィールド構文を利用するのが望ましい。

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

## 07 条件つきレンダリング

React で条件つきレンダリングを行う場合、3 つの方法がある。

- JS の`if`文を利用する（要素変数を作成して`if`文で内容を切り替える）

```jsx
import React from "react";

export default function ReactConditionalRendering(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <p>Hello Guest!</p>;
  } else {
    return <p>Hello User!</p>;
  }
}
```

```jsx
import React from "react";
import { useState } from "react";

export default function ReactConditionalRenderingVariable() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let button = null;

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick}>Log out</button>;
  } else {
    button = <button onClick={handleLoginClick}>Log in</button>;
  }

  return <div>{button}</div>;
}
```

- `&&`演算子

```jsx
import React from "react";

export default function ReactConditionalRenderingUsingExpression(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Messages</h1>
      {unreadMessages.length > 0 && (
        <h2>Message: {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

- 三項演算子

```jsx
import React from "react";
import { useState } from "react";

export default function ReactConditionalTernaryOperatorRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <div>
      <p>
        The user is <b>{isLoggedIn ? "Currently" : "not"}</b> logged in.
      </p>
    </div>
  );
}
```
