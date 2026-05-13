import React from "react";
import { motion } from "framer-motion";

const projects = [
  "Complejo Industrial Alfa",
  "Edificio Residencial Horizonte",
  "Centro de Consultoría Técnica",
];

const Projects = () => {
  return (
    <section id="portafolio" className="section-light">
      <div className="container overflow-hidden">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-title">
            Proyectos Destacados
          </h2>
        </motion.div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              className="col-md-4"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="project-card">
                <div className="project-image"></div>

                <div className="p-4">
                  <h4>{project}</h4>

                  <p>
                    Proyecto desarrollado bajo estándares de
                    ingeniería y arquitectura moderna.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;