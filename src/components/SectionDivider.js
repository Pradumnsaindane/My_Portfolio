import { motion } from "framer-motion";

export default function SectionDivider({ flip, dark }) {
  return (
    <div className={`${flip ? "rotate-180" : ""}`}>
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewBox="0 0 1440 320"
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        <path
          fill={dark ? "#111827" : "#f9fafb"}
          d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,192C672,192,768,128,864,122.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64V320H0Z"
        />
      </motion.svg>
    </div>
  );
}