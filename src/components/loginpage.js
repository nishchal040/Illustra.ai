import { useState } from 'react';
import './loginpage.css';
function login({count1,count2}){
    if(count1%2 != 0)
    {
        return null; 
    }
    return(
        <div className='login-container'>
            <form className='frm'>
                <h1>Login</h1>
                <div className='social-btns'>
                    <button className='s-btn'><img src='google.svg'></img>Google</button>
                    <button className='s-btn'><img src='apple.svg'></img>Apple</button>
                </div>
                <div className='content'>
                    <input type='email' placeholder='email'></input>
                </div>
                <div className='content'>
                    <input type='password' placeholder='password'></input>
                </div>
                <div className='login'>
                    <button className='login-btn'>Login</button>
                </div>
                <a href=''>Forgot password?</a>
            </form>
        </div>   
    );
}
export default login;