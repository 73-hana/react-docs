# Reactとは？

ReactはUIを構築するための、宣言型で効率的で柔軟なJSライブラリ

コンポーネントからUIを組み立てる

React.Componentのサブクラス
```js
class ShoppingList extends React.Component { // React.Componentを継承したShoppingListクラス
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}

// Example usage: <ShoppingList name="Mark" />
```
```ShoppingList```は**Reactコンポーネントクラス**または**Reactコンポーネント型**である

コンポーネントは**props**とよばれるパラメータを受け取り、```render```メソッドを通じてビューの階層構造を返す

*コンポーネントはオブジェクトっぽい？*

*コンポーネント（オブジェクト）を```<ShoppingList name="hoge" />```としてインスタンス化すると、コンストラクタ関数とかがpropsに値を代入して、render()メソッドの戻り値をhtmlとして扱うのかな*

renderメソッドが返すのはReact要素（描画すべきものの軽量版）

たいていのReact開発者は、このReact要素を簡単に記述できるJSXを利用する

JSXにおける```<div />```は、React要素の```React.createElement('div');```と同じ

```js
return (
  <div className="foo">
    <h1>bar</h1>
  </div>
);
```
```js
return React.createElement('div', {className: 'foo'}, React.createElement('h1', null, 'bar'));
```

*```React.createELement()```でHTML構造を作ったらものすごい時間がかかるな*

*それくらいならHTMLをHTML（に似たもの）で直感的に書けるJSXを使った方がいい*

JSXではJSの力を十分に発揮できる

React要素はJavaScriptのオブジェクトであるため、JSXではHTMLに似た記法を保持したままJavaScriptの全ての機能を活用できる

Reactのコンポーネントはカプセル化されており、それぞれから独立して動作する

これにより、単純なコンポーネントを活用して複雑なUIを作成することが可能になる