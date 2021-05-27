import {Typography, PageHeader, Button} from 'antd'
import axios from 'axios'
import Image from 'next/image'

export const getStaticProps = async (context) => {
    const res = await axios.get(`http://localhost:8000/posts/${context.params.slug}`)
    const data = await res.data
    return{
        props: {post:data}
    }
}

export const getStaticPaths =  async ()=>{
    const res = await axios.get('http://localhost:8000/posts/2/all')
    const posts = await res.data
    const slugs = posts.map(post => post.slug)
    const paths = slugs.map(slug => ({params: {slug: slug.toString()}}))
    return {
        paths,
        fallback: true
    }
}

const DetailRenungan = () => {
    return ( 
        <div></div>
     );
}
 
export default DetailRenungan;