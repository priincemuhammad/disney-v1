import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrapper>
        <View src="./images/viewers-marvel.png" />
      </Wrapper>
      <Wrapper>
        <View src="./images/viewers-pixar.png" />
      </Wrapper>
      <Wrapper>
        <View src="./images/viewers-national.png" />
      </Wrapper>
      <Wrapper>
        <View src="./images/viewers-starwars.png" />
      </Wrapper>
      <Wrapper>
        <View src="./images/viewers-disney.png" />
      </Wrapper>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin: 50px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrapper = styled.div`
  border-radius: 10px;
  border: 4px solid var(--border-two);
  box-shadow: var(--shadow);
  transition-duration: 300ms;
  transition: all 250ms var(--transitions);
  cursor: pointer;
  &:hover {
    border-color: var(--border-one);
    box-shadow: var(--shadow-hover);
  }
`;
const View = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
