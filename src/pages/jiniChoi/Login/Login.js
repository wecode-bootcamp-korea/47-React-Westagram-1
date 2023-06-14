import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div class="loginBox">
      <div class="logo">
        <h1>Westagram</h1>
      </div>
      <div class="loginInput">
        <form>
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            id="id"
          />
          <input type="password" placeholder="비밀번호" id="pw" />
          {/* <Link to="/main">이동</Link> */}
          <button onClick={() => navigate('/main')} className="loginBtn">
            로그인
          </button>
          {/* <button id="loginBtn" onclick="location='./main.html'" disabled>
            로그인
          </button> */}
        </form>
      </div>
      <span class="findPassword">비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
