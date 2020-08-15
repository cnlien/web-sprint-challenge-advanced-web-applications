import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import { Container, Card, Button, Form, Input, CardTitle } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/login.scss'

const Login = (props) => {

  const [login, setLogin] = useState ({
    username: '',
    password: '',
  })

  const handleChange =(e)=> {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const handleLogin =(e)=> {
    e.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:5000/api/login`, login)
      .then (res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles-page');
      })
      .catch(err=> {
        console.error('There was an error loggin in: ', err.message)
      });

      setLogin({
        username: '',
        password: '',
      })
  }

  return (
    <Container className='login-container'> 
      <Card className="login-card">
        <CardTitle className="login-title">React Bubble App</CardTitle>
        <Form className='login-form' onSubmit={ handleLogin }>
          <Input
            type='text'
            name='username'
            value={ login.username }
            onChange={ handleChange }
            placeholder='Username: Lambda School'
            className='login-input'
          />

          <Input
            type='password'
            name='password'
            value={ login.password }
            onChange={ handleChange }
            placeholder='Password: i<3Lambd4'
            className='login-input'
          />

          <Button onSubmit={ handleLogin } className='login-button'>Login</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;