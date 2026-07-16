import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = "" }) => {
  const handleClick = () => {
    window.open("https://wa.me/916289920686", "_blank", "noopener,noreferrer");
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full text-white font-medium uppercase tracking-widest transition-shadow duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 
        text-[10px] sm:text-xs md:text-sm ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: 'inset 0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1, 0 10px 25px -5px rgba(181, 1, 167, 0.3)',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Have an Idea?
    </motion.button>
  );
};

export default ContactButton;
