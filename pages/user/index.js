import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import UserHomepage from './components/UserHomepage';

const UserIndex = () => {
    return (
        <>
            <Layout>
                <Private>
                    <UserHomepage />
                </Private>
            </Layout>
        </>
    )
};

export default UserIndex;