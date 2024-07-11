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
        <p><h4><b>Forms</b></h4></p>
        <TextBox>
          <Text>
            <ul>
              <li>Be sure to contact HR to ensure all forms for remote work are filled out.</li>
              <li>Find necessary forms on your HR Portal</li>
            </ul>
          </Text>
        </TextBox>
      </FirstGridItem>
      <SecondGridItem>
        <p><h4><b>WebTA</b></h4></p>
        <TextBox>
          <Text> 
            <ul>
              <li>Requires LinkPass or Temporary LinkPass</li>
              <li>Fill out timesheets by the end of each pay period.</li>
              <li>Use WebTA to submit leave requests and sick leave.</li>
            </ul>
          </Text>
        </TextBox>
      </SecondGridItem>
      <ThirdGridItem>
        <p><h4><b>AgLearn</b></h4></p>
        <TextBox>
          <Text> 
            <ul>
              <li>Find mandatory and optional trainings here.</li>
              <li>Required trainings can be found at the bottom of the page.</li>
              <li>Search for possible useful tutorials through the search bar at the top of the screen.</li>
            </ul>
          </Text>
        </TextBox>
      </ThirdGridItem>
      <FourthGridItem>
        <p><h4><b>PIV Card</b></h4></p>
        <TextBox>
          <Text> 
            <ul>
            <li>You will receive an email with instructions to make an appointment at your local office to get your picture taken and later eceive your PIV card. This process may take time, so please be sure to renew your LinkPass exemption until you have your PIV Card.</li>
            <li>Several funcitons will be inaccessible while in the process of getting your PIV card. Please coordinate with your team during this process.</li>
            <li>Contact the CEC help desk through the Help icon on your Desktop for any issues or questions regarding your PIV Card.</li>
            </ul>
          </Text>
        </TextBox>
      </FourthGridItem>
      
    </MainGridContainer>
  );
}

