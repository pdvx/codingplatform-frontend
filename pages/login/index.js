import React, { useState, useEffect, useRef } from 'react';
import authServices from '../../services/auth';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      // blogService.setToken(user.token);
    }
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    setUser(null);
    window.localStorage.removeItem('loggedUser');
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await authServices.login({
        userName: username,
        password,
      });
      console.log(response.data.data);
      setUser(response.data.data);
      setUsername('');
      setPassword('');
      window.localStorage.setItem('loggedUser', JSON.stringify(response.data.data));
      // blogService.setToken(user.token);
    } catch (exception) {
      console.log(exception);
      // setMessage(user.message);
    }
  };
  return (
    <>
      <h1>Log in</h1>
      {user === null && (
        <form onSubmit={handleLogin}>
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
            <button type="submit">login</button>
            <button
              onClick={() => {
                router.push('/signup');
              }}
            >
              signup
            </button>
          </div>
        </form>
      )}
      {user !== null && (
        <div>
          logged as {user.user.userName} <button onClick={handleLogout}>logout</button>
          <div></div>
        </div>
      )}
      {message !== null && <div>{message}</div>}
    </>
  );
};

export default Login;
