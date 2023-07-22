// 페이지 상단 제목을 보여주기 위한 header 컴포넌트
import styled from "styled-components";

const Header = ({ menuTitle }) => {
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
  return (
    <HeaderDiv>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42157 19.7879C9.06532 20.0996 8.5238 20.0635 8.21208 19.7073L0.212077 10.5644C-0.0706912 10.2413 -0.0706912 9.75873 0.212077 9.43557L8.21208 0.292724C8.52381 -0.0635367 9.06532 -0.099637 9.42158 0.212091C9.77784 0.523818 9.81394 1.06533 9.50221 1.42159L2.74609 9.14286L19.1429 9.14286C19.6162 9.14286 20 9.52662 20 10C20 10.4734 19.6162 10.8571 19.1429 10.8571L2.74609 10.8571L9.50221 18.5784C9.81394 18.9347 9.77783 19.4762 9.42157 19.7879Z"
            fill="#858585"
          />
        </svg>
      </div>
      <Title>{menuTitle}</Title>
    </HeaderDiv>
  );
};

export default Header;
