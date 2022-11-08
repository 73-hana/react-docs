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