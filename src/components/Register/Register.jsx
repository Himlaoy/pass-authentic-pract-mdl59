import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase.config';


const auth = getAuth(app)
const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSubmit =(event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password =event.target.password.value
        console.log(email, password)

        if(!/(?=.*[a-z])/.test(password)){
            setError('Please use lowercase letter')
            return
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('please use uppercase latter')
            return
        }
        else if(password.length<6){
            setError('pass code will be at least 6 character')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            setSuccess('log in successfully')
            event.target.reset()
            setError('')
        })

     .catch(error=>{
        console.log(error)
        setError(error.message)
        setSuccess('')
     })
        
    }


    return (
        <div className=' ms-5 mx-auto'>
            <div>
                <h2>Register</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="email" className='mb-3 rounded p-1'  name="email" required id="email" placeholder='your email' />
                <br />
                <input type="password" className='mb-3 rounded p-1' name="password" required id="password" placeholder='your password' />
                <br />
                <input type="submit" className='mb-3 rounded p-1' value="Register" />
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </form>
        </div>
    );
};

export default Register;