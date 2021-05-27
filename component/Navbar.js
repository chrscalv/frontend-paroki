import { Affix, Menu, PageHeader, Space, Typography } from "antd"
import Link from "next/link";
import Image from 'next/image'
const { SubMenu } = Menu
const { Titlte } = Typography

const Navbar = () => {
  return (
    <div className="navbar">
      <Affix>
        <div className="content">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="logo gereja pringwulung"
              width={50}
              height={40}
            />
            <Link href="/">Paroki Pringwulung</Link>
          </div>
          <Menu className="menu" theme="light" mode="horizontal">
            <Menu.Item>
              <Link href="/"><a>Home</a></Link>
            </Menu.Item>
            <Menu.Item >
              <Link href="/post"><a>Berita Paroki</a></Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/renungan"><a>Renungan</a></Link>
            </Menu.Item>
            <SubMenu title="Informasi">
              <Menu.ItemGroup>
                <Menu.Item key="informasi:1">
                  <Link href="events">Kegiatan Paroki</Link>
                </Menu.Item>
                <Menu.Item key="informasi:2">
                  <Link href="jadwal-misa">Jadwal Misa</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="about" title="Tentang Kami">
              <Menu.ItemGroup>
                <Menu.Item key="about:1"><Link href="/history"><a>Sejarah Paroki</a></Link></Menu.Item>
                <Menu.Item key="about:2"><Link href="/pastor-paroki">Pastor Paroki</Link></Menu.Item>
                <Menu.Item key="about:3"><Link href="/dewan-paroki">Dewan Paroki</Link></Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Affix>
    </div>
  );
}

export default Navbar;