import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUsername,
  selectUserphoto,
  login,
  logOut,
} from "../features/user/userSlice";
import { auth, provider } from "../Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUsername);
  const userPhoto = useSelector(selectUserphoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
          })
        );
        navigate("/");
      }
    });
  }, []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        let user = res.user;
        dispatch(
          login({
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
          })
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signOut = () => {
    dispatch(
      logOut({
        name: null,
        photo: null,
        email: null,
      })
    );
    navigate("/login");
  };

  return (
    <Navbar>
      <Link to={"/"}>
        <Logo src="./images/logo.svg" alt="logo" />
      </Link>

      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
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
          <Accout>
            <button onClick={signOut}>Sign out</button>
            <div id="useInfo">
              <h4>{userName}</h4>
              <User src={userPhoto} />
            </div>
          </Accout>
        </>
      )}
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav`
  padding: 10px 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
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
  @media (max-width: 992px) {
    display: none;
  }
`;
const User = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 14px;
`;

const Login = styled.div`
  border: 1px solid #fff;
  padding: 0 20px;
  height: 35px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;
const Accout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  #useInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      flex-direction: column-reverse;
    }
  }
  button {
    border: none;
    outline: none;
    padding: 0 20px;
    margin-right: 20px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
    &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
      cursor: pointer;
    }
  }
`;
