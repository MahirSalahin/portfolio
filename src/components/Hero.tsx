import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl ${theme === 'dark'
        ? 'bg-dark-800/50 text-dark-100 hover:bg-dark-700'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        } backdrop-blur-sm transition-all duration-300`}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

const FloatingElement = ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [0, -10, 0],
      rotate: [-1, 1, -1]
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className={`relative min-h-screen ${isDark ? 'bg-dark-900' : 'bg-gray-50'
      } overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-full h-full ${isDark ? 'opacity-30' : 'opacity-10'
          }`}>
          <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className={`absolute top-20 -left-20 w-96 h-96 rounded-full ${isDark
            ? 'bg-primary-900/30'
            : 'bg-primary-200/30'
            } filter blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className={`absolute bottom-20 -right-20 w-96 h-96 rounded-full ${isDark
            ? 'bg-accent-900/30'
            : 'bg-accent-200/30'
            } filter blur-3xl`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image - Moved before content for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-md mx-auto">
                {/* Image Container with Complex Border */}
                <div className={`relative rounded-full p-4 ${isDark
                  ? 'bg-gradient-to-tr from-dark-800 to-dark-700'
                  : 'bg-gradient-to-tr from-white to-gray-100'
                  } shadow-2xl`}>
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-conic from-primary-500 via-accent-500 to-primary-500 animate-spin-slow" />

                  {/* Image Frame */}
                  <div className="relative rounded-full p-1 bg-gradient-to-tr from-primary-500 to-accent-500">
                    <div className={`rounded-full p-2 ${isDark ? 'bg-dark-900' : 'bg-white'
                      }`}>
                      <img
                        src="/assets/hero-portrait.jpg"
                        alt="Portrait"
                        className="rounded-full w-full aspect-square object-cover"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-2xl" />
                  <div className="absolute -inset-4 bg-gradient-conic from-accent-500/30 via-transparent to-transparent blur-xl rounded-full animate-spin-slow" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8 order-2 lg:order-1"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-tight ${isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  <span className="block mb-2">I'm Mahir Salahin</span>
                  <div className="h-[1.3em] flex items-center justify-center lg:justify-start">
                    <span className={`block ${isDark ? 'text-primary-400' : 'text-primary-600'
                      } text-3xl lg:text-4xl xl:text-5xl`}>
                      <TypeAnimation
                        sequence={[
                          'Full Stack Developer',
                          2000,
                          'Problem Solver',
                          2000,
                          'Python Expert',
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap'
                        }}
                      />
                    </span>
                  </div>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg ${isDark ? 'text-dark-100' : 'text-gray-600'
                  } max-w-2xl mx-auto lg:mx-0 leading-relaxed`}
              >
                A passionate Full Stack Developer and Competitive Programmer, crafting elegant solutions to complex problems.
                With expertise in modern web technologies and algorithmic problem-solving, I build scalable and user-centric applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://drive.google.com/file/d/1vgWPPlGz-zzGhjgVVXC4zL7Ki99YXy_G/view"
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isDark
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                    } shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Résumé</span>
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className={`group inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isDark
                    ? 'bg-dark-800 text-white hover:bg-dark-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                    } border border-gray-200 dark:border-dark-700 backdrop-blur-sm`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 justify-center lg:justify-start pt-4"
              >
                <SocialLink
                  href="https://github.com/MahirSalahin"
                  icon={Github}
                  label="GitHub Profile"
                />
                <SocialLink
                  href="https://linkedin.com/in/mahir-salahin"
                  icon={Linkedin}
                  label="LinkedIn Profile"
                />
                <SocialLink
                  href="mailto:mahirsalahin01@gmail.com"
                  icon={Mail}
                  label="Email Contact"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className={`w-6 h-6 ${isDark ? 'text-dark-100' : 'text-gray-400'
            } animate-bounce-slow`} />
        </motion.div>
      </div>
    </div>
  );
};