import { useRecoilValue } from "recoil";
import { userInfoState } from "../../data/User";
import "../../styles/ProfilePage/ProfileInfo.scss";

const ProfileInfo = () => {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <div className="profile-info-container">
      <div className="profile-info-top">
        {userInfo.profileImageUrl ? (
          <img src={userInfo.profileImageUrl} alt="profile-img" />
        ) : (
          <img src="icon/default-profile-img.png" alt="default-profile-img" />
        )}
        <p>{userInfo.nickname}</p>
      </div>
      <div className="profile-info-bottom">
        <img src="icon/person-icon.png" alt="person-icon" />
        <p>{userInfo.email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
