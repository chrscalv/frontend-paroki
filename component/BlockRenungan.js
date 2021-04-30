import { Typography, Image, Divider, Row, Col, Card } from "antd";
const { Title, Text, Paragraph } = Typography
const {Meta} =  Card

const BlockRenungan = () => {
  return (
    <div className="historyBlock">
      <Divider orientation="left">
        <Title> Renungan Harian</Title>
      </Divider>
      <div className="container-fluid">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16, xl:"32"}}>
          <Col xs="1" sm="2" md="6" lg="6" xl="10">
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>,
          </Col>
          <Col xs="1" sm="2" md="6" lg="6" xl="10">
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src="/altar.jpeg" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>,
          </Col>
          <Col xs="1" sm="2" md="6" lg="6" xl="10">
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src="/image.jpg" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>,
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BlockRenungan;