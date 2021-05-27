import Layout from "../../../component/layout/AdminLayout";
import { Table, Button, Space,Tag, Typography } from "antd";
const { Column } = Table
const {Title} = Typography

const data = [
    {
        key: '1',
        Username: 'admin',
        Email: 'admin@mail.com',
        Registration: '19-05-2021',
        roles: [
        {
            id: "1",
            name: "admin"
        }
    ]
    },
    {
        key: '2',
        Username: 'Jim',
        Email: 'jim@mail.com',
        age: 42,
        Registration: '19-05-2021',
        roles: [{
            id: "2",
            name: "writer"
        }]
    },
    {
        key: '3',
        Username: 'Joe',
        Email: 'joe@mail.com',
        age: 32,
        Registration: '19-05-2021',
        roles: [{
            id: "1",
            name: "admin"
        }]
    },
];

const Users = () => {
    return (
        <Layout>
            <p style={{fontSize: '26px', fontWeight: '600'}}>Daftar User</p>
            <Table dataSource={data}>
                <Column title="Username" dataIndex="Username" />
                <Column title="Email" dataIndex="Email" />
                <Column
                    title="Tags"
                    dataIndex="roles"
                    key="roles"
                    render={roles => (
                        <>
                            {roles.map(role => (
                                <p>{role.name}</p>
                            ))}
                        </>
                    )}
                />
                <Column title="Tanggal Registrasi" dataIndex="Registration" />
                <Column title="Actions" />
            </Table>
        </Layout>
    );
}

export default Users;