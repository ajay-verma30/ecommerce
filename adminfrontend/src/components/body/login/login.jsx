import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './login.css';
import axios from 'axios'
import { useState } from 'react';

import {useNavigate} from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate() ;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/users/login', {
            email: email,
            password: password,
          });
          const loggedtoken = response.data.token; 
          const userName = response.data.uname;
          saveTokens(loggedtoken, userName);

          if(response.data.success === true ){
            navigate('/dashboard');
        }
        } catch (error) {
          console.error(error);
        }
      };

      const saveTokens = (loggedtoken, userName) =>{
        localStorage.setItem('token', loggedtoken);
        localStorage.setItem('name', userName);
      }
    
    return (
        <Container>
            <Form className='loginform' onSubmit={handleSubmit}>
                <h1 className='text-center header'>Login</h1>
                <Form.Group>
                    <Form.Label htmlFor="uemail">Email</Form.Label>
                    <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="upassword">Password</Form.Label>
                    <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'></Form.Control>
                </Form.Group>
                <Button type='submit' className='btn btn-primary'>Login</Button>
            </Form>
        </Container>
    )
}

export default Login;