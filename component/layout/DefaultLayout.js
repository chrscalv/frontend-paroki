import { Card, Layout, } from "antd";
import { InstagramOutlined } from '@ant-design/icons';
import Navbar from '../Navbar'
const { Header, Content, Footer } = Layout

const Default = ({ children }) => {
    return (
        <div>
                <Navbar></Navbar>
                <Content >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Paroki St.Yohanes Rasul ©2021 Created by Team IT</Footer>
        </div>
    );
}

export default Default;