// components/ScrollIndicator.jsx
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-6 h-10 border-2 border-textAccent rounded-full flex justify-center items-start p-1">
        <motion.div
          className="w-1 h-2 bg-textAccent rounded-sm"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </div>

      <div className="w-px h-16 bg-gradient-to-b from-textAccent via-transparent to-textAccent opacity-50 mt-2 relative">
        <div
          className="w-2 h-2 bg-textAccent rotate-45 absolute left-1/2 -translate-x-1/2 top-16"
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
