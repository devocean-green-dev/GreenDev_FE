import {
  getKakaoLoginUrl,
  getGithubLoginUrl,
  getGoogleLoginUrl,
  getNaverLoginUrl,
} from "../../api/authApi";
import "../../styles/LoginPage/LoginApp.scss";

const LoginApp = () => {
  const goKakaoLogin = () => {
    window.location.href = getKakaoLoginUrl();
  };

  const goGithubLogin = () => {
    window.location.href = getGithubLoginUrl();
  };

  const goGoogleLogin = () => {
    window.location.href = getGoogleLoginUrl();
  };

  const goNaverLogin = () => {
    window.location.href = getNaverLoginUrl();
  };

  return (
    <div className="login-container">
      <div className="login-top">
        <p>Login</p>
        <img src="/icon/user.svg" alt="login" />
      </div>
      <div className="login-logo">
        <h1>GreenDev</h1>
        <img src="/icon/image3.png" alt="logo" />
      </div>
      <div className="login-account">
        <div className="github-login" onClick={goGithubLogin}>
          <img src="/icon/github.svg" alt="github" />
          <p>Login with Github</p>
        </div>
        <div className="google-login" onClick={goGoogleLogin}>
          <img src="/icon/google.svg" alt="google" />
          <p>Login with Google</p>
        </div>
        <div className="kakao-login" onClick={goKakaoLogin}>
          <img src="/icon/kakao.svg" alt="kakao" />
          <p>Login with Kakao</p>
        </div>
        <div className="naver-login" onClick={goNaverLogin}>
          <img src="/icon/naver.png" alt="naver" />
          <p>Login with Naver</p>
        </div>
      </div>
    </div>
  );
};

export default LoginApp;
