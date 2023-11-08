import { ReactElement } from "react";
import Layout from "../../components/layout";
import { Classrooms } from "../../components/pages/classrooms";

const ClassroomsPage = () => {
    return <Classrooms />
};

ClassroomsPage.getLayout = (page: ReactElement) => (
    <Layout>
        {page}
    </Layout >
)

export default ClassroomsPage;
