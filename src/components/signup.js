import { useState } from 'react';
import './signup.css';
function signup({count2,count1}){
    if(count2==0)
        {
            return null;
        }
        else if(count2%2 != 0 && count1%2 !=0)
        {
            return null; 
        }
    return(
        <div className='signup-container'>
            <form className='frm'>
                <h1>SignUp</h1>
                <div className='social-btns'>
                    <button className='s-btn'><img src='google.svg'></img>Google</button>
                    <button className='s-btn'><img src='apple.svg'></img>Apple</button>
                </div>
                <div className='content'>
                    <input type='text' placeholder='name'></input>
                </div>
                <div className='content'>
                    <input type='email' placeholder='email'></input>
                </div>
                <div className='content'>
                    <input type='password' placeholder='password'></input>
                </div>
                <div className='signup'>
                    <button className='signup-btn'>Signup</button>
                </div>
            </form>
        </div>
         
    );
}
export default signup;