import React, { useState } from "react";

import logo from "../assets/proyectos_tesa_logo.png";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage =
    "Hola, estoy interesado en los servicios de PROYECTOS TESA 360. Quisiera más información.";

  const whatsappLink = `https://wa.me/51944251149?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // CERRAR MENU MOBILE
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-custom"
    >
      <div className="container">

        {/* LOGO */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#inicio"
        >
          <img
            src={logo}
            alt="PROYECTOS TESA 360"
            className="navbar-logo"
          />
        </a>

        {/* BOTON MOBILE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 nav-mobile-custom">

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#inicio"
                onClick={closeMenu}
              >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#servicios"
                onClick={closeMenu}
              >
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#nosotros"
                onClick={closeMenu}
              >
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#portafolio"
                onClick={closeMenu}
              >
                Portafolio
              </a>
            </li>

            {/* BOTON */}
            <li className="nav-item">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-custom nav-contact-btn"
              >
                Contacto Directo
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;