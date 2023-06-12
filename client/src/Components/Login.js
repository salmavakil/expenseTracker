import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import authContext from '../helpers/authContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Registration from './Registration';

function Login() {
    const {setAuthState} = useContext(authContext);
    let history = useNavigate();
    const initialValues = {
        username:'',
        password:''
     }
 
     const validationSchema = yup.object().shape({
         username:yup.string().min(3).max(15).required(),
         password:yup.string().min(8).max(20).required()
     })
 
     const onSubmit = (data)=>{
         axios.post("http://localhost:8080/users/login",data).then((response)=>{
            console.log('.....response',response.data)
                if(!response.data.error)  {
                //todo setauthstate
                localStorage.setItem('accessToken',response.data.token);
                setAuthState({username:response.data.username,id:response.data.id,status:true})
                alert('Login Successfull')
                history('/')
            }
         })
     }
  return (
    <div>
        <div className='card login-form'>
        <h2 className="card-title login-title">Login</h2>
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
                    <button type='submit' className='btn btn-primary mt-2 login-input'>Login</button>
                </div>
                </div>
            </Form>
        </Formik>
        <div className='mt-3'>Not a member?<Link to={'/registration'}>register</Link></div>
        </div>
        </div>
    </div>
  )
}

export default Login