import { useCookies } from 'react-cookie';
import React, { useState } from 'react';

import './Login.css';

function App() {

  const [cookies, setCookies] = useCookies(['user-details']);
  console.log(cookies);
  const [saveCookie, setSaveCookie] = useState(cookies.rememberMe? cookies.rememberMe : false);
  const [username, setUsername] = useState(cookies.username !== ""? cookies.username : "");
  const [password, setPassword] = useState(cookies.password !== ""? cookies.password : "");

  const onChangeUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  }

  const onChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }

  const SubmitHandler = (event) => {
    event.preventDefault();

    if(username === "" && password === "") {
      alert("Please enter username or password");
      return;
    } else if (saveCookie) {
      setCookies('username', username, { path: '/' });
      setCookies('password', password, { path: '/' });
      setCookies('rememberMe', true, { path: '/' });
      alert("Cookies added!");
    }
  }

  return (
    <div className="App">
      <br />
      <form onSubmit={SubmitHandler}>
          <div className='username'>
            <label>Username         </label>
            <input type="text" value={username} onChange={onChangeUsername} />
          </div>
          <br />
          <div className="password">
              <label>Password            </label>
              <input type="password" value={password} onChange={onChangePassword} />
          </div>
          <br/>
          <input id="rememberme" type="checkbox" defaultChecked={saveCookie} onClick={()=>setSaveCookie(!saveCookie)} />
          <label htmlFor="rememberme"> Remember me</label>
          <br/>
          <br />
          <input type="submit" className="btn-primary" />
      </form>
    </div>
  );
}

export default App;
