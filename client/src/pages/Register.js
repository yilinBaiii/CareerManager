import React from "react";
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Logo, FormRow, Alert } from '../components/index';
import Wrapper from '../wrappers/RegisterPage';


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,
  };

const  Register = () =>  {
    // return (<div> Hello</div>)
    const [values, setValues] = useState(initialState);
  
    // global context and useNavigate later
  
    const handleChange = (e) => {
      console.log(e.target);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(e.target);
    };
    return (
      <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
        <div style = {{align: "center"}}><Logo /></div>
            <h3>Login</h3>
            {values.showAlert && <Alert />}
            {/* name field */}
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                name
                </label>
  
            <FormRow / >
          </div>
          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </Wrapper>
    );
  }

  export default Register;