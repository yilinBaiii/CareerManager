import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components/index';
import Wrapper from '../wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

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
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert } = useAppContext();
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
  };
  
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
            <button type='button' onClick={toggleMember} className='member-btn'>
                {values.isMember ? 'Register' : 'Login'}
            </button>
        </p>
      </form>
    </Wrapper>
  );
}

  export default Register;