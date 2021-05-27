import { BackTop, Card, Layout, } from "antd";
import Navbar from '../Navbar'
import Head from 'next/head'
import AppFooter from '../Footer'
const { Header, Content, Footer } = Layout

const Default = (props) => {
  return (
    <>
      <Head>
        <title>{props.pageTitle} - Paroki Pringwulung</title>
        <meta name="keyword" content={props.pageKeyword} />
      </Head>
      <Layout className="mainLayout">
        <Header>
          <Navbar />
        </Header>
        <Content className="page-content">
          {props.children}
        </Content>
        <BackTop />
        <Footer>
          <AppFooter />
          <div style={{paddingTop: '20px'}}>
            &copy; 2021 Paroki St.Yohanes Rasul Pringwulung | Maintenance By Team IT
          </div>
        </Footer>
      </Layout>
    </>
  );
}

export default Default;