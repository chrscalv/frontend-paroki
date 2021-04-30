import { Typography,List, Divider,Space,Button } from 'antd'
const axios = require('axios');
const { Title } = Typography

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/post/2/all')
  const data = await res.data
  return {
    props: {post:data}
  }
}

const IndexRenungan = ({post}) => {
  return (
    <div className="content">
      <div className="container-fluid">
        <Divider orientation="left">
          <Title>Renungan</Title>
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

export default IndexRenungan;