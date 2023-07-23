// 캠페인 상세 페이지
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CampaignContext } from "../../components/CampaignContext";
import Header from "../../components/Header";
import "../../styles/SearchPage/CampaignDetail.scss";

const CampaignDetail = () => {
  const HeaderContainer = styled.div`
    width: 100%;
    max-width: 375px;
    height: 3rem;
    background: white;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
  `;

  const { campaignId } = useParams();
  const { campaigns } = useContext(CampaignContext);
  const navigate = useNavigate();

  const campaign = campaigns.find((c) => c.id === parseInt(campaignId, 10));

  if (!campaign) {
    return <div>Loading...</div>;
  }

  const handleParticipateClick = () => {
    navigate(`/campaigns/${campaignId}/participations`);
  };

  return (
    <div>
      <HeaderContainer>
        <Header menuTitle={campaign.title} />
      </HeaderContainer>
      <div className="campaign-detail-container">
        <img src={campaign.imageUrl} alt="Campaign" />
        <div className="campaign-info">
          <span>#{campaign.category}</span>
          <p>기간: {campaign.date}</p>
          <h2>{campaign.title}</h2>
          <p>{campaign.company}</p>
          <p>{campaign.description}</p>
        </div>
        <button onClick={handleParticipateClick}>참여하기</button>
      </div>
    </div>
  );
};

export default CampaignDetail;
