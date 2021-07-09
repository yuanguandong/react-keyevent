import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default () => {
  return (
    <Typography style={{textAlign:'center'}}>
      <Title level={1}>An easy-to-use keyboard event react component</Title>
      <Title level={4}>Can achieve a variety of custom keyboard functions, Package size less than<Text code>3kb</Text></Title>
      <Title level={4}>非常容易使用的一个键盘事件监听react组件，可实现各种自定义快捷键功能</Title>
    </Typography>
  );
};
