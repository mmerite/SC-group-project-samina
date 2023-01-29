import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App(){
  return(
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/register' element={<Register/>}> </Route>
    </Routes>
  </Router>
  );
}
export default App;







































/* import logo from './logo.svg';
import './App.css';
import 'boxicons';
import { IoMdPerson, IoMdUnlock } from "react-icons/io";
import ReactDOM from 'react-dom/client';


function App() {

  const Login = () => {
    alert("Login");
  }



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

export default App;
 */