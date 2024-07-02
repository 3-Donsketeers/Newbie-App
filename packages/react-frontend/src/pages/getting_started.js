import * as React from "react";
import Navigation from "../components/navbar.js";
import styled from "styled-components";
import "../styles/styles.css";
//import "../styles/teststyle.css";
import { Link } from "wouter";

const MainGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1 fr;
  gap: 20px; /* Adjust gap between items */
  margin: 20px; /* Margin around the grid */
  width: calc(100% - 40px); /* Full width minus margin */
  position: absolute;
  top: 120px;
`;

const NavigationWrapper = styled.div`
  grid-row: 1 / span 1; /* Navigation in the first row */
  grid-column: 1 / span 3; /* Spanning across two columns */
`;

const FirstGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 1;
  height: 70vh;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const SecondGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 2;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const ThirdGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 3;
  border-radius: 17px;
  outline: 1px solid #000;
`;

const FourthGridItem = styled.div`
  padding: 20px;
  background-color: #fff;
  grid-column: 4;
  border-radius: 17px;
  outline: 1px solid #000;
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

const Text = styled.p`
  margin: 0;
  font-size: 16px;
`;


export default function Started() {
  return (
    <MainGridContainer className="public-sans">
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <FirstGridItem>
        <p><h4><b>Section 1</b></h4></p>
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
      </FirstGridItem>
      <SecondGridItem>
        <p><h4><b>Section 2</b></h4></p>
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
      </SecondGridItem>
      <ThirdGridItem>
      <p><h4><b>Section 3</b></h4></p>
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
      </ThirdGridItem>
      <FourthGridItem>
      <p><h4><b>Section 4</b></h4></p>
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
      </FourthGridItem>
    </MainGridContainer>
  );
}

