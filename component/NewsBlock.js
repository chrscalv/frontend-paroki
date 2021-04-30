import { Card, Button, Typography, List, Divider, Avatar } from "antd";
const { Title, Paragraph, Text } = Typography
const {Meta} = Card

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const NewsBlock = () => {
  return (
    <div className="news">
        <Divider orientation="center">
          <Title>
            Berita Paroki
          </Title>
        </Divider>
        <div className="container-fluid">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <Button type="link">Lihat Selengkapnya</Button>
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="/altar.jpeg"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />,
        </div>   
    </div>
  );
}

export default NewsBlock;