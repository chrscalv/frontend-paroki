import { Card, Button, Typography, Row, Col, Divider, Image } from "antd";
const { Title, Paragraph, Text } = Typography
import style from '../styles/home.module.css'

const item = [
  {
    key : 1,
    title : "Judul artikel satu",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    key : 1,
    title : "Judul artikel satu",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    key : 1,
    title : "Judul artikel satu",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

const NewsBlock = () => {
  return (
    <div>
      <div className="container-fluid">
        <Divider orientation="center">
          <Title>
            Berita Paroki
          </Title>
        </Divider>
        <div className="news-card">
          <Image src="https://placeimg.com/500/500/any" className="image"></Image>
          <div className="title">
          <Title >Judul</Title>
          </div>
          <div className="date-holder">
            <p>20 April 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBlock;