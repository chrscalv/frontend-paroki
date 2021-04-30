import { Card, Layout, } from "antd";
import { InstagramOutlined } from '@ant-design/icons';
import Navbar from '../Navbar'
import Post from '../../pages/post/index'
const { Header, Content, Footer } = Layout

const Default = ({ children }) => {
  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <Navbar />
        </Header>
        <Content className="content">
          {children}
        </Content>
      </Layout>
    </div>
  );
}

export default Default;