import { Menu, PageHeader, Space, Typography } from "antd"
import Link from "next/link";
const { SubMenu } = Menu
const { Titlte } = Typography

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="logo">
          <Link className="title" href="/">Paroki Pringwulung</Link>
        </div>
        <Menu theme="light" mode="horizontal">
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
              <Menu.Item key="informasi:1">Kegiatan Paroki</Menu.Item>
              <Menu.Item key="informasi:2">Jadwal Misa</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="about" title="Tentang Kami">
            <Menu.ItemGroup>
              <Menu.Item key="about:1"><Link href="/history"><a>Sejarah Paroki</a></Link></Menu.Item>
              <Menu.Item key="about:2">Pastor Paroki</Menu.Item>
              <Menu.Item key="about:3">Dewan Paroki</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;