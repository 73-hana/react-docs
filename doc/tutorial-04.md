# イミュータビリティはなぜ重要なのか

```js
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    ...
  }

  render() {
    ...
  }
}
```

上記のコート例で、現在の配列（```this.state.squares```）を直接変更する代わりに、```slice()```メソッドを使って```square```配列のコピーを作っている

一般的に、変化するデータに対しては2種類のアプローチがある

１番目のアプローチはデータの値を直接いじること（ミューテート、書き換え）

```js
// ミューテートを伴うデータの変化
var player = { score: 1, name: 'Jeff' };
player.score = 2; // scoreのデータに新しいデータを直接代入している
```

２番目のアプローチは望む変更を加えた新しいデータのコピーで古いデータを上書きすること

```js
// ミューテートを伴わないデータの変化
var player = { score: 1, name: 'Jeff' };

var newPlayer = Object.assign({}, player, { score: 2 });

var newPlayer = { ...player, score: 3 };
```

イミュータビリティにより複雑な機能の実装が簡単になる

ミュータブルなオブジェクトは中身が直接変化するが、イミュータブルなオブジェクトは別のオブジェクトを生成する

ミュータブルなオブジェクトの場合変更の検出は困難である（オブジェクトツリーの全体を確認する必要あり）が、イミュータブルなオブジェクトの場合は古いオブジェクトと新しいオブジェクトを比較するだけで良いため簡単

イミュータビリティの利点はReactでpure componentを構築しやすい（コンポネの再レンダリングに対しての親和性が高い）

- 巻き戻しなどの複雑な機能が簡単に実装できる
- 古いオブジェクトと新しいオブジェクトを比較するだけのため変更の検出が容易
- 上記の理由から、Reactの再レンダリングと高い親和性を持つ

# 関数コンポーネント

Reactにおける関数コンポーネントとは、renderメソッドだけを有志て自分のstateを持たないコンポーネントを、よりシンプルに書くための方法

*クラスコンポーネントと関数コンポーネントの違いは、それ自体にstate機能があるかどうかなのか！*

クラスコンポーネントはReact.Componentを継承してコンストラクタでpropsを設定しているのに対して、関数コンポーネントは引数としてpropsを受け取り表示すべき内容を戻り値としてもつ関数である

*クラスコンポーネントの簡略版が関数コンポーネント*

```jsx
// クラスコンポーネント
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick}
      >
        {this.props.value}
      </button>
    )
  }
}
```

```jsx
// 関数コンポーネント
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

# 手番の処理

プレイヤーが着手するたびに```xIsNest```が反転されることで手番の状態を保持する

```jsx
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  ...
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  }
}
```

# ゲームの勝者の判定

```jsx
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] === squares[c]) { // もしsquare[a]がnullではなく、a = b = c（同じマーク）だったら
      return squares[a];
    }
  }
  return null;
}
```

```jsx
class Board extends React.Component {
  render(
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
    }
    return ();
  )
}