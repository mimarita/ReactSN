import React from 'react';
import LoginForm from './LoginForm';
import { withFormik } from 'formik'


const Login = (props) => {
const onSubmit = (formData) => {
    console.log(formData)
}
    return (
        <div>
            <h1>Login</h1>
            <LoginForm logInUser={props.logInUser} onSubmit={onSubmit} />
        </div>
    )
}


export default Login;