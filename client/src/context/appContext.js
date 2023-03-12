import React, { useState, useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';
import { 
    CLEAR_ALERT,
    DISPLAY_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

export const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // handlers
    const displayAlert = () =>{
        dispatch({ type: DISPLAY_ALERT });
        console.log('displayAlert');
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };

    const addUserToLocalStorage = ({ user, token, location }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('location', JSON.stringify(location));
    };

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('location');
    };

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const response = await axios.post('/api/v1/auth/register', currentUser);
            // console.log(response);
            const { user, token, location } = response.data;
            dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token, location } });
            addUserToLocalStorage({ user, token, location });
        } catch (error) {
            // console.log(error.response);
            dispatch({ type: REGISTER_USER_ERROR, payload: { msg: error.response.data.msg } });
        }
        clearAlert();
    }

    return (
        <AppContext.Provider
        value={{
            ...state,
            displayAlert,
            registerUser,
        }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };