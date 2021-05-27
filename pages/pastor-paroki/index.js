import { Timeline, Button, Card } from "antd";
import Layout from '../../component/layout/DefaultLayout'
import Head from 'next/head'
const { Meta } = Card

const PastorParoki = () => {
  return (
    <Layout pageTitle="Pastor Paroki">
      <div className="page-content">
        <div className="title-holder">
          <p className="content-title">Pastor Paroki</p>
        </div>
        <div className="container-fluid">
          <div className="timeline">
            <Timeline mode="alternate">
              <Timeline.Item>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="/altar.jpeg"
                    />
                  }
                >
                  <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Timeline.Item>
              <Timeline.Item color="green">
                <Card
                  style={{ width: 350 }}
                  cover={
                    <img
                      alt="example"
                      src="/altar.jpeg"
                    />
                  }
                >
                  <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Timeline.Item>
              <Timeline.Item>
                <Card
                  style={{ width: 350 }}
                  cover={
                    <img
                      alt="example"
                      src="/altar.jpeg"
                    />
                  }
                >
                  <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Timeline.Item>
              <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
              <Timeline.Item>
                <Card
                  style={{ width: 350 }}
                  cover={
                    <img
                      alt="example"
                      src="/altar.jpeg"
                    />
                  }
                >
                  <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Timeline.Item>
              <Timeline.Item>
                Technical testing 2015-09-01
          </Timeline.Item>
            </Timeline>,
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default PastorParoki;