import { Timeline, Typography } from "antd";
import 'antd/dist/antd.css'
const {Title} = Typography
const History = () => {
  return (
    <div className="history">
      <div className="container-fluid">
        <Title>Sejarah Paroki</Title>
        <div className="content">
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
    </div>
  );
}

export default History;