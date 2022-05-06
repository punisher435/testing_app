import axios from 'axios';
import {
   
    LOGOUT,
    
} from '../actiontypes/authactiontypes';

import { gettoken } from '../../hooks/token';
import {Server} from '../../config/constants';

/* axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`; */

export const checkAuthenticated = () => async dispatch => {
   
    var token=null;
    await gettoken('access_token')
    .then((res) => {
        
        token=res;
        
    }).catch((err) => {
        console.log('error');
    })
    
    
  
};








export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};