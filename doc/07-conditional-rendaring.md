# 条件つきレンダリング

React で条件つきレンダリングを記述するときには、JS と同じように記述する。

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

## 要素変数

要素を保持しておくために変数を使うことができる。こうすることで、レンダリングされる React 要素の他の部分を変えずにコンポーネントの一部を条件つきにすることができる。

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

## 論理&&演算子によるインライン if

JSX に式を埋め込む際、条件分岐を`boolean && expression`の形で表すこともできる。これは JS の評価の特徴を上手く利用した方法である。

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

## 条件演算子によるインライン if-else

JS の三項演算子を用いたレンダリング方法もある。

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

## コンポーネントのレンダーを防ぐ

コンポーネント自身を隠したい（表示させたくない）場合は、`return`で`null`を出力すると良い。

`null`を返したとしても、コンポーネントのライフサイクルメソッドには着火される。
