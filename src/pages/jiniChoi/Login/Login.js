import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
  });
  const [loginBtn, setloginBtn] = useState(false);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const passedLogin = () => {
    return inputValues.id.includes('@') && inputValues.pw.length >= 5
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
            value={inputValues.id}
            onChange={handleInput}
            onKeyUp={passedLogin}
            name="id"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="pw"
            value={inputValues.pw}
            onChange={handleInput}
            onKeyUp={passedLogin}
            name="pw"
          />
          {/* <Link to="/main">이동</Link> */}
          <button
            onClick={() => navigate('/main-jini')}
            className={loginBtn ? 'activeLoginBtn' : 'loginBtn'}
            disabled={
              inputValues.id === '' || inputValues.pw === '' ? true : false
            }
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
