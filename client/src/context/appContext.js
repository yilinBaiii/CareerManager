import React, { useState, useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';
import { 
    CLEAR_ALERT,
    DISPLAY_ALERT,
    LOGOUT_USER,
    SETUP_USER_BEGIN,
    SETUP_USER_ERROR,
    SETUP_USER_SUCCESS,
    TOGGLE_SIDEBAR,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

export const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
  showSidebar: false,
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

    const setupUser = async ({ currentUser, endpoint, alertText }) => {
        console.log(currentUser)
        dispatch({ type: SETUP_USER_BEGIN });
        try {
            const { data } = await axios.post(`/api/v1/auth/${endpoint}`, currentUser);
            const { user, token, location } = data;
            dispatch({ type: SETUP_USER_SUCCESS, payload: { user, token, location, alertText } });
            addUserToLocalStorage({ user, token, location });
        } catch (error) {
            dispatch({ type: SETUP_USER_ERROR, payload: { msg: error.response.data.msg } });
        }
        clearAlert();
    }

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR})
    }

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    return (
        <AppContext.Provider
        value={{
            ...state,
            displayAlert,
            setupUser,
            toggleSidebar,
            logoutUser,
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