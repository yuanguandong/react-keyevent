# React Keyevent
### An easy-to-use keyboard event react component, Can achieve a variety of custom keyboard functions, Package size less than 3kb
非常容易使用的一个键盘事件监听react组件，可实现各种自定义快捷键功能，只有不到3kb
### Live demo
https://yuanguandong.github.io/react-keyevent/

### Install
```bash
npm i react-keyevent -S
```

### How to use
```js
import React, { useState } from "react";
import Keyevent from "react-keyevent";

const TopSide = () => {
  const [count, setCount] = useState(0);
  const onAltT = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="TopSide"
      events={{
        onAltT,
      }}
      needFocusing
    >
      <span className="tip">Click To Focusing</span>
      <div className="group">
        <span className="key">Alt</span>
        <span className="key">T</span>
        <span className="count">{count}</span>
      </div>
    </Keyevent>
  );
};
export default TopSide
```

### Props

| property     | required | type                                          | defaultValue | description                                                  |
| ------------ | -------- | --------------------------------------------- | ------------ | ------------------------------------------------------------ |
| events       | true     | { [key: string]: (e: KeyboardEvent) => void } | null         | The binding keyboard events 绑定的键盘事件                                               |
| needFocusing | false    | boolean                                       | false        | 是否需要聚焦，若值为true,则需要聚焦Focus这个容器组件（点击） |