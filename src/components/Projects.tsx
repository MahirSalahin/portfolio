import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cuet Anonymous Voting System (CAVS)",
    description: "Designed and built a web application that facilitates anonymous voting for CUETians. Built with FastAPI, PostgreSQL, Next.js, and TailwindCSS.",
    image: "/assets/cavs.png",
    sourceLink: "https://github.com/MahirSalahin/cavs",
  },
  {
    title: "Saleor E-commerce Backend",
    description: "Developed and integrated the product-review API to the saleor-backend using Django, GraphQL, and PostgreSQL.",
    image: "/assets/saleor.png",
    sourceLink: "https://github.com/MahirSalahin/saleor",
  },
  {
    title: "Chat-PDF",
    description: "Developed a RAG system to create an intelligent chatbot capable of extracting and summarizing information from PDF documents using Langchain and Google Generative AI.",
    image: "/assets/chat-pdf.png",
    sourceLink: "https://github.com/MahirSalahin/chat-pdf",
  },
  {
    title: "Random API",
    description: "A FastAPI application that provides various randomization endpoints for generating random data and simulating random events.",
    image: "/assets/random-api.png",
    sourceLink: "https://github.com/MahirSalahin/random-api",
  },
  {
    title: "Divypal-bot",
    description: "A Telegram bot that helps users track shared expenses within a group, allowing members to add expenses, view balances, and manage group members.",
    image: "/assets/divypal.png",
    sourceLink: "https://github.com/antbyte-xyz/divypal-bot",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              <div className="w-full md:w-7/12">
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-5/12 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-8">{project.description}</p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-lg"
                    >
                    <FaGithub className="mr-2"/> Source Code
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};