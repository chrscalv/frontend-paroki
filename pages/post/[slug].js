import { Typography} from 'antd'
import Image from 'next/image'
const axios = require('axios');
const {Title,Paragraph} = Typography

export const getStaticProps = async (context) => {
    const res = await axios.get(`http://localhost:8000/posts/${context.params.slug}`)
    const data = await res.data
    return{
        props: {post:data}
    }
}

export const getStaticPaths = async () =>{
    const res = await axios.get('http://localhost:8000/posts/1/all')
    const posts = await res.data
    const slugs = posts.map(post => post.slug)
    const paths = slugs.map(slug => ({params: {slug: slug.toString()}}))
    return {
        paths,
        fallback: true
    }
}

const DetailPost = ({post}) => {
    console.log(post)
    return ( 
        <div className="content">
            <div className="title-holder">
                <p className="content-title">Berita Paroki</p>
            </div>
            {post.map((post)=> (
                <div key={post.id} className="container-fluid">
                    <Title  style={{textAlign:'center'}}>{post.title}</Title>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default DetailPost;