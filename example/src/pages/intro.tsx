import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default () => {
  return (
    <Typography style={{textAlign:'center'}}>
      <Title level={1}>An easy-to-use React component</Title>
      <Title level={4}>
        <Paragraph>
          Press <Text keyboard>Ctrl</Text> + <Text keyboard>B</Text> to collapse
          LeftSide
        </Paragraph>
      </Title>
    </Typography>
  );
};
