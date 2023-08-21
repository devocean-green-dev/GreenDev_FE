// 하단 메뉴바
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "../styles/Navbar/Navbar.scss";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const handleMenuClick = (iconName) => {
    setSelectedMenu(iconName);
  };

  return (
    <div className="navbar">
      <Outlet />
      <div className="navbar-footer">
        <StyledLink to="/" onClick={() => handleMenuClick("home")}>
          <div
            className={`menu-item ${selectedMenu === "home" ? "active" : ""}`}
          >
            <img
              src={
                "/icon/" +
                (selectedMenu === "home"
                  ? "ic_baseline-home.svg"
                  : "ic_outline-home.svg")
              }
              alt="home"
            />
            {selectedMenu === "home" && <span>홈</span>}
          </div>
        </StyledLink>
        <StyledLink to="/register" onClick={() => handleMenuClick("register")}>
          <div
            className={`menu-item ${
              selectedMenu === "register" ? "active" : ""
            }`}
          >
            <img
              src={
                "/icon/" +
                (selectedMenu === "register"
                  ? "ic_baseline-plant.svg"
                  : "ic_outline-plant.svg")
              }
              alt="캠페인 등록"
            />
            {selectedMenu === "register" && <span>캠페인 등록</span>}
          </div>
        </StyledLink>
        <StyledLink to="/search" onClick={() => handleMenuClick("search")}>
          <div
            className={`menu-item ${selectedMenu === "search" ? "active" : ""}`}
          >
            <img
              src={
                "/icon/" +
                (selectedMenu === "search"
                  ? "ic_baseline-search.svg"
                  : "ic_outline-search.svg")
              }
              alt="캠페인 광장"
            />
            {selectedMenu === "search" && <span>캠페인 광장</span>}
          </div>
        </StyledLink>
        <StyledLink to="/profile" onClick={() => handleMenuClick("profile")}>
          <div
            className={`menu-item ${
              selectedMenu === "profile" ? "active" : ""
            }`}
          >
            <img
              src={
                "/icon/" +
                (selectedMenu === "profile"
                  ? "ic_baseline-user.svg"
                  : "ic_outline-user.svg")
              }
              alt="프로필"
            />
            {selectedMenu === "profile" && <span>프로필</span>}
          </div>
        </StyledLink>
      </div>
    </div>
  );
};

export default NavBar;
