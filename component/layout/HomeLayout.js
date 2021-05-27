import { BackTop, Card, Layout, } from "antd";
import Head from 'next/head'
import Navbar from '../Navbar'
const { Header, Content,Footer } = Layout

const HomeLayout = (props) => {
  return (
    <>
      <Head>
        <title>Paroki St.Yohanes Rasul Pringwulung</title>
      </Head>
      <Layout className="mainLayout">
        <Header>
          <Navbar />
        </Header>
        <Content className="content">
          {props.children}
        </Content>
        <Footer></Footer>
        <BackTop />
      </Layout>
    </>
  );
}

export default HomeLayout;