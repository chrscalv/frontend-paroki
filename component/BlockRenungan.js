import { Typography, Button, Image } from "antd";
const {Title, Text, Paragraph} = Typography

const BlockRenungan = () => {
    return ( 
        <div >
            <div>
                <Title>Renungan</Title>
            </div>
            <div >
                <Image src="/image.jpg" ></Image>
                <Title >Judul Renungan</Title>
                <p  >20 April 2021</p>
            </div>
        </div>
     );
}
 
export default BlockRenungan;