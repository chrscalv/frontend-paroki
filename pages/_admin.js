import AdminLayout from '../component/layout/AdminLayout'
function AdminApp({ Component, pageProps }) {
  return(
    <AdminLayout>
        <Component {...pageProps} />
    </AdminLayout>
  )
}

export default AdminApp
