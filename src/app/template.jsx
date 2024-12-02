"use client";

import { motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";

const queryC = new QueryClient();

const Transition = ({ children }) => {
  return (
    <QueryClientProvider client={queryC}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </QueryClientProvider>
  );
};

export default Transition;
