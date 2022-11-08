# スターターコードの中身を確認する

```javascript
class Square extends React.Component {
  render() {
    return (...);
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  
  render() {
    const status = 'Next player: X';

    return (...);
  }
}

class Game extends React.Component {
  render() {
    return(...);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
```

```Square```コンポーネントは1つの```<button>```をレンダーする
```Board```コンポーネントは9個のマス目をレンダーする
```Game```コンポーネントは盤面とプレースホルダをレンダーする

*Gameコンポーネントは盤面としてBoardコンポーネントを呼び出して、Boardコンポーネントはマス目の一つとしてSquareコンポーネントを呼び出している*

*コンポーネントは<Class />でインスタンス化出来るんだろう*

# データをProps経由で渡す

BoardのrenderSquareメソッド内で、propsとしてvalueをSquareに渡すようコードを変更する

```javascript
Class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />
  }
}
```

*value=iとしてSquareコンポーネントをインスタンス化するメソッドを定義？*

次にSquareコンポーネントのrenderメソッドで、渡された値を表示するようにコードを変更する

```javascript
class Square extends React.Component {
  render() {
    return (
      <button className="Square">
        {this.props.value}
      </button>
    )
  }
}
```

*HTMLの属性で値を指定してインスタンス化すると、そのコンポーネントのpropsに値が渡される？*

# インタラクティブなコンポーネントを作る

Squareコンポーネントの```render()```関数の戻り値であるボタンタグを変更する

```js
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { console.log('click');}}>
        {this.props.value}
      </button>
    );
  }
}
```

記述量を減らしthisの混乱しやすい挙動を避ける目的で、通常はアロー関数を用いる

```js
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => { console.log('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```

*MDNのJSチュートリアルには「HTMLの中にonClick属性は使わないように、HTMLがJSで汚れてしまうから」と書いてあった*

*JSXはあくまでもJSだから、onClickも何かにトランスパイルされるのかな*

```js
class Square extends React.Component {
  render () {
    return /*#__PURE__*/React.createElement("button", {
      className: "square",
      onClick: () => {
        console.log('click');
      }
    }, this.props.value);
  }
}
```
*Babelでトランスパイルしてみると、classNameもonClickもオブジェクトとして1つにまとめられて、React.createElementに第２引数として渡されている（ちなみに第1引数はHTMLの要素名、第3引数は要素の内容が記述されている*

*ビルド時にこの連携を保ったままHTMLとJSに分けられるんだろうか…*

Squareコンポーネントが、自分自身がクリックされたことを覚えられるようにし、またクリックされたタイミングで自分をXマークで埋められるようにさせる

コンポーネントが何かを覚えるためには**state**を使う

Reactコンポーネントが自分の状態を管理できるようにするには、コンストラクタで```this.state```を設定する

```this.state```はそれが定義されているコンポーネント内でプライベートである必要がある

*```this.state```はコンポーネント内でプライベートってどういう意味だろう…*

```jsx
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: null,
    };
  }

  render() {
    return {
      <button className="square" onClick={() => {
        console.log('click');
      </button>
      }}>
    };
  }
}
```

JSのクラスでは、サブクラスのコンストラクタを定義するには常に```super```を呼び出す必要がある

```constructor```を持つReactのクラスコンポーネントはReact.Componentを継承しているため、全てのコンポーネントにおいてコンストラクタを```super(props)```の呼び出しから始めるべき

Squareコンポーネントの```render```メソッドを書き換えて、クリックされたときにstateの値を表示できるようにする

```js
class Square extends React.Component {
  constructer(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: "X"})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

*クリックされることで```this.setState(...)```が着火し、this.stateの値が変化する（この場合は```"X"```になる）*

Squareの```render```メソッド内に書かれた```onClick```ハンドラで```this.setState```を呼び出している

```this.setState```が着火すると、```state.value```の変更と同時に```<button>```の再レンダリングをReactに要求する

```setState```をコンポーネント内で呼び出すと、Reactはその内部のコンポーネントも自動的に更新する