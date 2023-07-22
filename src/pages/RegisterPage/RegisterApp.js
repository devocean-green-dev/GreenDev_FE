// 캠페인 등록 페이지
import Header from "../../components/Header";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";

const RegisterApp = () => {
  const HeaderContainer = styled.div`
    width: 100%;
    max-width: 375px;
    height: 3rem;
    background: white;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
  `;
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
