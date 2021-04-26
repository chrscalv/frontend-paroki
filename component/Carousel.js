import { Carousel } from 'antd'
import 'antd/dist/antd.css'
const CarouselComponent = () => {
    return (
        <div>
            <Carousel autoplay effect="fade">
                <div>
                    <h3 style={{ backgroundImage: "url('https://placeimg.com/1520/650/any')", textAlign: 'center', lineHeight: '550px', height: '650px', color:"#000000"}}></h3>
                </div>
                <div >
                    <h3 style={{ backgroundImage: "url('https://picsum.photos/id/237/1520/650')", textAlign: 'center', lineHeight: '550px', height: '650px',color:"#ffffff" }}></h3>
                </div>
                <div >
                    <h3 style={{ background: '#364d79', textAlign: 'center', lineHeight: '550px', height: '650px',}}>3</h3>
                </div>
                <div>
                    <h3 style={{ background: '#364d79', textAlign: 'center', lineHeight: '550px', height: '650px', }}>4</h3>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;