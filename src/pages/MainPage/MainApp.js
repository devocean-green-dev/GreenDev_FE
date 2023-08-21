import { HeaderContainer } from "../../components/HeaderContainer";
import Header from "../../components/Header";
import MainCampaignList from "./MainCampaignList";
import MainHistoryGrass from "./MainHistoryGrass";
import MainCampaignAuth from "./MainCampaignAuth";

const MainApp = () => {
  return (
    <div>
      <HeaderContainer>
        <Header icon={"/icon/image3.png"} menuTitle="GREENDEV" />
      </HeaderContainer>
      <MainCampaignList />
      <MainHistoryGrass />
      <MainCampaignAuth />
    </div>
  );
};

export default MainApp;
