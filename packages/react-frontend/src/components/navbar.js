import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "wouter";
import { NavLink, NavBtn, NavBtnLink } from "./NavbarElements.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} href="/" style={{ color: '#ffffff !important'}}>
          USDA Newbie App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        <Nav className="me-auto">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/">Home</NavLink>
          <NavBtn> 
            <NavBtnLink href="/about">
              Sign Up
            </NavBtnLink>
          </NavBtn>
        </Nav>
      </Container>
    </Navbar>
  );
}
