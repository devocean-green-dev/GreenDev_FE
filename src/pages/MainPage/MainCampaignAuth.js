// 참여한 캠페인 인증 글들 메인 화면에 보여주는 컴포넌트
import { useContext } from "react";
import { CommentContext } from "../../components/CampaignComment";

const MainCampaignAuth = () => {
  const { comments } = useContext(CommentContext);

  if (!comments) {
    return <div>인증글 불러오는중...</div>;
  }

  const { posts } = comments[0];

  return (
    <div className="main-auth-container">
      <div className="participation-comments">
        {posts.map((post) => (
          <div className="participation-comment" key={post.postId}>
            <div>
              <img src={post.profileImageUrl} alt="profileImg" />
            </div>
            <div className="comment-info">
              <div>
                <p>{post.nickname}</p>
                <p>{post.date}</p>
              </div>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCampaignAuth;
