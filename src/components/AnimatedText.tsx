import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress of the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  
  // Total characters count (excluding spaces) to split the scroll timeline
  const chars = text.split("");
  const totalChars = chars.filter(c => c !== " ").length;
  
  let charIndex = 0;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block mr-[0.28em] whitespace-nowrap">
            {word.split("").map((char, charIdx) => {
              const currentIdx = charIndex;
              charIndex++;

              // Calculate start and end position of this character within the scroll viewport
              const start = currentIdx / totalChars;
              const end = Math.min((currentIdx + 1) / totalChars, 1);

              return (
                <Character
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  // Linearly map opacity from 0.2 (dormant) to 1.0 (fully active) based on character position
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for size and alignment */}
      <span className="opacity-0">{char}</span>
      {/* Absolutely positioned character containing the actual animation */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
