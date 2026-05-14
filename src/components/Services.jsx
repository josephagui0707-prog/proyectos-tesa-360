import React from "react";
import { motion } from "framer-motion";

import {
  BsBuilding,
  BsGear,
  BsClipboardCheck,
  BsDiagram3,
} from "react-icons/bs";

const services = [
  {
    icon: <BsBuilding />,
    title: "Diseño Arquitectónico",
    text: "Creación de espacios innovadores que equilibran estética, funcionalidad y normativa vigente.",
  },
  {
    icon: <BsGear />,
    title: "Ingeniería Estructural",
    text: "Cálculos precisos y soluciones técnicas de vanguardia para garantizar la seguridad de cada obra.",
  },
  {
    icon: <BsClipboardCheck />,
    title: "Consultoría Técnica",
    text: "Asesoría especializada en gestión de proyectos, licencias y cumplimiento del código 7110.",
  },
  {
    icon: <BsDiagram3 />,
    title: "Gestión de Proyectos 360",
    text: "Supervisión integral desde la concepción del plano hasta la entrega final de la obra.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-light">
      <div className="container overflow-hidden">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
        </motion.div>

        <div className="row g-3">
          {services.map((service, index) => (
            <motion.div
              className="col-md-6 col-lg-3"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h4 className="service-title">
                  {service.title}
                </h4>

                <p className="service-text">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;