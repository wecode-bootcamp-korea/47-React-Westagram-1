import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [id, setID] = useState('');
  const [pw, setPw] = useState('');
  const [loginBtn, setloginBtn] = useState(false);

  const saveUserId = event => setID(event.target.value);

  const saveUserPw = event => setPw(event.target.value);

  const passedLogin = () => {
    return id.includes('@') && pw.length >= 5
      ? setloginBtn(true)
      : setloginBtn(false);
  };

  return (
    <div className="loginBox">
      <div className="logo">
        <h1>Westagram</h1>
      </div>
      <div className="loginInput">
        <form>
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="id"
            value={id}
            onChange={saveUserId}
            onKeyUp={passedLogin}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="pw"
            value={pw}
            onChange={saveUserPw}
            onKeyUp={passedLogin}
          />
          {/* <Link to="/main">이동</Link> */}
          <button
            onClick={() => navigate('/main-jini')}
            className={loginBtn ? 'activeLoginBtn' : 'loginBtn'}
            disabled={id === '' || pw === '' ? true : false}
          >
            로그인
          </button>
          {/* <button id="loginBtn" onclick="location='./main.html'" disabled>
            로그인
          </button> */}
        </form>
      </div>
      <span className="findPassword">비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
