import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand pl-6 ejemplo">
        <a className="navbar-item pr-4" href="https://twitter.com/albertoJALJ" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-twitter fa-lg" />
        </a>
        <a
          className="navbar-item pr-4"
          href="https://www.linkedin.com/in/jose-alberto-lopez-jimenez-721159153/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in fa-lg" />
        </a>
        <a className="navbar-item pr-4" href="https://github.com/AlbertoJALJ" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github fa-lg" />
        </a>
        <a className="navbar-item" href="https://gitlab.com/splash.jalj" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-gitlab fa-lg" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu pr-6">
        <div className="navbar-end">
          <Link to="#resumen" className="navbar-item is-active">
            Resumen
          </Link>
          <Link to="#habilidades" className="navbar-item">
            Habilidades
          </Link>
          <Link to="#proyectos" className="navbar-item">
            Proyectos
          </Link>
          <Link to="#publicaciones" className="navbar-item">
            Publicaciones
          </Link>
          <Link to="#contacto" className="navbar-item">
            Contacto
          </Link>
          <Link to="#contratame" className="navbar-item">
            Contrátame
          </Link>
        </div>
      </div>
    </nav>
  );
}
