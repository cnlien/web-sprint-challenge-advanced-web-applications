import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import { Container, Card, Button, Form, Input } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css';

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
      <h1>Welcome to the Bubble App!</h1>
      <Card className="login-card">
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