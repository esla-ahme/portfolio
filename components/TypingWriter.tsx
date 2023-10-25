import React, { use, useEffect } from "react";
import { motion } from "framer-motion";
interface TypingWriterProps {
  sentences: string[];
  loop: boolean;
  classes?: string;
}

const TypingWriter = ({ sentences, loop, classes }: TypingWriterProps) => {
  const [index, setIndex] = React.useState(0);
  const [currentLetter, setCurrentLetter] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(100);
  const [looping, setLooping] = React.useState(loop);

  useEffect(() => {
    // typeWriter effect
    const timeOut = setTimeout(() => {
      if (isDeleting) {
        setSpeed(50);
        if (currentLetter.length > 0) {
          setCurrentLetter(currentLetter.slice(0, currentLetter.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % sentences.length);
        }
      } else {
        if (currentLetter.length < sentences[index].length) {
          setCurrentLetter(sentences[index].slice(0, currentLetter.length + 1));
        } else {
          setSpeed(4000);
          setIsDeleting(true);
        }
      }
    }, speed);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentLetter, index, isDeleting]);
  return (
    <h3 className={`my-4 font-semibold ${classes}`}>
      {currentLetter || ""}
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-main font-light"
      >
        |
      </motion.span>
    </h3>
  );
};

export default TypingWriter;
