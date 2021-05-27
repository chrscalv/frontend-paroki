import { List, Card, } from 'antd'
import {
  HomeOutlined,
  PhoneOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer">
      <div className="block">
        <a className="title">Paroki Pringwulung</a>
        <div className="about"><HomeOutlined style={{fontSize : '16px'}} />Jl. Empu Panuluh No.377A, Pringwulung, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283</div>
        <div className="about"><PhoneOutlined style={{fontSize : '16px'}} />(0274) 520235</div>
      </div>
      <div className="block">
        <a className="title">Link Terkait</a>
        <div className="block-content">
          <div className="item">
            <Link className="link" href="/">Home</Link>
          </div>
          <div className="item">
            <Link href="/post">Berita Paroki</Link>
          </div>
          <div className="item">
            <Link href="/renungan">Renungan Harian</Link>
          </div>
          <div className="item">
            <Link href="/renungan">Kegiatan Paroki</Link>
          </div>
          <div className="item">
            <a target="_blank" href="https://kas.or.id/">KAS</a>
          </div>
          
        </div>
      </div>
      <div className="block">
        <a className="title">Sosial Media</a>
        <div className="block-content">
          <div className="item">
            <a target="_blank" className="link" href="https://www.instagram.com/yoraspringwulung/"><InstagramOutlined style={{fontSize : '26px'}} /> @yoraspringwulung</a>
          </div>
          <div className="item">
            <a target="_blank" href="https://www.youtube.com/channel/UC7y2Rpl13vaf3ZkJnxxwQJw"><YoutubeOutlined style={{fontSize : '26px'}} />  Yoras Pringwulung</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;