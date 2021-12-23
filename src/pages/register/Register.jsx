import './register.css'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter Username...." />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter Email...." />
        <label>Password</label>
        <input type="password" className="registerInput"  placeholder="Enter Passord...." />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login">
      <button className="registerRegisterButton">Login</button>
      </Link>
    </div>
  )
}

export default Register
