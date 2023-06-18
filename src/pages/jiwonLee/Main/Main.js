import React, { useState } from 'react';
import { BsHeart, BsChat, BsShare, BsBookmark } from 'react-icons/bs';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import img2 from '../../../assets/jiwonLee/profileImg.png';
import img1 from '../../../assets/jiwonLee/feedImg.jpg';
import img3 from '../../../assets/jiwonLee/story1.png';
import img4 from '../../../assets/jiwonLee/story2.png';
import img5 from '../../../assets/jiwonLee/story3.png';
import img6 from '../../../assets/jiwonLee/story4.png';
import img7 from '../../../assets/jiwonLee/recommend1.jpg';
import img8 from '../../../assets/jiwonLee/recommend2.jpg';
import img9 from '../../../assets/jiwonLee/recommend3.jpg';
import img10 from '../../../assets/jiwonLee/likeProfile.jpg';
import img11 from '../../../assets/jiwonLee/story5.png';
import img12 from '../../../assets/jiwonLee/story6.png';
import img13 from '../../../assets/jiwonLee/recommend10.jpg';

const Main = () => {
  const [comments, setComments] = useState([]); // 댓글 배열 상태

  // 댓글 추가 함수
  const addComment = e => {
    e.preventDefault(); // 폼 기본 동작 방지

    const commentInput = e.target.elements.commentInput.value; // 입력된 댓글 내용 가져오기

    if (commentInput.trim() === '') {
      return; // 댓글이 비어있으면 함수 종료
    }

    const newComment = {
      id: Date.now(), // 고유 ID 생성 (현재 시간 기반)
      text: commentInput,
    };

    setComments([...comments, newComment]); // 댓글 배열에 추가
    e.target.reset(); // 폼 초기화
  };

  // 댓글 삭제 함수
  const deleteComment = commentId => {
    setComments(comments.filter(comment => comment.id !== commentId)); // 댓글 배열에서 해당 ID를 가진 댓글 제외
  };
  return (
    <div className="mainPage">
      <Nav />
      <div className="mainFeedBorder">
        <article className="mainFeed">
          <div className="profilePicture">
            <img src={img2} alt="profileImg" className="profilePicture" />
            <span className="myName">Dodge_Offical</span>
          </div>
          <img src={img1} alt="feedImg" className="feedPicture" />
          <div className="feedIcon">
            <BsHeart className="like" alt="likeImg" />
            <BsChat className="comment" alt="commentImg" />
            <BsShare className="share" alt="shareImg" />
            <BsBookmark className="save" alt="saveImg" />
          </div>

          <div className="receiveLike">
            <img src={img10} alt="likeProfile" className="likeProfile" />
            <span className="likerName">goodpeople_1</span>
            <span className="text">님 외 </span>
            <span className="likerNumber">185,437명</span>
            <span className="text">이 좋아합니다.</span>
          </div>
          <span className="feedInfo">DodgeOfficial </span>

          <span className="infoText">
            #ThatsMyDodge <br /> 📸: @_6.4gio_
            <br /> #Dodge #Challenger #DodgeChallenger #SRT #Hell..
          </span>
          <a href="">
            <p className="more">더보기..</p>
          </a>
          <span className="userName">badpeople_4 : 🔥🔥🔥🔥🔥🔥</span>

          <p className="time">17분 전</p>
          <div className="commentContainer">
            <form onSubmit={addComment}>
              <input
                className="commentArea"
                type="text"
                placeholder="댓글 달기..."
                name="commentInput"
              />
              <button className="commentBtn" type="submit">
                게시
              </button>
              <ul className="commentList">
                {comments.map(comment => (
                  <li key={comment.id} className="commentItem">
                    <span className="commentText">{comment.text}</span>
                    <button
                      className="commentDeleteBtn"
                      onClick={() => deleteComment(comment.id)}
                    >
                      {' '}
                    </button>
                  </li>
                ))}
              </ul>
            </form>
          </div>
        </article>

        <div className="mainRightContainer">
          <div className="mainRightStoryBorder">
            <span className="story">스토리</span>
            <span className="viewAll">모두 보기</span>
            <ul>
              <li>
                <img src={img3} alt="story3" className="storyImg3" />
              </li>
              <li>
                <img src={img4} alt="story4" className="storyImg4" />
              </li>
              <li>
                <img src={img5} alt="story5" className="storyImg5" />
              </li>
              <li>
                <img src={img6} alt="story6" className="storyImg6" />
              </li>
              <li>
                <img src={img11} alt="story11" className="storyImg11" />
              </li>
              <li>
                <img src={img12} alt="story12" className="storyImg12" />
              </li>
            </ul>
            <ul className="storyName">
              <li className="storyList1">Ford_Official</li>
              <span className="storyTime1">1분 전</span>
              <li className="storyList2">Chevrolet_Official</li>
              <span className="storyTime2">17분 전</span>
              <li className="storyList3">GMC_Offical</li>
              <span className="storyTime3">26분 전</span>
              <li className="storyList4">RAM_Official</li>
              <span className="storyTime4">28분 전</span>
              <li className="storyList11">JEEP_Official</li>
              <span className="storyTime11">39분 전</span>
              <li className="storyList12">Hummer_Official</li>
              <span className="storyTime12">55분 전</span>
            </ul>
          </div>
          <div className="mainRightRecommend">
            <span className="recommendText">회원님을 위한 추천</span>
            <span className="viewAll2">모두 보기</span>
            <ul>
              <li>
                <img src={img7} alt="recommendImg" className="recommend7" />
              </li>
              <li>
                <img src={img8} alt="recommendImg" className="recommend8" />
              </li>
              <li>
                <img src={img9} alt="recommnedImg" className="recommend9" />
              </li>
              <li>
                <img src={img10} alt="recommnedImg" className="recommend10" />
              </li>
            </ul>
            <ul>
              <li className="addRecommend1">Jiwon_0614</li>
              <button className="follow1">팔로우</button>
              <li className="addRecommend2">asdnj__1</li>
              <button className="follow2">팔로우</button>
              <li className="addRecommend3">mjfi_0921</li>
              <button className="follow3">팔로우</button>
              <li className="addRecommend4">rmsid902</li>
              <button className="follow4">팔로우</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
