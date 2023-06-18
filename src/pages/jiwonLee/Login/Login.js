import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/jiwonLee/img1.png';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const savePassword = event => {
    setPassword(event.target.value);
  };

  const handleLogin = event => {
    event.preventDefault();

    console.log('ID:', userId);
    console.log('Password:', password);

    navigate('/Main');
  };

  const isButtonEnabled = userId.includes('@') && password.length >= 5;

  const buttonClassName = isButtonEnabled ? 'loginBtn active' : 'loginBtn';

  return (
    <div className="login">
      <img src={img} alt="loginPicture" className="loginImg" />
      <div className="loginContainer">
        <div className="logo">
          <h1>Westagram</h1>
        </div>
        <div className="loginFieid">
          <form onSubmit={handleLogin}>
            <input
              className="loginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              alt="ID"
              value={userId}
              onChange={saveUserId}
            />
            <br />
            <input
              className="pwd"
              type="password"
              placeholder="비밀번호"
              alt="Password"
              value={password}
              onChange={savePassword}
            />
            <br />
            <button
              className={buttonClassName}
              type="submit"
              disabled={!isButtonEnabled}
            >
              로그인
            </button>
          </form>
        </div>
        <span className="findPassword">비밀번호를 잊으셨나요?</span>
      </div>
    </div>
  );
};

export default Login;
