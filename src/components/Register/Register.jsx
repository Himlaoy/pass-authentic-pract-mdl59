import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    return (
        <div className=' ms-5'>
            <div>
                <h2>Register</h2>
            </div>
            <form >
                <input type="email" className='mb-3' name="email" id="email" placeholder='your email' />
                <br />
                <input type="password" className='mb-3' name="password" id="password" placeholder='your password' />
                <br />
                <input type="submit" className='mb-3' value="Register" />
            </form>
        </div>
    );
};

export default Register;