// 참여 인증 잔디로 보여주기
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyCampaignGrass } from "../../api/myCampaign";
import "../../styles/MainPage/MainHistoryGrass.scss";

const MainHistoryGrass = () => {
  const navigate = useNavigate();
  const userAccessToken = localStorage.getItem("accessToken");
  const [blocks, setBlocks] = useState(
    Array.from({ length: 30 }, (_, index) => ({ authPosts: 0 }))
  );

  useEffect(() => {
    if (!userAccessToken) {
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    getMyCampaignGrass(userAccessToken)
      .then((response) => {
        const initializedBlocks = Array.from({ length: 30 }, (_, index) => ({
          date: "",
          count: 0,
        }));

        response.data.data.forEach((item) => {
          const dateIndex = blocks.findIndex(
            (block) => block.date === item.date
          );
          if (dateIndex !== -1) {
            initializedBlocks[dateIndex] = item;
          }
        });

        setBlocks(initializedBlocks);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate, userAccessToken]);

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
            className={`grass-block ${getGrassColor(block.count) || "zero"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainHistoryGrass;
