import { Typography, Image, Divider, Row, Col, Card,Button } from "antd";
const { Title, Text, Paragraph } = Typography
const { Meta } = Card

const BlockRenungan = ({ renungan }) => {
  return (
    <div className="renungan">
      <Divider orientation="left">
        <Title> Renungan Harian</Title>
      </Divider>
      <div className="block-renungan">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16, xl: "32" }}>
          {renungan.map((renungan) => (
            <Col xs="1" sm="2" md="6" lg="6" xl="10">
              <Card
                hoverable
                style={{ width: 350 }}
                cover={<img alt="example" src={renungan.thumbnail} />}
                actions={[
                  <Button type="link" href={`/renungan/${renungan.slug}`}>Baca Selengkapnya</Button>
                ]}
              >
                <Meta title={renungan.title} description={renungan.published_at} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default BlockRenungan;