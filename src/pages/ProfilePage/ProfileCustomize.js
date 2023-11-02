import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProfilePage/ProfileCustomize.scss";
import { getMyBadge } from "../../api/myCampaign";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../data/User";
import ProfileInfo from "./ProfileInfo";

const ProfileCustomize = () => {
  const navigate = useNavigate();
  const userAccessToken = useRecoilValue(accessTokenState);
  const [badgePositions, setBadgePositions] = useState([]);
  const [badgeList, setBadgeList] = useState([]);

  const [showProfileInfo, setShowProfileInfo] = useState(false);

  const toggleProfileInfo = () => {
    setShowProfileInfo((prevState) => !prevState);
  };

  useEffect(() => {
    if (!userAccessToken) {
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }
    getMyBadge(userAccessToken)
      .then((response) => {
        setBadgeList(response.data.data.badges);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate, userAccessToken]);

  const generateRandomPosition = () => {
    const treeWidth = 250;
    const treeHeight = 250;

    const randomX = Math.random() * treeWidth;
    const randomY = Math.random() * treeHeight;

    return { x: randomX, y: randomY };
  };

  const handleBadgeClick = (index) => {
    // 이미 해당 배지가 트리 위에 있는지 확인
    const isAlreadyOnTree = badgePositions.some(
      (badge) => badge.index === index
    );

    if (isAlreadyOnTree) {
      // 이미 트리에 위치한 배지인 경우 해당 배지를 제거
      const updatedBadgePositions = badgePositions.filter(
        (badge) => badge.index !== index
      );
      setBadgePositions(updatedBadgePositions);
    } else {
      const newPosition = generateRandomPosition();

      const newBadgePosition = {
        index,
        x: newPosition.x,
        y: newPosition.y,
      };

      setBadgePositions([...badgePositions, newBadgePosition]);
    }
  };

  return (
    <div className="profile-customize-container">
      <form>
        <button>저장</button>
        <div className="badge-tree">
          <img src={"/badge/tree.png"} alt="tree" className="tree-image" />
          {badgePositions.map((position) => (
            <img
              key={position.index}
              src={badgeList[position.index].badgeImageUrl}
              alt="badge"
              style={{
                left: position.x,
                top: position.y,
              }}
              onClick={() => handleBadgeClick(position.index)}
              className="badge-image"
            />
          ))}
        </div>
        {badgeList.length === 0 ? (
          <div className="participation-none">
            <img src="icon/image3.png" alt="logo" width={"40"} height={"40"} />
            <p>획득한 뱃지가 없습니다.</p>
          </div>
        ) : (
          <div className="badge-container">
            {badgeList.map((badge, index) => (
              <img
                key={index}
                src={badge.badgeImageUrl}
                alt="badge"
                onClick={() => handleBadgeClick(index)}
              />
            ))}
          </div>
        )}
      </form>
      {showProfileInfo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleProfileInfo}>
              X
            </span>
            <ProfileInfo />
          </div>
        </div>
      )}
      <button className="info-button" onClick={toggleProfileInfo}>
        프로필 정보 보기
      </button>
    </div>
  );
};

export default ProfileCustomize;
