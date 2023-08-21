import { useNavigate } from "react-router-dom";
import "../../styles/LoginPage/LoginApp.scss";

const LoginApp = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
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
        <div className="github-login" onClick={goHome}>
          <img src="/icon/github.svg" alt="github" />
          <p>Login with Github</p>
        </div>
        <div className="google-login" onClick={goHome}>
          <img src="/icon/google.svg" alt="google" />
          <p>Login with Google</p>
        </div>
        <div className="kakao-login" onClick={goHome}>
          <img src="/icon/kakao.svg" alt="kakao" />
          <p>Login with Kakao</p>
        </div>
        <div className="naver-login" onClick={goHome}>
          <img src="/icon/naver.png" alt="naver" />
          <p>Login with Naver</p>
        </div>
      </div>
    </div>
  );
};

export default LoginApp;
