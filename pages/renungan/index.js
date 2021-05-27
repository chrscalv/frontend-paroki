import { Typography,List, Divider,Space,Button } from 'antd'
import Link from "next/link";
import Layout from '../../component/layout/DefaultLayout'
const axios = require('axios');
const { Title } = Typography

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/posts/2/all')
  const data = await res.data
  return {
    props: {post:data}
  }
}

const IndexRenungan = ({post}) => {
  return (
    <Layout pageTitle="Renungan Harian" pageKeyword="renungan harian katolik">
      <div className="page-content">
      <div className="title-holder">
        <p className="content-title">Renungan</p>
      </div>
      <div className="container-fluid">
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
                title={<Link href={`/renungan/${item.slug}`}>{item.title}</Link>}
                description={item.published_at}
              />
              {item.body}
            </List.Item>
          )}
        />,
      </div>
    </div>
    </Layout>
  );
}

export default IndexRenungan;