import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import authContext from '../helpers/authContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const {setAuthState} = useContext(authContext);
    let history = useNavigate();
    const initialValues = {
        username:'',
        password:'',
        confirmPassword:''
     }
 
     const validationSchema = yup.object().shape({
         username:yup.string().min(3).max(15).required(),
         password:yup.string().min(8).max(20).required(),
         confirmPassword:yup.string()
         .oneOf([yup.ref('password'), null], 'Passwords must match')
     })
 
     const onSubmit = (data)=>{
        const payload = {username:data.username, password: data.password};
         axios.post("http://localhost:8080/users/register",payload).then((response)=>{
            console.log('.....response',response.data)
                if(!response.data.error)  {
                //todo setauthstate
                alert('Registration Successfull')
                history('/login')
            }
         })
     }
  return (
    <div>
        <div className='card login-form'>
        <h2 className="card-title login-title">Registration</h2>
            <div className='card-body'>
        <Formik  initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
            <div className='row'>
                    <div className='col-md-12'>
                        <label htmlFor='username-input'>Username</label>
                <Field name='username' id="username-input" type='text' className='login-input form-control' placeholder='Enter username...'/>
                <ErrorMessage name='username'></ErrorMessage>
                </div>
                <div className='col-md-12 mt-3'>
                <label htmlFor='password-input'>Password</label>
                <Field name='password' id="password-input" type='password' className='login-input form-control' placeholder='Enter password...'/>
                <ErrorMessage name='password'></ErrorMessage>
                </div>
                <div className='col-md-12 mt-3'>
                <label htmlFor='confirm-password-input'>Confirm Password</label>
                <Field name='confirmPassword' id="confirm-password-input" type='password' className='login-input form-control' placeholder='Enter password again...'/>
                <ErrorMessage name='confirmPassword'></ErrorMessage>
                </div>
                <div className='col-md-12 mt-3'>
                    <button type='submit' className='btn btn-primary mt-2 login-input'>Login</button>
                </div>
                </div>
            </Form>
        </Formik>
        <div className='mt-3'>Already a member?<Link to={'/login'}>login</Link></div>
        </div>
        </div>
    </div>
  )
}

export default Registration