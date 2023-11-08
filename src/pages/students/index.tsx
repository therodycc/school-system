import { ReactElement } from "react";
import Layout from "../../components/layout";
import { Students } from "../../components/pages/students";

const StudentsPage = () => {
    return <Students />
};
StudentsPage.getLayout = (page: ReactElement) => (
    <Layout>
        {page}
    </Layout >
)

export default StudentsPage;
