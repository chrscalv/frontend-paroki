import { Typography,Row, Col,Card, Divider, } from 'antd'
const { Title } = Typography


const IndexRenungan = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <Divider orientation="left">
          <Title>Renungan</Title>
        </Divider>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              cover={<img alt="example" src="altar.jpeg" />}
            >
              <Title level={2} className="">Judul Artikel</Title>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default IndexRenungan;