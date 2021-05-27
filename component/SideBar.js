import { Menu,Divider } from "antd";
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
import { useSession } from "next-auth/client";
const { SubMenu } = Menu


const SideBar = () => {
    const { session } = useSession()
    return (
        <>
           {/*  */}
        </>
    )
}

export default SideBar
    ;