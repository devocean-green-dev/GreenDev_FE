import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCampaignData } from "../../api/campaign";
import styled from "styled-components";
import { HeaderContainer } from "../../components/HeaderContainer";
import Header from "../../components/Header";
import CampaignSummary from "./CampaignSummary";
import CampaignAuthForm from "../SearchPage/CampaignAuthForm";

const CampaignAuthContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 50px 0 5px 5px;
`;

const CampaignAuthPost = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(null);
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

  return (
    <div>
      <HeaderContainer>
        <Header icon={"/icon/btnBack.svg"} menuTitle={"참여 인증글 쓰기"} />
      </HeaderContainer>
      <CampaignAuthContainer>
        <CampaignSummary
          imageUrl={campaign.campaignimageUrl}
          date={campaign.date}
          title={campaign.title}
          // company={campaign.company}
          description={campaign.description}
        />
        <Title>참여 인증하기</Title>
        <CampaignAuthForm />
      </CampaignAuthContainer>
    </div>
  );
};

export default CampaignAuthPost;
