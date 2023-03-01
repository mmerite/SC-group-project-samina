import React from "react";
import 'boxicons';
import { IoMdPerson, IoMdUnlock } from "react-icons/io";

function Login(){
    return (
        <div className='box'>
          <div className='container'>
            <div className='top-header'>
              <header>Login</header>
            </div>
            <div className='input-field'>
              <input type="text" className='input' placeholder="Username..." required/>
              <div className='icon'>
                <IoMdPerson></IoMdPerson>
              </div>
            </div>
            <div className='input-field'>
              <input type="password" className='input' placeholder="Password..." required/>
              <div className='icon'>
                <IoMdUnlock></IoMdUnlock>
              </div>
            </div>
            <div className='input-field'>
              <button className='submit' onClick={Login}> Login</button>
            </div>
            <div className='bottom'>
              <div className='left'>
                <input type="checkbox" id='check'/>
                <label for="check"> Remember Me </label>
              </div>
              <div className='right'>
                <label><a href='#'>Forgot Password?</a></label>
              </div>
            </div>
    
          </div>
        </div>
    
    
    
    
       
      );



  
}

export default Login;
