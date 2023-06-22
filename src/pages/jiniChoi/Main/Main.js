import React, { useEffect, useState } from 'react';

import { FOOTER_LIST } from './MainData';
import Nav from '../../../components/Nav/Nav';
import CommentBox from '../Comment/CommentBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

import './Main.scss';

const Main = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('./data/mainFeedData.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  return (
    <div className="Main">
      <Nav />
      <main>
        <div className="containar">
          <div className="feedsContainar">
            {feeds.map(info => (
              <section className="feeds" key={info.id}>
                <article>
                  <div className="feedsMenu">
                    <div className="user">
                      <div className="userImg" />
                      <div className="userId">{info.userId}</div>
                    </div>
                    <FontAwesomeIcon icon={faEllipsis} className="more" />
                  </div>

                  <div className="feedMainContents">
                    <div className="feedImg">
                      <img src={info.img} alt="" />
                    </div>

                    <div className="feedUtilMenu">
                      <div className="left">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="UtilMenuLike"
                        />
                        <FontAwesomeIcon
                          icon={faComment}
                          className="UtilMenuComment"
                        />
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="UtilMenuShare"
                        />
                      </div>
                      <div className="right">
                        <FontAwesomeIcon
                          icon={faBookmark}
                          className="UtilMenuBookmark"
                        />
                      </div>
                    </div>

                    <div className="feedLikes">
                      <div className="feedLikesImg" />
                      <div className="feedLikesText">{info.likes}</div>
                    </div>
                    <CommentBox />
                  </div>
                </article>
              </section>
            ))}
          </div>
          <aside className="mainRight">
            <div className="myProfil">
              <div className="myProfilImg" />
              <div className="myProfilText">
                <div className="myProfilId">genie</div>
                <div className="myProfilName">WeCode | 위코드</div>
              </div>
            </div>

            <div className="story">
              <div className="title">
                <h3>스토리</h3>
                <span className="more">모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>

                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="recommendation">
              <div className="title">
                <h3>회원님을 위한 추천</h3>
                <span className="more">모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="recommendationImg" />
                  <div className="recommendationText">
                    <div className="recommendationId">jieunnnn</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendationImg" />
                  <div className="recommendationText">
                    <div className="recommendationId">gongjooim</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendationImg" />
                  <div className="recommendationText">
                    <div className="recommendationId">jungminimanimo</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
              </ul>
            </div>

            <footer>
              <p>
                {FOOTER_LIST.map(info => (
                  <span key={info.id}>{info.text}</span>
                ))}
              </p>
              <span>© 2023 WESTAGRAM</span>
            </footer>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Main;
