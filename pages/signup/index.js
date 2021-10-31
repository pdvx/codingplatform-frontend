import React, { useState, useEffect, useRef } from 'react';
import authServices from '../../services/auth';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON !== null) {
      const user = JSON.parse(loggedUserJSON);
      // blogService.setToken(user.token);
    }
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await authServices.signUp({
        userName: username,
        password,
      });
      console.log(response);
      setUsername('');
      setPassword('');
      window.localStorage.setItem('loggedUser', JSON.stringify(user));
      // blogService.setToken(user.token);
      request;
    } catch (exception) {
      console.log(exception);
      // setMessage(user.message);
    }
  };
  return (
    <div className="signup">
      <h1>Sign up</h1>
      {
        <form onSubmit={handleSignup}>
          <div>
            username
            <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
          </div>
          <div>
            password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div>
            <button type="submit">signup</button>
          </div>
        </form>
      }
      {message !== null && <div>{message}</div>}
    </div>
  );
};

export default Login;
