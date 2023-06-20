import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 최진이의 컴포넌트
import LoginJini from './pages/jiniChoi/Login/Login';
import MainJini from './pages/jiniChoi/Main/Main';

// 이지원의 컴포넌트
import LoginJiwon from './pages/jiwonLee/Login/Login';
import MainJiwon from './pages/jiwonLee/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jini" element={<LoginJini />} />
        <Route path="/main-jini" element={<MainJini />} />
        <Route path="/" element={<LoginJiwon />} />
        <Route path="/Main" element={<MainJiwon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
