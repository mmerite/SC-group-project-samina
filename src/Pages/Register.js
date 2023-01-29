import React from "react";
import 'boxicons';
import { IoMdPerson, IoMdUnlock } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";


function Register(){
  return (
    <div className='box'>
      <div className='container'>
        <div className='top-header'>
          <span>Welcome to Hydro</span>
          <header>Register</header>
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
          <input type="text" className='input' placeholder="Email..." required/>
          <div className='icon'>
            <BiEnvelope></BiEnvelope>
          </div>
        </div>
        <div className='input-field'>
          <button className='submit'>Register</button>
        </div>
        {/* <div className='bottom'>
          <div className='left'>
            <input type="checkbox" id='check'/>
            <label for="check"> Remember Me </label>
          </div>
          <div className='right'>
            <label><a href='#'>Forgot Password?</a></label>
          </div>
        </div> */}

      </div>
    </div>

   
  );
  
}

export default Register;
