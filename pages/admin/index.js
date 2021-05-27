import { List, Typography, Button, Card } from "antd";
import Layout from '../../component/layout/AdminLayout'
import {getSession} from 'next-auth/client'

// export const getInitialProps = async (context) => {
//   const session = await getSession()
// }
const Admin = () => {
// console.log(session)
  return (
    <Layout pageTitle="Dashboard">
      <div className="container-fluid">
        <h1></h1>
      </div>
    </Layout>
  );
}

export default Admin;