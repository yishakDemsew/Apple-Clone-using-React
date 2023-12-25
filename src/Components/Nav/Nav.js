import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";

function Navigation() {
    return (
        <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
            <div className="container">
                <Navbar
                    className="w-100"
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-justified w-100 nav-fill">
                            <Nav.Link as={Link} className="nav-link" to="/mac">
                                Mac
                            </Nav.Link>
                            <Nav.Link as={Link} to="/iphone">
                                Iphone
                            </Nav.Link>
                            <Nav.Link as={Link} to="/ipad">
                                Ipad
                            </Nav.Link>
                            <Nav.Link as={Link} to="/watch">
                                Watch
                            </Nav.Link>
                            <Nav.Link as={Link} to="/tv">
                                Tv
                            </Nav.Link>
                            <Nav.Link as={Link} to="/music">
                                Music
                            </Nav.Link>
                            <Nav.Link as={Link} to="/support">
                                Support
                            </Nav.Link>
                            <Nav.Link as={Link} to="/search">
                                <img src={search} alt="" />
                            </Nav.Link>
                            <Nav.Link as={Link} to="/cart">
                                <img src={cart} alt="" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Navigation;
