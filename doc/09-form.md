# フォーム

内部に何らかの状態をもつ HTML フォーム要素は、React 匂いて他の DOM 要素と少し異なる動作をする。

例えば、`<input>`や`<textarea>`、`<select>`のようなフォーム要素は通常、自身で状態を保持しており、ユーザの入力を検知して状態を更新する。対して、React では更新されうる状態はコンポーネントの state プロパティに保持され、`setState()`を用いて更新される。

React の state を信頼できる唯一の情報源として扱うと、フォーム要素と React 要素の状態を統合することができる。React によって値が制限されるフォーム要素を「制御されたコンポーネント」という。制御されたコンポーネントを用いることで、ユーザ入力の値は常に React の state によって制御されるようになる。

下記のコードでは、`<input>`要素の`value`属性に`useState()`で設定した`value`プロパティが設定されているため、表示される値は常に`value`プロパティになる。また、変更ごとに`value`プロパティを更新するため、`<input>`要素もリアルタイムに更新される。

```jsx
import React from "react";
import { useState } from "react";

export default function ReactFormControlledComponent() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted: " + value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
```

## textarea タグ

HTML では`<texarea>`要素はテキストを子要素として定義する。それに対して、React では代わりに`value`属性を利用する。

```jsx
import React from "react";
import { useState } from "react";

export default function ReactFormTextarea() {
  const [value, setValue] = useState("Default text");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("An essay was submitted: " + value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
```

## select タグ

HTML では、`<select>`はトップダウンリストを作成する。HTML の`<option>`には`selected`属性があり、その属性で状態を保持している。`selected`属性が付与されてる要素が選択されていることになる。

React は`selected`属性の代わりに`value`属性を親の`<select>`に付与することで状態を管理する。`value`属性に配列を渡すことで、`<select>`要素内の複数のオプションを選択できる。

```jsx
import React from "react";
import { useState } from "react";

export default function ReactFormSelect() {
  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert("Your favorite flavor is: " + value);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={value} onChange={handleChange}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
            <option value="Coconut">Coconut</option>
            <option value="Mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
```

## file input タグ

HTML では、`<input type="file" />`を使うことでユーザにファイルを選ばせて、それをサーバにアップロードしたり JavaScript で操作したりすることができる。しかし読み取り専用の HTML 要素なので制御コンポーネントにする必要がない。

## 複数の入力の処理

複数の制御された`<input>`要素を処理する必要がある場合、それぞれの入力要素に`name`属性を追加することで、ハンドラ関数の中で`event.target.name`に基づいてそれぞれの要素を一意に特定できる。

state は自動的に、新しい state と現在の state をマージするため、変更された部分のみ呼び出せばよい。

```jsx
import React from "react";
import { useState } from "react";

export default function ReactFormMultiInput() {
  const [value, setValue] = useState({
    isGoing: true,
    numberOfGuests: 2,
  });

  function handleInputChange(event) {
    const target = event.target;
    const data = event.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValue({
      [name]: data,
    });
  }

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={value.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={value.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
```

## 制御された入力における null

制御されたコンポーネントで`value`プロパティに値を指定することで、変更させたくない場合にユーザが値を変更できないようになる。しかし、`value`プロパティに誤って`undefined`もしくは`null`を設定してしまうと、入力フィールドが偶然変更可能になる。

## 制御されたコンポーネントの代替手段

制御されたコンポーネントは、あらゆる種類のデータの変更に対するイベントハンドラを設定し、あらゆる入力状態を React の state で管理する必要がある。その場合は非制御コンポーネントの利用を検討する。
