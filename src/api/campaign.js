// 캠페인 관련 api
import axios from "axios";

const API_BASE_URL = "https://greendev-api.dev-lr.com";

async function fetchData(endpoint, options = {}) {
  try {
    const response = await axios(`${API_BASE_URL}${endpoint}`, options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCampaignData() {
  return fetchData("/campaigns");
}

export async function getParticipationsData(campaignId) {
  return fetchData(`/campaigns/${campaignId}/participations`);
}

export async function getPostsData(campaignId) {
  return fetchData(`/campaigns/${campaignId}/posts?page=0&size=3&sort=DESC`);
}
