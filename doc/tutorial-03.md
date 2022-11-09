# ゲームを完成させる

# Stateのリフトアップ

現時点ではSquareコンポーネントがそれぞれでコンポーネントの状態を保持している（一元的に管理されていない）

Boardが各Squareに現在のStateを問い合わせる事も可能だが、コードが分かりにくくなり、壊れやすくリファクタリングしにくくなるためおすすめしない

```jsx
// not recommended

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  getUnifiedStatus() {
    const unifiedStatus = [];
    for (let i = 0; i < 9; i++) {
      unifiedStatus[i] = 
    }
  }
}
```

*BoardでSquareのStateを問い合わせる方法が思いつかなかった…どうせ使わないからいいけど、ダメな例としてメモに残しておきたかった*

ベストの解決策は、Squareの親コンポーネントであるBoardコンポーネントでゲームの状態を保持すること

> 複数の子要素からデータを集めたい、または2つの子コンポーネントに互いにやり取りさせたいと思った場合は、代わりに親コンポーネント内で共有のstateを宣言する必要があります。親コンポーネントはpropsを使うことで子に情報を返すことができます。こうすることで、子コンポーネントが兄妹同士、あるいは親との間で常に同期されるようになります。

コンポーネントのstateは基本的にプライベートで、外からのアクセスは出来ないようになっている

なので、コンポーネント同士のやり取りやstateの一元管理を行う（つまり外部から子コンポーネントのstateにアクセスする必要が出てきた）場合は、代わりに親コンポーネントのstateを使用する

子コンポーネントのpropsを用いることで、子コンポーネントに親コンポーネントのstate情報を渡すことができる

```jsx
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // このstateはA（子コンポネの状態を管理している（各々別々の状態を持っている））
      ...
    };
  }

  render() {
    return (
      ...
    )
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // このstateはB（親コンポネ）内でA（子コンポネ）の状態を一元管理できる
      xxx: yyy,
    };

    renderA() {
      return <A value={this.state.xxx} />;
    }

    render() {
      return (
        ...
      )
    }
  }
}
```

BoardコンポーネントはそれぞれのSquareのpropsを経由してBoardのstateを渡すことで、何を表示すべきか伝えることができる

```js
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  
  ...
}
```

```jsx
[
  'o', null, 'x',
  'x', 'x', 'o',
  'o', null, null,
]
```

*Boardコンポーネント内でSquareコンポーネントを呼び出しているので、BoardがSquareの親である*

*Squareコンポーネントが各々で状態を管理している場合、データがばらばらに保管されている*

*Board.stateの値をSquareに渡す方式で一元管理している場合、データの管理が容易になる*

実際に、Board.stateの情報を、Square.props経由でSquareに渡してみる

```jsx
renderSquare(i) {
  return <Square value={i} />;
}
```

Boardコンポーネント内でSquareをインスタンス化し、```Square.props.value```に```i```を渡している（現在Squareでは```this.props.value```ではなく```this.state.value```の値を参照しているため、```i```は無視されている）

Squareコンポーネントに```Board.state.squares```の値を渡すようにする

```js
renderSquare(i) {
  return <Square value={this.state.Squares[i]} />;
}
```

どのマス目に何が入っているかを一元管理しているのはBoardなので、インスタンス化されたSquareがクリックされたときにBoardのstateが更新される必要がある

しかし、クラスのstateはプライベートなので外からアクセス（個々では子コンポネであるSquareからのアクセスも外部アクセスとなる）ができない

そこで、対策としてBoardからSquareに関数を渡して、クリックされたときにその関数が着火するようにする

```jsx
renderSquare(i) {
  return (
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  );
}
```

Squareコンポーネントを修正して、必要なくなった```constructor```を削除し、```onClick```で```this.props.onClick()```（ここでは```renderSquare(i)```内で定義された```handleClick(i)```を指す）が着火するよう設定する

次にSquareコンポーネントを設定する

```<button>```にイベントリスナを設定し、クリックされるとpropsに渡されたonClick()プロパティを呼び出す

BoardはSquareに```onClick={() => this.handleClick(i)}```を渡していたので、```<button>```に設定される関数は```handleClick(i)```である

```jsx
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

```<button onClick={}>```におけるonClickと、```<Square onClick={}>```におけるonClickは意味が異なる

*組み込みコンポーネント（DOM要素）の場合は属性名がすでに決まっているため自由に決められない*

*カスタムコンポーネント（React.Component継承）の場合は自由にカスタムできる*

慣習として、Reactではイベントを表すpropsには```on[Event]```という名前を、イベントを処理するメソッドには```handle[Event]```という名前を付けることになっている

```jsx
handleClick(i) {
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}
```

*```setState```はセッターみたいな用途だと思った```