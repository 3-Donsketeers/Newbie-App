import * as React from "react";
import Navigation from "../components/navbar.js";
import styled from "styled-components";
import "../styles/styles.css";
import { Link } from "wouter";

const MainGridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
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
  background-color: #fff;
  grid-column: 1 / span 2;
  grid-row: 2;
  height: 70vh;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const RightGridItem = styled.div`
  padding: 20px;
  height: 70vh;
  background-color: #fff;
  grid-column: 3;
  grid-row: 2;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const BottomGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 1;
  grid-row: 3;
  border-radius: 17px;
  outline: 1px solid #000;
  margin-bottom: 40px; /* Add margin-bottom for spacing */
`;

const BottomRightGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 2 / span 2; /* Spanning across two columns */
  grid-row: 3;
  border-radius: 17px;
  outline: 1px solid #000;
  margin-bottom: 40px; /* Add margin-bottom for spacing */
`;

const TextBox = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between; /* Adjust alignment as needed */
  border-radius: 10px; /* Beveled edges */
  outline: 1px solid #a1a1a1; /* Outline */
`;

const TextBlock = styled.p`
  margin: 0 5px; /* Adjust margin between text blocks as needed */
  font-size: 16px;
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

export default function Home() {
  return (
    <MainGridContainer className="public-sans">
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <LeftGridItem>
        <p><h4><b>FAQ</b></h4></p>
        <TextBox>
          <Text>
              <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
              </ul>
            <p></p>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/faq">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </LeftGridItem>
      <RightGridItem>
        <p><h4><b>USDA Agencies &amp; Mission Areas</b></h4></p>
        <TextBox>
          <Text> 
            <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  
              </ul>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/agencies">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </RightGridItem>
      <BottomGridItem>
      <p><h4><b>Getting Started</b></h4></p>
        <TextBox>
          <TextBlock>
            <p><b>Forms etc.</b></p>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <p><b>One Topic</b></p>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
            
          </TextBlock>
          <TextBlock>
            <p><b>Another Topic</b></p>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <p><b>Yet Another Topic</b></p>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </TextBlock>
        </TextBox>
        <Button> 
            <BtnLink href="/getting_started">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </BottomGridItem>
      <BottomRightGridItem>
        <p><h4><b>USDA Agencies &amp; Mission Areas</b></h4></p>
        <TextBox>
          <Text> 
            <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                  
              </ul>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/agencies">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </BottomRightGridItem>
    </MainGridContainer>
  );
}
