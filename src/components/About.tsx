export const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
          About Me
        </h2>
        <div className="space-y-12">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          I'm a full-stack developer who thrives on solving real-world problems through innovative technology. With a strong focus on backend development, I work primarily with Python, leveraging frameworks like FastAPI, Django, and GraphQL to build efficient and scalable systems. For data management, I rely on PostgreSQL and Supabase, ensuring the reliability and performance of my applications. On the front end, I have experience with Flutter and React, allowing me to create user-friendly interfaces when needed. I also have a deep understanding of data structures and algorithms, which I apply to competitive programming, particularly through LeetCode challenges. I'm constantly exploring new technologies and enjoy taking on projects that allow me to push my limits, build creative solutions, and make a meaningful impact. Whether it's optimizing backend performance or crafting intuitive UIs, I’m always eager to learn and innovate.
          </p>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">Languages</h4>
                <p className="text-gray-600">Python, Java, C#, C++, Dart, JavaScript, TypeScript</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">Backend</h4>
                <p className="text-gray-600">FastAPI, Django, NextJS, GraphQL</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">Frontend</h4>
                <p className="text-gray-600">React, NextJS, TailwindCSS</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">Database</h4>
                <p className="text-gray-600">MySQL, PostgreSQL</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">Cloud</h4>
                <p className="text-gray-600">Supabase, Firebase, GCP</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">AI & ML</h4>
                <p className="text-gray-600">Langchain, Huggingface, Pytorch, Pandas</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-300 text-white font-semibold py-4 px-12 rounded-lg text-xl"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};