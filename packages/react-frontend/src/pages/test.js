import * as React from "react";
import Navigation from "../components/navbar.js";
import styled from "styled-components";
//import "../styles/teststyle.css";
import { Link } from "wouter";

const MainGridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px; /* Adjust gap between items */
  margin: 20px; /* Margin around the grid */
  width: calc(100% - 40px); /* Full width minus margin */
  position: absolute;
  top: 120px;
`;

const NavigationWrapper = styled.div`
  grid-row: 1 / span 1; /* Navigation in the first row */
  grid-column: 1 / span 2; /* Spanning across two columns */
`;

const LeftGridItem = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  grid-column: 1;
  grid-row: 2;
`;

const RightGridItem = styled.div`
  padding: 20px;
  height: 50vh;
  background-color: #e0e0e0;
  grid-column: 2;
  grid-row: 2;
`;

const BottomGridItem = styled.div`
  padding: 20px;
  background-color: #c0c0c0;
  grid-column: 1 / span 2; /* Spanning across two columns */
  grid-row: 3;
`;

const TextBox = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default function Test() {
  return (
    <MainGridContainer>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <LeftGridItem>
        <TextBox>
          <Text>Left Container Text Box</Text>
        </TextBox>
        <Link href="/another-page">
          <Button>Go to Another Page</Button>
        </Link>
      </LeftGridItem>
      <RightGridItem>
        <TextBox>
          <Text>Right Container Text Box</Text>
        </TextBox>
        <Link href="/another-page">
          <Button>Go to Another Page</Button>
        </Link>
      </RightGridItem>
      <BottomGridItem>
        <TextBox>
          <Text>Bottom Container Text Box</Text>
        </TextBox>
        <Link href="/another-page">
          <Button>Go to Another Page</Button>
        </Link>
      </BottomGridItem>
    </MainGridContainer>
  );
}
