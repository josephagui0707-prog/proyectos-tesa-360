import React from "react";
import { motion } from "framer-motion";
import proyecto1 from "../assets/proyectos/proyecto1.jpg";
import proyecto21 from "../assets/proyectos/proyecto21.jpg";
import proyecto3 from "../assets/proyectos/proyecto3.jpg";
import proyecto4 from "../assets/proyectos/proyecto4.jpg";
import proyecto5 from "../assets/proyectos/proyecto5.jpg";
import proyecto6 from "../assets/proyectos/proyecto6.jpg";

const projects = [
  {
    title: "Renovación Dpto San Miguel",
    image: proyecto1,
    category: "Remodelación",
  },
  {
    title: "Conservacion preventiva de estructuras termotecho Real Plaza Arequipa",
    image: proyecto21,
    category: "Mantenimiento",
  },
  {
    title: "Proyecto cocina Santa Anita",
    image: proyecto3,
    category: "Carpintería y Melamina",
  },
  {
    title: "Sala de entretenimiento San Juan de Miraflores",
    image: proyecto4,
    category: "Infraestructura",
  },
  {
    title: "Proyecto cocina San Miguel",
    image: proyecto5,
    category: "Carpintería y Melamina",
  },
  {
    title: "Levantamiento y replanteo Topográfico",
    image: proyecto6,
    category: "Topografía",
  },
];
const infiniteProjects = [...projects, ...projects, ...projects];

const Projects = () => {
  return (
    <section id="portafolio" className="section-light">

      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h2 className="section-title">
            Proyectos Destacados
          </h2>

          <p className="project-subtitle">
            Algunas de las obras desarrolladas por nuestro equipo.
          </p>

        </motion.div>

      </div>

      <div className="projects-slider">

        <div className="projects-track">

          {infiniteProjects.map((project, index) => (

            <div
              className="project-showcase"
              key={index}
            >

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-overlay">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;