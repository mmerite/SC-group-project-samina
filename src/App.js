import logo from './logo.svg';
import './App.css';
import 'boxicons';
import { IoMdPerson, IoMdUnlock } from "react-icons/io";



function App() {
  return (
    <div className='box'>
      <div className='container'>
        <div className='top-header'>
          <span>Have an account?</span>
          <header>Login</header>
        </div>
        <div className='input-field'>
          <input type="text" className='input' placeholder="Username..." required/>
          <div className='lock'>
            <IoMdPerson></IoMdPerson>
          </div>
        </div>
        <div className='input-field'>
          <input type="password" className='input' placeholder="Password..." required/>
          <div className='lock'>
            <IoMdUnlock></IoMdUnlock>
          </div>
        </div>
        <div className='input-field'>
          <input type="submit" className='submit' value='Login'/>
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




    /* <div className="App">
      <div className='registration'>
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <button> Register</button>
      </div>

      <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="Username..."/>
        <input type="password" placeholder="Password..."/>
        <button>Register</button>
      </div>
    </div> */
   
  );
}

export default App;
