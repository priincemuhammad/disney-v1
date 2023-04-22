import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Navbar>
      <Logo src="./images/logo.svg" alt="logo" />
      <Navmenu>
        <a href="#">
          <img src="./images/home-icon.svg" alt="icon" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="./images/search-icon.svg" alt="icon" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="./images/watchlist-icon.svg" alt="icon" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="./images/original-icon.svg" alt="icon" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="./images/movie-icon.svg" alt="icon" />
          <span>MOVIES</span>
        </a>
        <a href="#">
          <img src="./images/series-icon.svg" alt="icon" />
          <span>SERIES</span>
        </a>
      </Navmenu>
      <User src="./images/profile.jpg" />
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav`
  padding: 10px 37px;
  display: flex;
  background: var(--header-bg);
`;
const Logo = styled.img`
  width: 100px;
`;
const Navmenu = styled.nav`
  display: flex;
  flex: 1;
  margin-left: 30px;
  a {
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;
      &:after {
        content: "";
        height: 2px;
        position: absolute;
        background: #fff;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms var(--transitions);
      }
    }
    img {
      width: 20px;
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const User = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
