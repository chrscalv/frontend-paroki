import Carousel from '../component/Carousel'
import NewsBlock from '../component/NewsBlock'
import BlockRenungan from '../component/BlockRenungan'
import 'antd/dist/antd.css'
export default function Home() {
  return (
    <div>
      <Carousel />
      <div>
        <NewsBlock />
        <BlockRenungan />
      </div>
    </div>
  )
}
