import * as React from "react";
import Navigation from "../components/navbar.js";
import styled from "styled-components";
import "../styles/styles.css";
import { Link } from "wouter";


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

export default function Landing() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <div className="centered-wrapper">
            <h1>Welcome the USDA Newbie App</h1>
        </div>
        <div className="centered-wrapper">
            <h4>Here you can find all the information you need to get started at the USDA - all in one convenient location.</h4>
            <Button> 
                <BtnLink href="/home">
                <b>Get Started</b>
                </BtnLink>
            </Button>
        </div>
      </div>
    </>
  );
}
