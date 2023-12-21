import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import images from '../pages/images';
import Projects from '../pages/Projects';
import Spotify from '../pages/spotify';
import Experiences from '../pages/Experiences';
import Contact from '../pages/Contact';
import '../styles/Navbar.css'

function Navbar() {
    return (

        <div>
            <div class="logo" href="index.html">AZMILHANIF</div>
            <nav>
                <ul class="nav__links">

                    <Link to="/Experiences" exact component={Experiences} />
                    <Link to="/images" exact component={images} />
                    <Link to="/Projects" exact component={Projects} />
                    <Link to="/Spotify" exact component={Spotify} />
                    <Link to="/" exact component={Home} />
                    <Link to="/Contact" exact component={Contact} />

                </ul>
            </nav>
            <button onclick="darkModeToggle()" id="toggle-container">Toggle Dark Mode</button>
        </div>

    )
}

export default Navbar