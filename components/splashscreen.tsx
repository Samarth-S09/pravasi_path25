import React from 'react'
import { motion } from 'framer-motion'

const SplashScreen: React.FC<{ onProceed: () => void }> = ({ onProceed }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50 cursor-pointer border-[10px] border-orange-500 animate-border-flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onProceed}
    >
      <motion.img
        src="/pravasipath_logo.svg"
        alt="PravasiPath Logo"
        className="h-40"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />

      <motion.p
        className="absolute bottom-10 text-black text-2xl font-semibold animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Click anywhere to Navigate
      </motion.p>

      <style jsx>{`
        .animate-border-flow {
          animation: borderFlow 2s infinite alternate;
        }

        @keyframes borderFlow {
          0% {
            box-shadow: 0 0 10px 2px #ff6b00;
          }
          100% {
            box-shadow: 0 0 20px 6px #ff6b00;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default SplashScreen
