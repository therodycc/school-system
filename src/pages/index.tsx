import { ReactElement } from 'react';
import Layout from '../components/layout';

const Home = () => {
  return (<></>)
}

Home.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout >
)

export default Home
