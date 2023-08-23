// Home의 자신의 참여 기록을 불러오는 api
import axios from "axios";

const BASE_URL = "https://greendev-api.dev-lr.com/api/v1";

export const getMyCampaigns = (accessToken) => {
  return axios.get(`${BASE_URL}/members/campaigns`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getMyCampaignGrass = (accessToken) => {
  return axios.get(`${BASE_URL}/members/grass`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getMyCampaignPosts = (accessToken) => {
  return axios.get(`${BASE_URL}/members/posts`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
