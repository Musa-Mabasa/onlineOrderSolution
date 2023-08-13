import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'

function Register() {

  const navigate = useNavigate();
  const [username, setemail] = useState("");
  const [password, setpassword] = useState("");

  const users = [{ username: "Jane", password: "testpassword", usertype: false }];
  const handleLogin = (e) => {
    console.log("login");
    e.preventDefault();
    console.log(username, password);
    const account = users.find((user) => user.username === username);
    if (account) {
      console.log("logged in");
      localStorage.setItem("authenticated", true);
      localStorage.setItem("user", JSON.stringify(account));
      if(account.usertype){
      navigate("/");
      }
      else{
        navigate("/products");
      }
    }
  };

  return (
    <div className='page'>
     <div className='cover-image'></div>
        <div className='cover'>
        
        <h1>Sign up</h1>
        <input type='text' placeholder='Email' onChange={(e) => setemail(e.target.value)}/>
        <input type='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>
        <input type='password' placeholder='Confirm Password' onChange={(e) => setpassword(e.target.value)}/>

        <div className='login-button' onClick={handleLogin}>Login</div>
        <div className='login-link'>
            <Link to="/login">Already have an account? Login</Link>
        </div>

     </div>
    </div>
   
  )
}

export default Register
