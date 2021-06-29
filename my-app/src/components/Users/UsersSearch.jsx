import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

const usersSearchFormValidate = (values) => {
    const errors = {};
    return errors;
  }

const UsersSearchForm = (props) => {
    const submit = (values, { setSubmitting }) => {
        props.onFilterChanged(values)
        setSubmitting(false);
      }
    return (
        <div>
           <Formik
       initialValues={{ term: ''}}
       validate={usersSearchFormValidate}
       onSubmit={submit}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="term" />
           <button type="submit" disabled={isSubmitting}>
             Find
           </button>
         </Form>
       )}
     </Formik> 
        </div>
    )
       }

export default UsersSearchForm;