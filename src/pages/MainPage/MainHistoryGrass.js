// 참여 인증 잔디로 보여주기
import { useState } from "react";
import "../../styles/MainPage/MainHistoryGrass.scss";

const MainHistoryGrass = () => {
  const [blocks, setBlocks] = useState(
    Array.from({ length: 30 }, (_, index) => ({ authPosts: 0 }))
  );

  const getGrassColor = (authPosts) => {
    if (authPosts === 0) return "zero";
    if (authPosts === 1) return "one";
    if (authPosts === 2) return "two";
    if (authPosts === 3) return "three";
    return "more";
  };

  return (
    <div className="main-grass-container">
      <h1>최근 30일 참여기록</h1>
      <div className="main-grass-items">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`grass-block ${getGrassColor(block.authPosts)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainHistoryGrass;
