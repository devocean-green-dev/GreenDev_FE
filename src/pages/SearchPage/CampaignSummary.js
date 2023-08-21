// 캠페인 인증 글 작성시 상단에 인증하고자 하는 캠페인 정보 요약하여 보여주기
import "../../styles/SearchPage/CampaignSummary.scss";

const CampaignSummary = ({ imageUrl, date, title, description }) => {
  return (
    <div className="campaign-summary">
      <div className="campaign-img">
        <img src={imageUrl} alt="Campaign" />
      </div>
      <div className="campaign-description">
        <p>{date}</p>
        <p>{title}</p>
        {/* <p>{company}</p> */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CampaignSummary;
