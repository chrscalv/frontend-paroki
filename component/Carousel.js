 import { Carousel } from 'antd'
import 'antd/dist/antd.css'
const CarouselComponent = () => {
    return (
        <div>
            <Carousel autoplay effect="scrollx">
                <div >
                    <h3 style={{ backgroundImage: "url('https://placeimg.com/1520/650/any')", backgroundSize: 'cover', backgroundPosition:'50% 50%  ',textAlign: 'center', lineHeight: '92hv', height: '92vh', color:"#000000"}}></h3>
                </div>
                <div >
                    <h3 style={{ backgroundImage: "url('https://picsum.photos/id/237/1520/650')", backgroundSize: 'cover', backgroundPosition:'50% 50%  ', textAlign: 'center', lineHeight: '550px', height: '92vh',color:"#ffffff" }}></h3>
                </div>
                <div >
                    <h3 style={{ backgroundImage: "url('/altar.jpeg')",backgroundSize: 'cover',backgroundPosition:'50% 50%  ', textAlign: 'center', lineHeight: '550px', height: '92vh',}}></h3>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;