import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative py-12 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I'm a Full Stack developer who thrives on solving real-world problems through innovative technology. With a strong focus on backend development, I work primarily with Python, leveraging frameworks like FastAPI, Django, and GraphQL to build efficient and scalable systems. For data management, I rely on PostgreSQL and Supabase, ensuring the reliability and performance of my applications. On the front end, I have experience with Flutter and React, allowing me to create user-friendly interfaces when needed. I also have a deep understanding of data structures and algorithms, which I apply to competitive programming, particularly through LeetCode and Codeforces. I'm constantly exploring new technologies and enjoy taking on projects that allow me to push my limits, build creative solutions, and make a meaningful impact. Whether it's optimizing backend performance or crafting intuitive UIs, I'm always eager to learn and innovate.
          </motion.p>

          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold text-gray-800 dark:text-white text-center"
            >
              Technical Skills
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Languages</h4>
                <p className="text-gray-600 dark:text-gray-400">Python, Java, C#, C++, Dart, JavaScript, TypeScript</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Backend</h4>
                <p className="text-gray-600 dark:text-gray-400">FastAPI, Django, NextJS, GraphQL</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Frontend</h4>
                <p className="text-gray-600 dark:text-gray-400">React, NextJS, TailwindCSS</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Database</h4>
                <p className="text-gray-600 dark:text-gray-400">MySQL, PostgreSQL</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Cloud</h4>
                <p className="text-gray-600 dark:text-gray-400">Supabase, Firebase, GCP</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">AI & ML</h4>
                <p className="text-gray-600 dark:text-gray-400">Langchain, Huggingface, Pytorch, Pandas</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};