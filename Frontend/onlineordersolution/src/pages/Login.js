import React, {useState} from 'react'
import './Login.css'
import { useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate();
  const [username, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleLogin = (e) => {
    console.log("login");
    e.preventDefault();
    console.log(username, password);
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      console.log("logged in");
      localStorage.setItem("authenticated", true);
      navigate("/");
    }
  };

  return (
    <div className='page'>
     <div className='cover-image'></div>
        <div className='cover'>
        
        <h1>Login</h1>
        <input type='text' placeholder='Email' onChange={(e) => setemail(e.target.value)}/>
        <input type='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>

        <div className='login-button' onClick={handleLogin}>Login</div>

     </div>
    </div>
   
  )
}

export default Login
