import { skills } from "../data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 transition">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white shadow-md p-8 rounded-2xl text-center transition"
            >
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}