// 참여중인 캠페인 목록을 나타내는 컴포넌트
// 참여중 캠페인 데이터는 전체 캠페인 리스트로 대체중
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CampaignContext } from "../../components/CampaignContext";
import "../../styles/MainPage/MainCampaignList.scss";

const MainCampaignList = () => {
  const { campaigns } = useContext(CampaignContext);
  const navigate = useNavigate();
  const goCampaignAuth = (campaignId) => {
    navigate(`/campaigns/${campaignId}/participations/post`);
  };

  return (
    <div className="main-campaign-container">
      <h1>참여중 캠페인</h1>
      <div className="main-campaign-list">
        {campaigns.map((campaign) => (
          <div
            className="main-campaign-item"
            key={campaign.id}
            onClick={() => goCampaignAuth(campaign.id)}
          >
            <img src={campaign.imageUrl} alt="campaign img" />
            <h2>#{campaign.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCampaignList;
