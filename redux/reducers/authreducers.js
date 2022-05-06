import {
   
    LOGIN_SUCCESS,
  
    LOGOUT,
  
} from '../actiontypes/authactiontypes';

import { storetoken,removetoken } from '../../hooks/token';

const initialState = {
    token: null,
    isAuthenticated: null,
    user: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
       
        case LOGIN_SUCCESS:
            console.log(payload);
            storetoken('access_token',payload.token);
            return {
                ...state,
                user:payload.user,
                isAuthenticated: true,
                token: payload.token,
            }
        
        case LOGOUT:
            removetoken('access_token')
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}