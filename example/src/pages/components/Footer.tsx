import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default () => {
  return (
    <div className="footer">
      <Typography>
        <Title>React Keyevent</Title>
        <Paragraph>
          If you think it works, please give me a STAR
        </Paragraph>
        <Text code>@Yuanguandong</Text>
      </Typography>
    </div>
  );
};
