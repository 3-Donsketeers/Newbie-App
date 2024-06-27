import * as React from "react";
import Navigation from "../components/navbar.js";
import styled from "styled-components";
import "../styles/styles.css";
//import "../styles/teststyle.css";
import { Link } from "wouter";

const MainGridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px; /* Adjust gap between items */
  margin: 40px; /* Margin around the grid */
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
  background-color: #fff;
  grid-column: 1;
  grid-row: 2;
  height: 70vh;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const RightGridItem = styled.div`
  padding: 30px;
  height: 70vh;
  background-color: #fff;
  grid-column: 2;
  grid-row: 2;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const BottomGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 1 / span 2; /* Spanning across two columns */
  grid-row: 3;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const TextBox = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  outline: 1px solid #A0A0A0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Button = styled.nav`
  display: flex;
  align-items: center;
  height: 85px;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BtnLink = styled(Link)`
  border-radius: 4px;
  background: #003082;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0041b0;
    color: #fd;
  }
`;

export default function Test() {
  return (
    <MainGridContainer className="public-sans">
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <LeftGridItem>
        <TextBox>
          <Text>
            <p><h4><b>FAQ</b></h4></p>
            <p>How do I set up my PIV Card?</p>
            <p>Where can I find my mandatory training courses?</p>
            <p>How do I fill out my timesheets?</p>
            <p>Where can I find my SF-50?</p>
            <p>etc.</p>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/about">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </LeftGridItem>
      <RightGridItem>
        <TextBox>
          <Text>
            <p><h4><b>USDA Agencies &amp; Mission Areas</b></h4></p>
            <p>OCIO - blahblahblahbl</p> 
            <p>DISC -blahblahblahbl</p>
            <p>CEC - blahblahblahbl</p>
            <p>FSIS - blahblahblahbl</p>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/about">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </RightGridItem>
      <BottomGridItem>
        <TextBox>
          <Text>
            <p><h4><b>Steps for Getting Started</b></h4></p>
            <p>Fill out this Form X and do Y</p>
            <p>Talk to John Smith to get X</p>
            <p>blah blah blah more stuff</p>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/about">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </BottomGridItem>
    </MainGridContainer>
  );
}
