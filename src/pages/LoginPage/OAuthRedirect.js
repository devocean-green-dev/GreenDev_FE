import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../data/User";

const OAuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setUserInfo = useSetRecoilState(userInfoState);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userAccessToken = searchParams.get("accessToken");

    if (userAccessToken) {
      setAccessToken(userAccessToken);
      localStorage.setItem("accessToken", userAccessToken);

      axios
        .get("https://greendev-api.dev-lr.com/api/v1/members/me", {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
          },
        })
        .then((response) => {
          setUserInfo(response.data);
          navigate("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location.search, setAccessToken, navigate]);

  return <div>로그인 중...</div>;
};

export default OAuthRedirect;
