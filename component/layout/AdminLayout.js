import { Divider, Layout, Menu, } from 'antd'
import {
  UserOutlined,
  AreaChartOutlined,
  UserAddOutlined,
  CalendarOutlined,
  FileTextOutlined,
  FileAddOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import Head from 'next/head'
import {useSession, signOut} from 'next-auth/client'
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu



const AdminLayout = (props) => {
  const {session, loading} = useSession()
  console.log(session)
  return (
    <>
    <Head>
    <title>{props.pageTitle}</title>
    </Head>
      <Layout className="adminLayout">
        <Sider
          style={{
            height: '100vh',
            position: 'sticky',
          }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['4']} > 
            <Menu.Item key="1" icon={<AreaChartOutlined style={{fontSize: '18px'}} />} >
              <Link href="/admin">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="user" title="Users" icon={<UserOutlined style={{fontSize: '18px'}} />}>
              <Menu.Item key="userList" icon={<UserOutlined style={{fontSize: '18px'}} />}><Link href="/admin/users">Daftar User</Link></Menu.Item>
              <Menu.Item key="userAdd"  icon={<UserAddOutlined style={{fontSize: '18px'}} href="#" />}>Registrasi User Baru</Menu.Item>
            </SubMenu>
            <SubMenu key="post" title="Post" icon={<FileTextOutlined style={{fontSize: '18px'}} />}>
              <Menu.Item key="postList" icon={<FileTextOutlined style={{fontSize: '18px'}} />} >Daftar Postingan</Menu.Item>
              <Menu.Item key="addPost" icon={<FileAddOutlined style={{fontSize: '18px'}} />}>Buat Postingan</Menu.Item>
            </SubMenu>
            <SubMenu key="event" title="Event" icon={<CalendarOutlined style={{fontSize: '18px'}} />}>
              <Menu.Item key="eventList">Kelola Event</Menu.Item>
              <Menu.Item key="addEvent">Buat Event Baru</Menu.Item>
            </SubMenu>
            <Divider />
            <Menu.Item key="2" icon={<LogoutOutlined />} >
              <Link href="">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Develop & Maintenance By Team IT</Footer>
        </Layout>
      </Layout>,
    </>
  );
}

export default AdminLayout;