import { useParams } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { CampaignContext } from "../../components/CampaignContext";
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
  const { campaigns } = useContext(CampaignContext);
  const campaign = campaigns.find((c) => c.id === parseInt(campaignId));

  return (
    <div>
      <HeaderContainer>
        <Header
          icon={process.env.PUBLIC_URL + "/icon/btnBack.svg"}
          menuTitle={"참여 인증글 쓰기"}
        />
      </HeaderContainer>
      <CampaignAuthContainer>
        <CampaignSummary
          imageUrl={campaign.imageUrl}
          date={campaign.date}
          title={campaign.title}
          company={campaign.company}
          description={campaign.description}
        />
        <Title>참여 인증하기</Title>
        <CampaignAuthForm />
      </CampaignAuthContainer>
    </div>
  );
};

export default CampaignAuthPost;
