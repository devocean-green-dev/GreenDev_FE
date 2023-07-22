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
      "https://img.etnews.com/photonews/2207/1550556_20220708132309_146_0001.jpg",
  },
  {
    id: 3,
    title: "줍깅",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "풀무원",
    category: "분리수거",
    imageUrl:
      "https://news.pulmuone.co.kr/webfile/webedit/20220428/20220428091221_[%EC%82%AC%EC%A7%841]%20%EA%B9%A8%EB%81%97%ED%95%9C%20%EC%A7%80%EA%B5%AC,%20%EA%B1%B4%EA%B0%95%ED%95%9C%20%EC%A7%80%EA%B5%AC%EB%A5%BC%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%9C%84%ED%95%B4%20%EC%9D%BC%EC%83%81%20%EC%86%8D%20%ED%99%98%EA%B2%BD%EB%B3%B4%ED%98%B8%EB%A5%BC%20%EC%8B%A4%EC%B2%9C%ED%95%98%EB%8A%94%20%E2%80%98%ED%92%80%EB%AC%B4%EC%9B%90%20%EC%A4%8D%EA%B9%85%20%EC%BA%A0%ED%8E%98%EC%9D%B8%E2%80%99.jpg",
  },
  {
    id: 4,
    title: "데보션 캠페인",
    date: "2023-03-01 ~ 2023-04-02",
    description: "조깅하면서 줍기",
    company: "SK",
    category: "일회용품",
    imageUrl:
      "https://newsroom-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2021/06/DEVOCEAN-%EB%A1%9C%EA%B3%A0_v02.jpg",
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
  {
    id: 6,
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
