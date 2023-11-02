// 캠페인 인증 페이지
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/SearchPage/CampaignAuthList.scss";
import {
  getParticipationsData,
  getPostsData,
  getCampaignData,
} from "../../api/campaign";
import { HeaderContainer } from "../../components/HeaderContainer";
import Header from "../../components/Header";

const CampaignAuthList = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [participations, setParticipations] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchParticipationsAndPosts() {
      try {
        const response = await getCampaignData();
        const campaignData = response._embedded.campaigns.find((campaign) =>
          campaign._links.campaign.href.includes(campaignId)
        );
        setCampaign(campaignData);

        const participationsResponse = await getParticipationsData(campaignId);
        setParticipations(participationsResponse._embedded.participations[0]);

        const postsResponse = await getPostsData(campaignId);
        setComments(postsResponse._embedded.posts);
      } catch (error) {
        console.error("Error fetching participations and posts:", error);
      }
    }
    fetchParticipationsAndPosts();
  }, [campaignId]);

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

  const handleWritePost = () => {
    navigate(`/campaigns/${campaignId}/participations/post`);
  };

  if (!participations || !comments || !campaign) {
    return (
      <div>
        <HeaderContainer>
          <Header icon={"/icon/btnBack.svg"} menuTitle="캠페인 인증글" />
        </HeaderContainer>
        <div className="participation-none" style={{ marginTop: "30px" }}>
          <img src="/icon/image3.png" alt="logo" width={"40"} height={"40"} />
          <p>등록된 캠페인 인증 글이 없습니다.</p>
        </div>
        <div className="participation-button">
          <button onClick={handleWritePost}>참여인증</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeaderContainer>
        <Header icon={"/icon/btnBack.svg"} menuTitle={campaign.title} />
      </HeaderContainer>
      <div className="participation-number">
        <p>
          <span>{campaign.joinMemberCount}</span>명이{" "}
          <span>{campaign.totalJoinCount}</span>번 참여했어요.
        </p>
      </div>
      <div className="participation-comments">
        {comments.slice(0, visibleComments).map((post, index) => (
          <div className="participation-comment" key={index}>
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
