import { 
    DISPLAY_ALERT,
    CLEAR_ALERT,
    HANDLE_CHANGE,
} from './actions';


const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        console.log('DISPLAY_ALERT');
        return {
          ...state,
          showAlert: true,
          alertType: 'danger',
          alertText: 'Please provide all values!',
        };
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        };
    }
    
};

export default reducer;