import { authAPI } from "../api/api";

//login
const SET_USER_DATA = 'SET_USER_SET_USER_DATA';
const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
const LOGIN_FAILED = 'LOGIN_FAILED';
//final login

let initialState = {
userId: null,
email: null,
login: null,
isAuth: false,
};

//login
export function loginSucceeded(user) {
    return {
      type: 'LOGIN_SUCCEEDED',
      user
    }
  }
  
  export function requestLogin(user) {
    return {
      type: 'LOGIN_REQUESTED',
      user
    }
  }
  
  export function loginFailed(user) {
    return {
      type: 'LOGIN_FAILED',
      user
    }
  }
  
  export const logInUser = (user) => {
    return (dispatch) => {
      dispatch(LOGIN_REQUESTED(user))
      return authAPI.signIn(user)
        .then((response) => {
          dispatch(LOGIN_SUCCEEDED(response))
           return response
        })
        .catch((err) =>{
          dispatch(LOGIN_FAILED(user))
      })
    }
  }

//final login

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
         
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            
        default:
            return state;
    }
    
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => (dispatch) => {
    return (
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }

        }))
}

export default authReducer;