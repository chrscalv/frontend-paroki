import Head from 'next/head'
import Layout from '../component/layout/DefaultLayout'
import Carousel from '../component/Carousel'
import NewsBlock from '../component/NewsBlock'
import BlockRenungan from '../component/BlockRenungan'
const axios = require('axios')
import 'antd/dist/antd.css'

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/posts/1/latest')
  const res2 = await axios.get('http://localhost:8000/posts/2/latest')
  const posts = await res.data
  const renungan = await res2.data
  return {
    props: { posts, renungan }
  }
}

export default function Home({ posts, renungan }) {
  return (
    <Layout pageTitle="Paroki Pringwulung">
      <div>
        <Carousel />
        <div>
          <NewsBlock posts={posts} />
          <BlockRenungan renungan={renungan} />
        </div>
      </div>
    </Layout>
  )
}
