import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about"  className="py-24 bg-white dark:bg-gray-900 transition">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I build scalable and performance-focused web applications
          using modern technologies and clean architecture principles.
        </p>
      </motion.div>
    </section>
  );
}