// 페이지 상단 제목을 보여주기 위한 header 컴포넌트
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Header = ({ icon, menuTitle }) => {
  const isBtnBack = icon && icon.endsWith(".svg");
  const isLogo = icon && icon.endsWith(".png");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const renderIcon = () => {
    if (isBtnBack) {
      return (
        <div>
          <img onClick={handleGoBack} src={icon} alt="Back" />
        </div>
      );
    } else if (isLogo) {
      return (
        <div>
          <img src={icon} alt="logo" width={"35"} height={"37"} />
        </div>
      );
    }

    return null;
  };

  return (
    <HeaderDiv>
      {renderIcon()}
      <Title>{menuTitle}</Title>
    </HeaderDiv>
  );
};

export default Header;
