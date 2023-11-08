import { ReactElement } from "react";
import Layout from "../../components/layout";
import { Subjects } from "../../components/pages/subjects";

const SubjectsPage = () => {
    return <Subjects />
};

SubjectsPage.getLayout = (page: ReactElement) => (
    <Layout>
        {page}
    </Layout >
)

export default SubjectsPage;
