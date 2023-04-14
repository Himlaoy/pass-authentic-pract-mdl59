import React from 'react';
import { Form } from 'react-bootstrap';


const Login = () => {
    return (
        <form className=''>
            <input type="email" name="email" id="email" placeholder='enter your email'/>
            <br />
            <input type="password" name="password" id="password" placeholder='enter your password'/>
            <br />
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;