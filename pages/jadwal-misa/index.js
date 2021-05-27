import { Collapse } from 'antd';
import Layout from "../../component/layout/DefaultLayout";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const JadwalMisa = () => {
  return (
    <Layout pageTitle="Jadwal Misa">
      <div className="page-content">
        <div className="title-holder">
          <div >
            <p className="content-title">Jadwal Misa</p>
          </div>
        </div>
        <div className="container-fluid">
          <Collapse accordion>
            <Panel header="Misa Harian" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="Misa Mingguan" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="Hari Raya Besar" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>,
      </div>
      </div>
    </Layout>
  );
}

export default JadwalMisa;