import Logo from '@/assets/logo.png';
import { Typography } from 'antd';
import React, { useState } from 'react';
import Keyevent from 'react-keyevent';
import {
  Background,
  Code,
  Footer,
  LeftSide,
  RightSide,
  TopSide
} from './components';
import './index.less';
import Intro from './intro';
const { Title, Paragraph, Text, Link } = Typography;
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
      <Background />
      <div className="wrap">
        <div className="alignCenter">
          <div className="logo">
            <img className="logoImage" src={Logo} alt="react-keyevent" />
            <span className="name">React Keyevent</span>
          </div>
        </div>
        <Intro />
        <div className="container">
          <TopSide />
          <LeftSide collapsed={collapsed} />
          <RightSide collapsed={collapsed} />
        </div>
        
        <Title level={2}>Easy To Use</Title>
        <Paragraph>You can very easily integrate a certain panel to enable keyboard shortcuts, you can <Link href="https://github.com/yuanguandong/react-keyevent/tree/master/example" target="_blank">click here</Link> to view whole demo</Paragraph>
        
        
        <Code />
        
        <Title level={2}>Props</Title>
        <Typography style={{margin:'20px 0'}}>
          <Title level={4}>events</Title>
          <Paragraph>Key like this: onCtrlM、onShiftU、onMetaT……</Paragraph>
          <Text code>type {`{ [key: string]: (e: KeyboardEvent) => void }`}</Text>
        </Typography>
        <Typography style={{margin:'20px 0'}}>
          <Title level={4}>needFocusing</Title>
          <Paragraph>Events only take effect if you want to focus on a panel, Please use needFocusing</Paragraph>
          <Text code>type boolean</Text>
        </Typography>
        <Footer />
      </div>
    </Keyevent>
  );
};

export default Index;
