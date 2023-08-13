import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader'

function Login() {
  localStorage.clear();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const users = [{ username: 'Jane', password: 'testpassword', usertype: true }];

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const account = users.find((user) => user.username === username);

      if (account) {
        localStorage.setItem('authenticated', true);
        localStorage.setItem('user', JSON.stringify(account));
        if (account.usertype) {
          navigate('/');
        } else {
          navigate('/products');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='page'>
      <div className='cover-image'></div>
      <div className='cover'>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='login-button' onClick={handleLogin}>
          {isLoading ? (
            <ClipLoader
            color={`white`}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          ) : (
            'Login'
          )}
        </div>
        {error && <div className='error-message' style={{color: 'red'}} >{error}</div>}
        <div className='login-link'>
          <Link to='/register'>Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;  
