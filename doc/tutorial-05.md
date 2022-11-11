# タイムトラベルの実装

時間を巻き戻す機能を実装する

着手がある度に```squares```のコピーを作り、この配列をイミュータブルなものとして扱ってきた

そのため、squaresの過去のバージョンをすべて保存しておけば、過去の手番をさかのぼることができる

```history```stateをGameコンポーネント内に置くことで、```squares```stateをBoardコンポーネントから取り除くことができる（```history```は```squares```を包含しているから）

リフトアップを行う

```jsx
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }

  render() {
    ...
  }
}