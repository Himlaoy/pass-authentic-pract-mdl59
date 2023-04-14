import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app)
const Login = () => {



    const handleLogin=(event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            // const loggedUser = result.user
            console.log(result)
        })
        .catch(error=>{
            console.log(error.message)
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
        </div>
    );
};

export default Login;