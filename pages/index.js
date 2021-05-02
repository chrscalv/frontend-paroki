import Carousel from '../component/Carousel'
import NewsBlock from '../component/NewsBlock'
import BlockRenungan from '../component/BlockRenungan'
const axios = require('axios')
import 'antd/dist/antd.css'

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:8000/post/1/latest')
  const res2 = await axios.get('http://localhost:8000/post/2/latest')
  const posts = await res.data
  const renungan = await res2.data
  return {
    props: {posts, renungan}
  }
}

export default function Home({posts, renungan}) {
  return (
    <div>
      <Carousel />
      <div>
        <NewsBlock posts={posts} />
        <BlockRenungan renungan={renungan}/>
      </div>
    </div>
  )
}
