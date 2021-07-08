import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default () => {
  return (
    <Typography style={{textAlign:'center'}}>
      <Title level={1}>An easy-to-use keyboard event react component</Title>
      <Title level={4}>Package size less than<Text code>3kb</Text></Title>
      <Title level={4}>
        <Paragraph>
          Global Keyevent - Press <Text keyboard>Ctrl</Text> + <Text keyboard>B</Text> to collapse
          LeftSide
        </Paragraph>
      </Title>
      
    </Typography>
  );
};
