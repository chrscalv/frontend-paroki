import { Typography, Image, Divider, Card, Button, List } from "antd";
import Item from "antd/lib/list/Item";
const { Title, Text, Paragraph } = Typography
const { Meta } = Card

const BlockRenungan = ({ renungan }) => {
  return (
    <div className="renungan">
      <Divider orientation="center">Renungan Harian
        {/* <Title type="success" underline> Renungan Harian</Title> */}
      </Divider>
      <div className="container-fluid">
        <List
          grid={{
            gutter: [16,16],
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 3,
            xxl: 3,
          }}
          dataSource={renungan}
          renderItem={item => (
            <List.Item>
              <Card 
              cover={<img alt="example" src={item.thumbnail} />}
              actions={[
                <Button type="link">Baca Selengkapnya</Button>
              ]}
              hoverable
              >
                <Meta 
                title={item.title}
                description={item.published_at}
                />
              </Card>
            </List.Item>
          )}
        />,
      </div>
    </div>
  );
}

export default BlockRenungan;