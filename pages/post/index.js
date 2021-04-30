import { Avatar, Typography, List, Space, Divider,Button } from "antd"
const axios = require('axios');
const { Title } = Typography
import Carousel from '../../component/Carousel'
import 'antd/dist/antd.css'

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/post/1/all')
  const data = await res.data
  return {
    props: {post:data}
  }
}

const listData = [];
for (let i = 0; i < 23; i++) {
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

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Post = ({post}) => {
  return (
    <div className="content">
      <div className="container-fluid">
        <Divider orientation="left">
          <Title level={1}>Berita Paroki</Title>
        </Divider>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            // onChange: page => {
            //   console.log(page);
            // },
            pageSize: 5,
          }}
          dataSource={post}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <Button type="link">Baca Selengkapnya</Button>
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

export default Post;