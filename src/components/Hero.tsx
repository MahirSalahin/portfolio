import { ArrowDownCircle } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          <TypeAnimation
            sequence={[
              'Hi, I\'m Mahir Salahin',
              1000,
              'I\'m a Problem Solver',
              1000,
              'I\'m a Full-Stack Developer',
              1000,
              'I\'m a Python Expert',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 animate-fade-up">
        I'm a Full-Stack developer passionate about crafting seamless digital solutions. I possess a boundless enthusiasm for learning and a strong penchant for innovation. Continually seeking to expand my knowledge and make impactful contributions.
        </p>
        <a
          href="#about"
          className="inline-block animate-fade-up"
          aria-label="Scroll to About section"
        >
          <ArrowDownCircle size={48} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};