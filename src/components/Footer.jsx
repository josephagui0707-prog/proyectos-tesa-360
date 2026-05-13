import React from "react";

import {
  BsWhatsapp,
  BsEnvelopeFill,
  BsGeoAltFill,
  BsArrowUpRight,
} from "react-icons/bs";

import logo from "../assets/proyectos_tesa_logo.png";

const Footer = () => {

  const whatsappMessage =
    "Hola, estoy interesado en los servicios de PROYECTOS TESA 360.";

  const whatsappLink = `https://wa.me/51944251149?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="footer-section">

      <div className="container">

        {/* TOP */}
        <div className="row gy-5">

          {/* LOGO + INFO */}
          <div className="col-lg-4">

            <img
              src={logo}
              alt="TESA 360"
              className="footer-logo mb-4"
            />

            <p className="footer-description">
              Construyendo el futuro, calculando cada detalle.
              Soluciones integrales en ingeniería,
              arquitectura y consultoría técnica.
            </p>

          </div>

          {/* LINKS */}
          <div className="col-lg-4">

            <h5 className="footer-title">
              Navegación
            </h5>

            <ul className="footer-links">

              <li>
                <a href="#inicio">
                  Inicio
                  <BsArrowUpRight />
                </a>
              </li>

              <li>
                <a href="#servicios">
                  Servicios
                  <BsArrowUpRight />
                </a>
              </li>

              <li>
                <a href="#nosotros">
                  Nosotros
                  <BsArrowUpRight />
                </a>
              </li>

              <li>
                <a href="#portafolio">
                  Portafolio
                  <BsArrowUpRight />
                </a>
              </li>

            </ul>

          </div>

          {/* CONTACTO */}
          <div className="col-lg-4">

            <h5 className="footer-title">
              Contacto
            </h5>

            <div className="footer-contact">

              {/* EMAIL */}
              <a
                href="mailto:contacto@tesa360.com"
                className="footer-contact-item"
              >
                <BsEnvelopeFill />
                contacto@tesa360.com
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <BsWhatsapp />
                +51 944 251 149
              </a>

              {/* UBICACION */}
              <div className="footer-contact-item">
                <BsGeoAltFill />
                Lima, Perú
              </div>

            </div>

          </div>

        </div>

        {/* LINEA */}
        <div className="footer-divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 PROYECTOS TESA 360.
            Todos los derechos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;