// 캠페인 상세 페이지
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HeaderContainer } from "../../components/HeaderContainer";
import { getCampaignData } from "../../api/campaign";
import Header from "../../components/Header";
import "../../styles/SearchPage/CampaignDetail.scss";

const CampaignDetail = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCampaignData() {
      try {
        const response = await getCampaignData();
        const campaignData = response._embedded.campaigns.find((campaign) =>
          campaign._links.campaign.href.includes(campaignId)
        );
        setCampaign(campaignData);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    }
    fetchCampaignData();
  }, [campaignId]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  const handleParticipateClick = () => {
    navigate(`/campaigns/${campaignId}/participations`);
  };

  return (
    <div>
      <HeaderContainer>
        <Header icon={"/icon/btnBack.svg"} menuTitle={campaign.title} />
      </HeaderContainer>
      <div className="campaign-detail-container">
        <img src={campaign.campaignimageUrl} alt="Campaign" />
        <div className="campaign-info">
          <span>#{campaign.category}</span>
          <p>기간: {campaign.date}</p>
          <h2>{campaign.title}</h2>
          <p>{campaign.description}</p>
        </div>
        <button onClick={handleParticipateClick}>참여하기</button>
      </div>
    </div>
  );
};

export default CampaignDetail;
