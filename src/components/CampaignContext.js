// 캠페인 데이터 정보를 가지는 컴포넌트
import { createContext, useState } from "react";

const virtualCampaigns = [
  {
    id: 1,
    title: "다다익선 캠페인",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "스타벅스",
    category: "일회용품",
    imageUrl:
      "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2023/04/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EB%B3%B8%EB%AC%B801.png",
  },
  {
    id: 2,
    title: "용기를 내 챌린지",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "코웨이",
    category: "일회용품",
    imageUrl:
      "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2023/04/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EB%B3%B8%EB%AC%B801.png",
  },
  {
    id: 3,
    title: "다다익선 캠페인",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "스타벅스",
    category: "일회용품",
    imageUrl:
      "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2023/04/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EB%B3%B8%EB%AC%B801.png",
  },
  {
    id: 4,
    title: "다다익선 캠페인",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "스타벅스",
    category: "일회용품",
    imageUrl:
      "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2023/04/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EB%B3%B8%EB%AC%B801.png",
  },
  {
    id: 5,
    title: "다다익선 캠페인",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "스타벅스",
    category: "일회용품",
    imageUrl:
      "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2023/04/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EB%B3%B8%EB%AC%B801.png",
  },
];

export const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState(virtualCampaigns);

  return (
    <CampaignContext.Provider value={{ campaigns }}>
      {children}
    </CampaignContext.Provider>
  );
};
