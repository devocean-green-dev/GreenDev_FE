import { HeaderContainer } from "../../components/HeaderContainer";
import Header from "../../components/Header";
import ProfileCustomize from "./ProfileCustomize";

const ProfileApp = () => {
  return (
    <div>
      <HeaderContainer>
        <Header menuTitle="프로필" />
      </HeaderContainer>
      <ProfileCustomize />
    </div>
  );
};

export default ProfileApp;
