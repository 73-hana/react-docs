# Hooks 早わかり

## フックとは？

フックとは、関数コンポーネントに state やライフサイクルといった React 機能を接続するための関数である。

クラスコンポーネントを使わずに React を使うための機能である。

フックのルールとして：

- フックは関数コンポーネントのトップレベルのみで呼び出す。
- フックは React の関数コンポーネント内でのみ呼び出す、JS 関数内では呼び出さない。

## state フック

関数コンポーネントの中でローカルな state を使うために呼び出している。この state は以降の際レンダーの間も React によって保持される。

`useState()`は state の初期値を引数にもち、現在の state の値と、その変数を更新するための関数をペアにして返す。

この関数はコンポーネントの中で呼び出すことができる。

クラスコンポーネントと違い、新しい state と古い state はマージされない。

1 つのコンポーネント内で 2 回以上`useState()`を使うことができる。

```jsx
import React from "react";
import { useState } from "react";

export default function Hooks02StateHook() {
  count[(count, setCount)] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

## effect フック

React では副作用ないし作用という用語がある。副作用とは、外部データの取得や手動での DOM 操作など、他のコンポーネントに影響するような処理のことである。副作用はレンダリングの最中に実行することは出来ない。

`useEffect()`は副作用を実行するためのフックであり、関数コンポーネント内で副作用を実行することを可能にするフックである。

クラスコンポーネントにおける`componentWillUnmount()`や`componentDidMount()`などと同様の目的で使うフックである。

`useEffect()`の引数にコールバック関数を渡し、そのコールバック関数内で副作用を実行させる。副作用はコンポーネント内で宣言されるので、`useEffect()`のコールバック関数内で props や state にアクセスできる。

`useState()`の場合と同様に、`useEffect()`も 1 つのコンポーネント内で 2 つ以上利用することが可能。

```jsx
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Hooks02EffectHook() {
  const [count, setCount] = useState();

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count++)}>Click Me</button>
    </div>
  );
}
```

`useEffect()`は自分をクリーンアップさせるためのコードを含む関数を返り値に指定することができる。例えば、購読の取りやめなどを規定することができる。
