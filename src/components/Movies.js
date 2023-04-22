import React from "react";
import styled from "styled-components";
import { selectMovie } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movies = () => {
  const moviesData = useSelector(selectMovie);
  return (
    <Container>
      <h3>Recomened for you</h3>
      <Contents>
        {moviesData &&
          moviesData.map((data) => {
            return (
              <Link to={`/details/${data.id}`} key={data.id}>
                <Wrapper>
                  <View src={data.cardImg} alt="img" />
                </Wrapper>
              </Link>
            );
          })}
      </Contents>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  h3 {
    color: #fff;
  }
`;
const Contents = styled.div`
  padding: 20px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 4px solid transparent;
  transition: all 250ms var(--transitions);
  &:hover {
    transform: scale(1.05);
    border-color: var(--border-one);
    cursor: pointer;
  }
`;
const View = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
