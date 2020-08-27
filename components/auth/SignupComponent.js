import {useState} from 'react';
import {signup} from '../../actions/auth';

const SignupComponent = () => {

    // set states for form
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {name,email, password, error, loading, message, showForm} = values;


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({name,email, password, error, loading, message, showForm});

    setValues({...values, loading: true, error: false});
    const user = {name, email, password};


    signup(user)
    .then(data => {
        if(data.error) {
            setValues({...values, error: data.error})
        } else {
            setValues({...values, name: '', email: '', password: '', error: false, loading: false, message: data.message, showForm: false})
        }
    })
    
  };

  
  const handleChange =  name => (e) => { //function returning another function
    setValues({...values, error: false, [name]:e.target.value})
  };

  const showLoading = () => (loading ? <div className="notification is-info">Loading...</div> : '');
  const showError = () => (error ? <div className="notification is-danger">{error}</div> : '');
  const showMessage = () => (message ? <div className="notification is-info">{message}</div> : '');




  const signupForm = () => {
      
    return (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
                value={name}
              onChange={handleChange('name')}
              className="input"
              type="text"
              placeholder="Type in your name"
            />
          </div>
        </div>
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
    {showForm && signupForm()}
  </>;
};

export default SignupComponent;
