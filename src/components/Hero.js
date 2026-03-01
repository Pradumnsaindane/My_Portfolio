import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden"
    >
      {/* Particles Layer */}
      <ParticlesBackground />

      {/* Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm Pradumn
        </h1>

        <h2 className="text-2xl font-medium mb-6">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Specialist",
              "Backend Engineer",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          View My Work
        </button>
      </motion.div>
    </section>
  );
}