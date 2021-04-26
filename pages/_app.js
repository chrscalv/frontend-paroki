import DefaultLayout from "../component/layout/DefaultLayout";
import AdminLayout from "../component/layout/AdminLayout";
import '../styles/globals.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps, }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
