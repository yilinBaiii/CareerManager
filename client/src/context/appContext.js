import React, { useState, useReducer, useContext } from 'react';
import reducer from './reducer';
import { 
    DISPLAY_ALERT,
    CLEAR_ALERT,
    HANDLE_CHANGE,
} from './actions';


export const initialState = {
  user: null,
  token: null,
  userLocation: '',
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

    return (
        <AppContext.Provider
        value={{
            ...state,
            displayAlert,
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