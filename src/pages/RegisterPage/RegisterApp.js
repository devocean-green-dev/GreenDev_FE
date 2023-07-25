// 캠페인 등록 페이지
import Header from "../../components/Header";
import RegisterForm from "./RegisterForm";
import { HeaderContainer } from "../../components/HeaderContainer";

const RegisterApp = () => {
  return (
    <div>
      <HeaderContainer>
        <Header menuTitle="캠페인 등록" />
      </HeaderContainer>
      <RegisterForm />
    </div>
  );
};

export default RegisterApp;
