import { Typography, List, Space, Divider, Button } from "antd"
import Link from 'next/link'
import Layout from '../../component/layout/DefaultLayout'
const axios = require('axios');
const { Title } = Typography
import 'antd/dist/antd.css'

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/posts/1/all')
  const posts = await res.data
  return {
    props: { posts },
    revalidate: 10
  }
}

const Post = ({ posts }) => {
  return (
    <Layout pageTitle="Berita Paroki">
      <div className="content">
        <div className="title-holder">
          <div>
            <p className="content-title">Berita Paroki</p>
          </div>
        </div>
        <div className="container-fluid">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              // onChange: page => {
              //   console.log(page);
              // },
              // defaultCurrent: 1,
              hideOnSinglePage:true,
              pageSizeOptions: [5,10,50]
            }}
            dataSource={posts}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <Button type="link" href={`/post/${item.slug}`}>Baca Selengkapnya</Button>
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
                  title={<Link href={`/post/${item.slug}`}>{item.title}</Link>}
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

export default Post;