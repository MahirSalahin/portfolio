import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contact</h2>
        <p className="text-xl text-text-secondary mb-12 leading-relaxed">
          Would you like to work with me? Awesome!
        </p>
        <a
          href="mailto:mahirsalahin01@gmail.com"
          className="inline-block bg-transparent hover:bg-white/10 border-2 border-white transition-colors duration-300 text-white font-semibold py-4 px-12 rounded-lg text-xl mb-16"
        >
          Let's Talk
        </a>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/MahirSalahin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahir-salahin-a8bb9a296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:mahirsalahin01@gmail.com"
            className="text-white hover:text-gray-200 transition-colors duration-300"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};