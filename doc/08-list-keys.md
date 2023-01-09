# リストと key

復習：JS で配列を変換するには`map()`関数を用いる。

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
```

上記の例を活用し、配列を要素のリストに変換することができる。

```jsx
import React from "react";

export default function ReactListKeysMap() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return <ul>{listItems}</ul>;
}
```

## key

どの要素が変更、追加もしくは削除されたのかを React が識別できるよう用意しておくべきものが`key`である。兄弟間で項目を一意に特定できれば良いので、配列の番号やデータの ID を用いるのが良い。

しかし、要素の並び順が変更される可能性がある場合、インデックスを Key として利用することは推奨されていない。

key は React へのヒントとして利用されるが、コンポーネントの props には渡されない。もし key の値をコンポーネントにも渡したい場合は別の名前の props を明示的に用意する必要がある。
