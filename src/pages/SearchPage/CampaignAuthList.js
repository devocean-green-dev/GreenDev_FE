// 캠페인 인증 페이지
import { useContext, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/SearchPage/CampaignAuthList.scss";
import { CampaignContext } from "../../components/CampaignContext";
import { CommentContext } from "../../components/CampaignComment";
import { HeaderContainer } from "../../components/HeaderContainer";
import Header from "../../components/Header";

const CampaignAuthList = () => {
  const { campaignId } = useParams();
  const { campaigns } = useContext(CampaignContext);
  const campaign = campaigns.find((c) => c.id === parseInt(campaignId));
  const { comments } = useContext(CommentContext);
  const navigate = useNavigate();

  const [visibleComments, setVisibleComments] = useState(10);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9, // 댓글이 화면의 90%이상 드러날 때 추가 댓글 불러오기
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleComments((prev) => prev + 10);
        }
      });
    }, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [comments]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollY + clientHeight >= totalHeight * 1.0) {
      setVisibleComments((prev) => prev + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!campaign || !comments) {
    return <div>캠페인 불러오는중...</div>;
  }

  const { joinCount, totalPostsCount, posts } = comments[0];

  const handleWritePost = () => {
    navigate(`/campaigns/${campaignId}/participations/post`);
  };

  return (
    <div>
      <HeaderContainer>
        <Header
          icon={process.env.PUBLIC_URL + "/icon/btnBack.svg"}
          menuTitle={campaign.title}
        />
      </HeaderContainer>
      <div className="participation-number">
        <p>
          <span>{joinCount}</span>명이 <span>{totalPostsCount}</span>번
          참여했어요.
        </p>
      </div>
      <div className="participation-comments">
        {posts.slice(0, visibleComments).map((post) => (
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
            <div ref={observerRef} className="observer-element" />
          </div>
        ))}
      </div>
      <div className="participation-button">
        <button onClick={handleWritePost}>참여인증</button>
      </div>
    </div>
  );
};

export default CampaignAuthList;
