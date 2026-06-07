import { motion } from "framer-motion";
import { imagePath } from "@/lib/imagePath";

export const LoaderScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#171717]">
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-secondary/15 blur-[130px]" />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-18px] rounded-full border-2 border-primary/20 border-t-primary"
          />

          <motion.img
            src={imagePath("images/favicon.webp")}
            alt="Relinc"
            className="h-24 w-24 object-contain drop-shadow-[0_0_35px_rgba(171,255,61,0.45)]"
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-8 text-lg font-semibold text-white"
        >
          Laddar Relinc
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ...
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
};