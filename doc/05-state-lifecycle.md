# state とライフサイクル

state はクラスコンポーネントでしか利用できない。（関数コンポーネントで利用する際は`useState()`を利用する。）

## クラスにローカルな state を追加する

クラスコンポーネントに state をｓ追加するには、`constructor()`メソッドで設定する。

クラスのコンポーネントは、常に props を引数として親クラスのコンストラクタを呼び出す必要がある。

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

## クラスにライフサイクルメソッドを追加する

コンポーネントが DOM として描画されることを React ではマウントという。また、コンポーネント由来の DOM が削除される場合はアンマウントという。

クラスコンポーネントでは、特別なメソッドを宣言することで、コンポーネントのマウント・アンマウントのタイミングで実行されるコードを記述できる。この特殊なメソッドはライフサイクルメソッドと呼ばれる。

`componentDidMount()`メソッドは、クラスコンポーネントが DOM にレンダリングされた後に実行されるメソッドである。

`componentWillUnmount()`メソッドは、クラスコンポーネントの DOM が削除されるタイミングで実行されるメソッドである。

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

## state を正しく利用する

- state は直接変更してはいけない

再レンダリングされなくなってしまうため、直接変更してはいけない。その代わりに`setState()`を利用する。

- state の更新は非同期に行われる可能性があることを念頭に置く

React はパフォーマンス工場のために、複数の`setState()`呼び出しを１度の更新にまとめて処理することがある。

`this.props`と`this.state`は非同期に更新されるため、順番などは規定できない。

- state の変更はマージされる

`setState()`を呼び出した場合、React は与えられたオブジェクトを現在の state にマージする。よって、`setState()`を呼び出すタイミングで個別に変更することもできる。

## データは下方向に伝わる

親コンポーネントであれ子コンポーネントであれ、特定のコンポーネントがステートフルかステートレスか知ることはできない。つまり state はローカルのものでありカプセル化されていると言われるゆえんである。

例えば、あるコンポーネント自身が持つ state を他のコンポーネントに渡すことができる。しかし、コンポーネントを渡された側からは、props がどこ由来のものなのか知ることはできない。

このデータフローは一般的には「トップダウン」または「単一方向」データフローと呼ばれる。コンポーネントツリーが props が流れ落ちる滝だとすると、各コンポーネントの state とは任意の場所で合流してくる追加の水源である。

React アプリケーションでは、コンポーネントがステートフルかステートレスかは、コンポーネントにおける内部実装の詳細である。
