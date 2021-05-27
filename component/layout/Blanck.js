import {Layout} from 'antd'
import Head from 'next/head'
const {Content} = Layout

const Blanck = (props) => {
    return ( 
        <>
            <Layout className="mainLayout">
                <Content className="content">
                    {props.children}
                </Content>
            </Layout>
        </>
     );
}
 
export default Blanck;