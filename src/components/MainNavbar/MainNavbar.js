import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyAccount from "../MyAccount/MyAccount";
import Notifications from "../Notifications/Notifications";
import Search from "../Search/Search";
import Svg from '../Svg/Svg';
import './MainNavbar.css';
import { HiBars3 } from "react-icons/hi2";
import Avatar from "../../assets/user1.png";

function MainNavbar() {
    const [navbarBackground, setNavbarBackground] = useState('gradient');
    const [sidebarClass, setSidebarClass] = useState('');

    useEffect(() => {
        window.addEventListener("scroll", handleChangeBackground)
    })

    // controla el background-color del navbar
    const handleChangeBackground = () => {
        //console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbarBackground('dark')
        } else {
            setNavbarBackground('gradient')
        }
    }

    // controla el estado del sidebar (mobile)
    const handleToggleSidebar = () => {
        sidebarClass === '' ? setSidebarClass('sidebar-expanded') : setSidebarClass('');
    }

    return (
        <Navbar bg={navbarBackground} expand="lg" variant="dark" fixed="top" className={sidebarClass}>
            <Container fluid>
                <button className="navbar-toggle-button" onClick={handleToggleSidebar}><HiBars3 /></button>
                <Navbar.Brand href="/"><Svg name="logo" color="#e50914" width={92} viewBox="0 0 110 30" /></Navbar.Brand>

                <div className="nav-collapse" id="basic-navbar-nav">
                    <ul className="user-mobile-menu">
                        <li><a href="#" className="nav-link"><img src={Avatar} /> John Doe</a></li>
                        <li><a href="#" className="nav-link">Cuenta</a></li>
                        <li><a href="#" className="nav-link">Centro de ayuda</a></li>
                        <li><a href="#" className="nav-link">Cerrar sesión en Netflix</a></li>
                    </ul>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/">Series</Nav.Link>
                        <Nav.Link href="/">Películas</Nav.Link>
                        <Nav.Link href="/">Novedades populares</Nav.Link>
                        <Nav.Link href="/">Mi lista</Nav.Link>
                        <Nav.Link href="/">Explora por idiomas</Nav.Link>
                    </Nav>
                </div>
                <ul className="nav-rt ms-auto">
                    <li><Search /></li>
                    <li className="d-mobile-hidden"><Notifications /></li>
                    <li className="d-mobile-hidden"><MyAccount /></li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;