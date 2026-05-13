import React from "react";
import { motion } from "framer-motion";

import {
  BsCheckCircleFill,
  BsLightbulbFill,
  BsShieldFillCheck,
} from "react-icons/bs";

const values = [
  {
    icon: <BsCheckCircleFill />,
    title: "Precisión",
    text: "Cada cálculo y detalle técnico se desarrolla con altos estándares de exactitud.",
    bg: "linear-gradient(135deg, #044c77, #0b5d8f)",
  },

  {
    icon: <BsLightbulbFill />,
    title: "Innovación",
    text: "Integramos soluciones modernas para optimizar diseño, tiempo y recursos.",
    bg: "linear-gradient(135deg, #4a7c99, #5b90af)",
  },

  {
    icon: <BsShieldFillCheck />,
    title: "Integridad",
    text: "Trabajamos con transparencia, responsabilidad y compromiso profesional.",
    bg: "linear-gradient(135deg, #033a5c, #044c77)",
  },
];

const About = () => {
  return (
    <section
      id="nosotros"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f7f9fb)",
      }}
    >
      <div className="container overflow-hidden">
        <div className="row align-items-center g-5">

          {/* TEXTO */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              style={{
                color: "#044c77",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              NOSOTROS
            </span>

            <h2 className="section-title mt-2">
              ¿Por qué TESA 360?
            </h2>

            <p
              className="mb-4"
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.9",
                color: "#444",
              }}
            >
              En PROYECTOS TESA 360, entendemos que un gran
              proyecto requiere una mirada total. Nuestro enfoque
              360° integra la creatividad de la arquitectura con
              el rigor de la ingeniería.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.9",
                color: "#444",
              }}
            >
              Nos dedicamos a la actividad 7110 con un compromiso
              inquebrantable por la excelencia técnica y la
              optimización estratégica de recursos en cada etapa
              del proyecto.
            </p>
          </motion.div>

          {/* TARJETAS */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="row g-4">

              {values.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div
                    className="about-card h-100 text-center"
                    style={{
                      background: item.bg,
                    }}
                  >
                    <div className="about-icon">
                      {item.icon}
                    </div>

                    <h5 className="fw-bold mb-3">
                      {item.title}
                    </h5>

                    <p className="mb-0 small">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;