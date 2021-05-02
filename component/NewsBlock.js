import { Card, Button, Typography, List, Divider, Avatar } from "antd";
import Link from 'next/link'
const { Title, Paragraph, Text } = Typography
const {Meta} = Card

const NewsBlock = ({posts}) => {
  return (
    <div className="news">
        <Divider orientation="center">
          <Link href="/post">
            <Title type="success">Berita Paroki</Title>
          </Link>
        </Divider>
        <div className="container-fluid">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={posts}
          // loadMore={}
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
                  src={item.thumbnail}
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.published_at}
              />
              {item.body}
            </List.Item>
          )}
        />,
        </div>   
    </div>
  );
}

export default NewsBlock;