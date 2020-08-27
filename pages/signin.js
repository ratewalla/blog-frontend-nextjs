import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="container is-fluid">
          <div className="columns is-mobile is-centered">
            <div className="signup-form column is-half">
                <h2 className="title is-2">Sign In</h2>
                <SigninComponent />
            </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Signin;
