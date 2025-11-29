import { motion } from "framer-motion";
import RobotModel from "../three/RobotModel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* BACKGROUND GRADIENT (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-red/5 dark:from-accent-blue/10 dark:to-accent-red/10" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-light-textSecondary dark:text-dark-textSecondary mb-4"
            >
              Hi, I'm{" "}
              <span className="wave inline-block text-3xl md:text-4xl">👋</span>
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-light-text dark:text-dark-text">
                Ayushman
              </span>
              <br />
              <span className="text-gradient">Saxena</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-accent-blue dark:text-accent-blue mb-4"
            >
              Crafting Code, Building Experiences
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-lg mx-auto lg:mx-0 mb-8"
            >
              I turn ideas into elegant, scalable software solutions. Passionate
              about building web applications that make a difference.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Download CV Button */}
              <a
                href="/resume.pdf"
                download="Ayushman_Saxena_Resume. pdf"
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent-blue/25 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>

              {/* Let's Talk Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent-blue text-accent-blue dark:text-accent-blue rounded-full font-medium hover:bg-accent-blue hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Let's Talk
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {/* GitHub */}
              <a
                href="https://github.com/ayush17112005"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-light-surface dark:bg-dark-surface hover:bg-accent-blue transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 text-light-text dark:text-dark-text group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ayushmansaxena/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-light-surface dark:bg-dark-surface hover:bg-accent-blue transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-light-text dark:text-dark-text group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter. com/ayushmansaxena"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-light-surface dark:bg-dark-surface hover:bg-accent-blue transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-light-text dark:text-dark-text group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: 3D Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-yellow/20 rounded-full blur-2xl opacity-40" />

              {/* 3D Robot - Drag to rotate!  */}
              <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
                <RobotModel />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-light-textSecondary dark:text-dark-textSecondary hover:text-accent-blue transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
