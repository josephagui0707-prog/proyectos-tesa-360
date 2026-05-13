import React from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/hero_img.png";

const Hero = () => {

  // BOTON VER PROYECTOS
  const handleProjects = () => {
    const section = document.getElementById("portafolio");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // BOTON WHATSAPP
  const whatsappMessage =
    "Hola, estoy interesado en una cotización para un proyecto con PROYECTOS TESA 360.";

  const whatsappLink = `https://wa.me/51933186721?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      className="pt-5"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff, #f7f9fb)",
      }}
    >
        <div className="container overflow-hidden min-vh-100 d-flex align-items-center">
        <div className="row align-items-center g-5">

          {/* TEXTO */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span
              style={{
                color: "#044c77",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              INGENIERÍA • ARQUITECTURA • CONSULTORÍA
            </span>

            <h1 className="display-4 fw-bold mb-4 mt-3">
              Ingeniería y Arquitectura con Visión Integral 360°
            </h1>

            <p
              className="lead mb-4"
              style={{
                color: "#444",
                lineHeight: "1.8",
              }}
            >
              Transformamos conceptos complejos en estructuras
              sólidas y funcionales. Expertos en consultoría
              técnica, diseño arquitectónico y soluciones de
              ingeniería de alta precisión.
            </p>

            <div className="d-flex gap-3 flex-wrap">

              {/* VER PROYECTOS */}
              <button
                className="btn btn-outline-custom"
                onClick={handleProjects}
              >
                Ver Proyectos
              </button>

              {/* COTIZAR */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-custom"
              >
                Cotizar Ahora
              </a>

            </div>

          </motion.div>

          {/* IMAGEN */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "28px",
                height: "550px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
              }}
            >

              {/* IMAGEN */}
              <img
                src={heroImage}
                alt="Ingeniería y Arquitectura"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(4,76,119,0.75), rgba(4,76,119,0.15))",
                }}
              ></div>

              {/* TEXTO FLOTANTE */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
                  color: "white",
                }}
              >
                <h4 className="fw-bold">
                  PROYECTOS TESA 360
                </h4>

                <p className="mb-0">
                  Soluciones integrales en ingeniería y
                  arquitectura.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;