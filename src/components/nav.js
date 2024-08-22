import {useState} from 'react';
import './nav.css';
import Login from './loginpage';


const Nav=()=> {
    const [count,setcount]=useState(0);
    const handleOpen=()=>{
        setcount(count+1);
    }
    return(
        <div>
            <div className='head'>
                <h2>ILLUSTRA.ai</h2>
                <div className='btn-container'>
                <button className='btn1'onClick={handleOpen}>Log in</button>
                <button className='btn2'>Sign Up</button>
            </div>
            </div>
            <Login/>
        </div>
         
    );
};

export default Nav;