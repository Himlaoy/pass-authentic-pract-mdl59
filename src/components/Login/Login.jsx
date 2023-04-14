import React from 'react';



const Login = () => {



    const handleLogin=(event)=>{
        event.preventDefault()
        console.log(event.target.email)
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
        </div>
    );
};

export default Login;