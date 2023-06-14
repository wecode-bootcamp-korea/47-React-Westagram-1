import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <header className="mainNav">
      <nav>
        <div className="containar">
          <div className="mainLogo">
            <a href="./main.html">
              <img src="/images/instagram.png" alt="westagram" />
            </a>
            <span className="bar" />
            <a href="./main.html" className="logoText">
              <h1>Westagram</h1>
            </a>
          </div>

          <div className="searchBox">
            <div className="searchBorder">
              <div className="search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="MagnifyingGlass"
                />
                <input type="text" placeholder="검색" />
              </div>
            </div>
          </div>

          <div className="utilMenu">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색하기"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="활동"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="마이페이지"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
