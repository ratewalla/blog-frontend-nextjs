import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="container is-fluid">
          <div className="columns is-mobile is-centered">
            <div className="signup-form column is-half">
                <h2 className="title is-2">Sign up</h2>
                <h2 className="title is-5">Use the form below to sign up.</h2>
                <SignupComponent />
            </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Signup;
