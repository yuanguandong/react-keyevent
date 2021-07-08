import Logo from '@/assets/logo.png';
import React, { useState } from "react";
import Keyevent from "react-keyevent";
import { Background, Code, Footer, LeftSide, RightSide, TopSide } from './components';
import "./index.less";
import Intro from './intro';

interface IProps {}


const Index: React.FunctionComponent<IProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCtrlB = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Keyevent
      className="App"
      events={{
        onCtrlB,
      }}
    > 
      <Background/>
      <div className="wrap">
        <div className="alignCenter">
        <div className="logo">
          <img className="logoImage" src={Logo} alt="react-keyevent" />
          <span className="name">React Keyevent</span>
        </div>
        </div>
        <Intro/>
        <div className="container">
          <TopSide />
          <LeftSide collapsed={collapsed} />
          <RightSide collapsed={collapsed} />
        </div>
        <Code/>
      </div>
      <Footer/>
    </Keyevent>
  );
};

export default Index;
