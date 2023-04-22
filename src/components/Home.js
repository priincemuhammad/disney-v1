import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "./HomeSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import { getDocs } from "firebase/firestore";
import colRef from "../Firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // get data collections
    getDocs(colRef)
      .then((snapshot) => {
        let allMovies = snapshot.docs.map((docs) => {
          return { id: docs.id, ...docs.data() };
        });
        dispatch(setMovies(allMovies));
      })
      .catch((err) => {
        console.log(err.message);
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
