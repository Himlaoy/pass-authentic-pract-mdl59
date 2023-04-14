import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase.config';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const auth = getAuth(app)
const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')



    const handleLogin=(event)=>{

        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        if(!/(?=.*[A-Z])/.test(password)){
            setError('please put uppercase latter')
            return
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError('please put lowercase latter')
            return
        }
        else if(!password.length<6){
            setError('pass code will be at least 6 character')
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            event.target.reset()
            setSuccess('logged in successfully')
            setError('')
        })
        .catch(error=>{
            console.log(error.message)
            setSuccess('')
            setError(error.message)
        
        })


    }

    return (

        <div className='mx-auto'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='mx-auto'>
                <input type="email" className='mb-3 rounded' name="email" id="email" placeholder='enter your email' />
                <br />
                <input type="password" className='mb-3 rounded' name="password" id="password" placeholder='enter your password' />
                <br />
                <input type="submit" className='mb-3 rounded' value="Login" />
            </form>
            <p>Already haven't a account? please <Link to="/register">Register</Link></p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Login;