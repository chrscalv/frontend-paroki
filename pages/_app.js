import DefaultLayout from "../component/layout/DefaultLayout";
import AdminLayout from "../component/layout/AdminLayout";
import '../styles/globals.css'
import 'antd/dist/antd.css'
// import 'font-awesome/css/font-awesome.min.css'

function MyApp({ Component, pageProps, }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
