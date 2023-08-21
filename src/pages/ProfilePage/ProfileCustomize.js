import { useState } from "react";
import "../../styles/ProfilePage/ProfileCustomize.scss";

const badgeList = [
  "eco-friendly-car.png",
  "electric-blue-car.png",
  "hanger-bag-yellow.png",
  "hanger-bag.png",
  "recycle-bin.png",
  "reusable-bag.png",
  "eco-friendly-car.png",
  "eco-friendly-car.png",
  "eco-friendly-car.png",
  "eco-friendly-car.png",
  "eco-friendly-car.png",
  "eco-friendly-car.png",
];

const ProfileCustomize = () => {
  const [badgePositions, setBadgePositions] = useState([]);

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
              src={"/badge/" + badgeList[position.index]}
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
        <div className="badge-container">
          {badgeList.map((badge, index) => (
            <img
              key={index}
              src={"/badge/" + badge}
              alt="badge"
              onClick={() => handleBadgeClick(index)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default ProfileCustomize;
