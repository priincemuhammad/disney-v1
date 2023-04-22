import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "./HomeSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../Firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // get data collections
    db.collection("movies").onSnapshot((snapshot) => {
      let getMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(getMovies));
    });
  }, [dispatch]);

  return (
    <Container>
      <Slider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  &:before {
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
