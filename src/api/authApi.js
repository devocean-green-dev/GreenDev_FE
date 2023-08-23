const BASE_URL = "https://greendev-api.dev-lr.com";
// const REDIRECT_URI = encodeURIComponent("http://localhost:3000");

export const getKakaoLoginUrl = () => {
  // return `${BASE_URL}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}&response_type=code`;
  return `${BASE_URL}/oauth2/authorization/kakao?redirect_uri=https://greendev.dev-lr.com`;
};

export const getGithubLoginUrl = () => {
  // return `${BASE_URL}/oauth2/authorization/github?redirect_uri=${REDIRECT_URI}&response_type=code`;
  return `${BASE_URL}/oauth2/authorization/github?redirect_uri=https://greendev.dev-lr.com`;
};

export const getNaverLoginUrl = () => {
  // return `${BASE_URL}/oauth2/authorization/naver?redirect_uri=${REDIRECT_URI}&response_type=code`;
  return `${BASE_URL}/oauth2/authorization/naver?redirect_uri=https://greendev.dev-lr.com`;
};

export const getGoogleLoginUrl = () => {
  // return `${BASE_URL}/oauth2/authorization/google?redirect_uri=${REDIRECT_URI}&response_type=code`;
  return `${BASE_URL}/oauth2/authorization/google?redirect_uri=https://greendev.dev-lr.com`;
};
