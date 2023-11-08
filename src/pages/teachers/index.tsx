import { ReactElement } from "react";
import Layout from "../../components/layout";
import { Teachers } from "../../components/pages/teachers";

const TeachersPage = () => {
    return <Teachers />
};

TeachersPage.getLayout = (page: ReactElement) => (
    <Layout>
        {page}
    </Layout >
)

export default TeachersPage;
