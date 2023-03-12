import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components/index';
import Wrapper from '../wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

// if possible prefer local state
// global state
function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser } = useAppContext();
  // global context and useNavigate later
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log("already a member");
    } else {
      registerUser(currentUser);
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [user, navigate]);
  
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name field */}
        <div className='form-row'>
            {/* name input */}
            {!values.isMember && (
                <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />
            )}
            {/* email input */}
            <FormRow 
                type="email" 
                name="email" 
                value={values.email} 
                handleChange={handleChange} 
            />
            {/* password input */}
            <FormRow 
                type="password" 
                name="password" 
                value={values.password} 
                handleChange={handleChange} 
            />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' onClick={toggleMember} className='member-btn' disabled = {isLoading}>
                {values.isMember ? 'Register' : 'Login'}
            </button>
        </p>
      </form>
    </Wrapper>
  );
}

  export default Register;