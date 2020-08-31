import Admin from '../../components/auth/Admin';
import Layout from '../../components/Layout';
import AdminHomepage from './components/AdminHomepage';

const AdminIndex = () => {
    return (
        <>
            <Layout>
                <Admin>
                    <AdminHomepage />
                </Admin> 
            </Layout>
        </>
    )
};

export default AdminIndex;