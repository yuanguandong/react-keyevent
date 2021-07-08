import React, { useState } from "react";
import "./App.css";
import Keyevent from "./lib";

interface IProps {}

const TopSide = () => {
  const [count, setCount] = useState(0);
  const onAltT = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="TopSide"
      bindKeys={{
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

const LeftSide = (props: any) => {
  const { collapsed } = props;
  const [count, setCount] = useState(0);
  const onCtrlL = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="LeftSide"
      bindKeys={{
        onCtrlL,
      }}
      needFocusing
      style={{ width: collapsed ? 40 : 200 }}
    >
      {!collapsed && (
        <div className="group">
          <span className="key">Ctrl</span>
          <span className="key">L</span>
          <span className="count">{count}</span>
        </div>
      )}
    </Keyevent>
  );
};

const RightSide = (props: any) => {
  const { collapsed } = props;
  const [count, setCount] = useState(0);
  const onMetaR = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="RightSide"
      bindKeys={{
        onMetaR,
      }}
      needFocusing
      style={{ width: collapsed ? "calc(100% - 40px)" : "calc(100% - 200px)" }}
    >
      <div className="group">
        <span className="key">Meta(Win/Commond)</span>
        <span className="key">R</span>
        <span className="count">{count}</span>
      </div>
    </Keyevent>
  );
};

const App: React.FunctionComponent<IProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCtrlB = () => {
    console.log("collapsed", collapsed);
    setCollapsed(!collapsed);
  };
  return (
    <Keyevent
      className="App"
      bindKeys={{
        onCtrlB,
      }}
    >
      <div className="container">
        <TopSide />
        <LeftSide collapsed={collapsed} />
        <RightSide collapsed={collapsed} />
      </div>
    </Keyevent>
  );
};

export default App;
