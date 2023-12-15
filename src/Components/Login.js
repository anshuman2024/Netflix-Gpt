import React from 'react';
import { useState } from 'react';
import Header from './Header';
const Login = () => {

    const [isSignedIn, setIsSignedIn] = useState(true); // State variable to keep track of signed in status of user

    const handleSignIn = () =>{
        setIsSignedIn(!isSignedIn);
    };


    return (
        <div>
            <Header />   
            <div className='absolute'>
            <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg"
             alt = "Netflix Logo"
              />  
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold py-4'>Sign In</h1>
                {!isSignedIn && (
                <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-slate-800' />
                )}
                <input type="text" placeholder="Email or phone number" className=' p-4 my-4 w-full bg-slate-800' />
                <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-slate-800' />
                <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>
                    {isSignedIn ? "Sign In" : "Sign Up"}
                    </button>
                <p className='py-4 cursor-pointer' onClick={handleSignIn}>
                    {isSignedIn
                    ? "New to Netflix? Sign Up Now"
                    : "Already registered? Sign In Now."}
                    </p>
            </form>
                
        </div>

    );
};

export default Login;
