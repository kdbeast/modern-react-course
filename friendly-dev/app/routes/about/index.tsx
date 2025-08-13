const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-white font-bold text-2xl mb-6">
            Hi, I'm Karan 🖖
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate and experienced Full Stack Developer with a strong
            focus on creating dynamic and user-friendly web applications. I
            specialize in the MERN stack (MongoDB, Express.js, React, Node.js)
            and have a proven track record of delivering high-quality software
            solutions.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          After years of honing my skills in web development, I've come to
          realize that my true passion lies in helping others bring their
          digital ideas to life. My mission is to empower individuals and
          businesses by transforming their visions into robust, scalable, and
          intuitive web applications. I believe in clean code, efficient
          solutions, and a user-centric approach to design and development.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-4">Tech I Use 🚀</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "react",
          "nextjs",
          "nodejs",
          "eslint",
          "prettier",
          "jest",
          "graphql",
          "apollo",
          "redux",
          "zustand",
          "react-query",
          "formik",
          "framer-motion",
          "docker",
          "aws",
          "azure",
          "google-cloud",
          "firebase",
          "vercel",
          "ubuntu",
          "vite",
          "parcel",
          "babel",
          "typescript",
        ].map((tech) => (
          <li key={tech} className="bg-gray-800 rounded-full px-3 py-1">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
