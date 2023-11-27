import { ReactElement } from 'react';
import Layout from '../components/layout';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Box from "../components/common/box";

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {

  return (<div className="d-flex">
    <div className="col-lg-5">
      <Box leftSection={<></>}>
        <Doughnut data={{
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              label: 'My Dataset',
              data: [30, 40, 30],
              backgroundColor: ['#CD5C5C', '#F08080', '#FA8072'],
            },
          ],
        }} />
      </Box>
    </div>
  </div>)
}

Home.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout >
)

export default Home
