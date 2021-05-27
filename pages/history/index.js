import { Timeline, Typography } from "antd";
import Layout from '../../component/layout/DefaultLayout'
import 'antd/dist/antd.css'
const { Title } = Typography
const History = () => {
  return (
    <Layout pageTitle="Sejarah Gereja">
      <div className="page-content">
        <div className="title-holder">
          <p className="content-title">Sejarah Paroki</p>
        </div>
        <div className="container-fluid">
          <Timeline mode="alternate">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
          </Timeline.Item>
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Technical testing 2015-09-01
          </Timeline.Item>
          </Timeline>,
      </div>
      </div>
    </Layout>
  );
}

export default History;