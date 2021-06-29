import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = (props) => {
  
  return (
    <div>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}

       onSubmit={(values, {props, setSubmitting }) => {
         
         props.logInUser(values)
         setSubmitting(false);
         }
       }
     >
       {({ isSubmitting }) => (
         <Form>
           <div><Field type="email" name="email" component={'input'}/></div>
           <div><ErrorMessage name="email" component="div" /></div>
           <div><Field type="password" name="password" component={'input'}/></div>
           <div><ErrorMessage name="password" component="div" /></div>
           <div><Field type="checkbox" name="rememberMe" component={'input'}/> remember me</div>
           <div><button type="submit" disabled={isSubmitting}>
             Submit
           </button></div>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default LoginForm;