// 참여한 캠페인 인증 글들 메인 화면에 보여주는 컴포넌트
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyCampaignPosts } from "../../api/myCampaign";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  padding: 20px 20px 0 20px;
`;

const MainCampaignAuth = () => {
  const navigate = useNavigate();
  const userAccessToken = localStorage.getItem("accessToken");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!userAccessToken) {
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }
    getMyCampaignPosts(userAccessToken)
      .then((response) => {
        setPosts(response.data.data.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate, userAccessToken]);

  return (
    <div className="main-auth-container">
      <Title>참여한 캠페인 인증글</Title>
      <div className="participation-comments">
        {posts.length === 0 ? (
          <div className="participation-none" style={{ marginTop: "-20px" }}>
            <img src="icon/image3.png" alt="logo" width={"40"} height={"40"} />
            <p>참여한 캠페인이 없습니다.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div className="participation-comment" key={post.postId}>
              <div>
                <img src={post.postImageUrl} alt="profileImg" />
              </div>
              <div className="comment-info">
                <div>
                  <p>{post.nickname}</p>
                  <p>{post.date}</p>
                </div>
                <p>{post.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MainCampaignAuth;
