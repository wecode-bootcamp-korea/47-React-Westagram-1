import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const signUp = () => {
    fetch('http://10.58.52.76:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        // email: 'jjinnnbb@gmail.com',
        // password: 'abcd1237674@#',
        email: inputValues.id,
        password: inputValues.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        alert('회원가입 실패');
      })
      .then(data => {
        if (data.message === 'signUp success') {
          localStorage.setItem('TOKEN', data.token);
          alert('회원가입 성공');
        } else {
          alert('회원가입 실패');
        }
      });
  };

  const login = () => {
    fetch('http://10.58.52.76:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        // email: 'jjinnn@gmail.com',
        // password: 'abcd1234@#',
        email: inputValues.id,
        password: inputValues.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        alert('로그인 실패');
      })
      .then(data => {
        if (data.message === 'Login success') {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인 성공');
          navigate('/main-jini');
        } else if (data.message === 'Invalid email or password') {
          alert('로그인 실패');
        }
      });
  };

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
        <div className="inputBox">
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
          <button
            onClick={login}
            className={loginBtn ? 'activeLoginBtn' : 'loginBtn'}
            disabled={
              inputValues.id === '' || inputValues.pw === '' ? true : false
            }
          >
            로그인
          </button>
          <button
            onClick={signUp}
            className={loginBtn ? 'activeLoginBtn' : 'loginBtn'}
            disabled={
              inputValues.id === '' || inputValues.pw === '' ? true : false
            }
          >
            회원가입
          </button>
        </div>
        {/* <button id="loginBtn" onclick="location='./main.html'" disabled>
            로그인
          </button> */}
      </div>
      <span className="findPassword">비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
