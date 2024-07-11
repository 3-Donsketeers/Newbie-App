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
                <li>How do I set up my PIV Card?</li>
                <ul>
                  <li>You will receive an email with instructions to make an appointment at your local office to get your picture taken and later eceive your PIV card. This process may take time, so please be sure to renew your LinkPass exemption until you have your PIV Card.</li>
                </ul>

                <li>Where can I find my mandatory training courses?</li>
                <ul>
                  <li>Mandatory training courses may be found in AgLearn at the bottom of the page.</li>
                </ul>

                <li>How do I fill out my timesheets?</li>
                  <ul>
                    <li> log into WebTA through your preferred method and click the Timesheets button.</li>
                  </ul>

                <li>Where can I find my SF-50?</li>
                  <ul>
                    <li>Your SF-50 can be found in your HR Portal.</li>
                  </ul>

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
              <li>Agricultural Research Service (ARS)</li>
              <ul><li>ARS is USDA's principal in-house research agency. ARS leads America towards a better future through agricultural research and information...</li></ul>  

              

                  
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
            <p><b>Forms</b></p>
            <ul>
              <li>Be sure to contact HR to ensure all forms for remote work are filled out.</li>
              <li>Find necessary forms on your HR Portal</li>
            </ul>
          </TextBlock>
          <TextBlock>
            <p><b>WebTA</b></p>
            <ul>
              <li>Requires LinkPass or Temporary LinkPass</li>
              <li>Fill out timesheets by the end of each pay period.</li>
              <li>Use WebTA to submit leave requests and sick leave.</li>
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
        <p><h4><b>Quick Access</b></h4></p>
        <TextBox>
          <Text> 
            <ul>
                  <li><a href="https://www.usda.gov/">USDA Site</a></li>
                  <li><a href="https://make.gov.powerapps.us/">Microsoft PowerApps</a></li>
                  
              </ul>
          </Text>
        </TextBox>
        <Button> 
            <BtnLink href="/quick">
              <b>Show More</b>
            </BtnLink>
        </Button>
      </BottomRightGridItem>
    </MainGridContainer>
  );
}
