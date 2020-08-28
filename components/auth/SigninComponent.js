import {useState,useEffect} from 'react';
import {signin, authenticate, isAuth} from '../../actions/auth';
import Router from 'next/router';

const SigninComponent = () => {

    // set states for form
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {email, password, error, loading, message, showForm} = values;

    
    useEffect(() => {
      isAuth() && Router.push(`/`)
    }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({...values, loading: true, error: false});
    const user = {email, password};

    // user signin
    signin(user)
    .then(data => {
        if(data.error) {
            setValues({...values, error: data.error})
        } else {
          // calls authenticate method and passes data and callback function
          authenticate(data, () => {
            Router.push(`/`)
          })
        }
    })
    
  };

  
  const handleChange =  email => (e) => { //function returning another function
    setValues({...values, error: false, [email]:e.target.value})
  };

  const showLoading = () => (loading ? <div className="notification is-info">Loading...</div> : '');
  const showError = () => (error ? <div className="notification is-danger">{error}</div> : '');
  const showMessage = () => (message ? <div className="notification is-info">{message}</div> : '');




  const signinForm = () => {
      
    return (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
            value={email}
              onChange={handleChange('email')}
              className="input"
              type="email"
              placeholder="Type in your email"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
            value={password}
              onChange={handleChange('password')}
              className="input"
              type="password"
              placeholder="Type in your password."
            />
          </div>
        </div>
        <div className="control">
            <button className="button is-link is-fullwidth">Submit</button>
        </div>
      </form>
    );
  };

  return <>
    {showError()}
    {showLoading()}
    {showMessage()}
    {showForm && signinForm()}
  </>;
};

export default SigninComponent;
