import React, { useEffect } from "react";

/**
 * Renders a typewriter animation that cycles through an array of sentences.
 * Behavior is derived from the array length:
 * - Multiple sentences → cycles through all with delete-and-retype effect.
 * - Single sentence → types once and stops.
 *
 * @param sentences - List of strings to type out in sequence.
 * @param classes - Additional Tailwind classes applied to the wrapper element.
 * @param as - HTML tag to render as. Defaults to `h3`.
 */
interface TypingWriterProps {
  sentences: string[];
  classes?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TypingWriter = ({ sentences, classes, as: Tag = "h3" }: TypingWriterProps) => {
  const loop = sentences.length > 1;
  const [index, setIndex] = React.useState(0);
  const [currentLetter, setCurrentLetter] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(100);
  const [done, setDone] = React.useState(false);

  useEffect(() => {
    if (done) return;

    const timeOut = setTimeout(() => {
      if (isDeleting) {
        setSpeed(50);
        if (currentLetter.length > 0) {
          setCurrentLetter(currentLetter.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % sentences.length);
        }
      } else {
        if (currentLetter.length < sentences[index].length) {
          setCurrentLetter(sentences[index].slice(0, currentLetter.length + 1));
        } else if (loop) {
          setSpeed(2000);
          setIsDeleting(true);
        } else {
          setDone(true);
        }
      }
    }, speed);
    return () => clearTimeout(timeOut);
  }, [currentLetter, done, index, isDeleting, loop, sentences, speed]);

  return (
    <Tag className={`my-4 font-semibold ${classes}`}>
      {currentLetter}
      <span className="cursor-blink text-main font-light">|</span>
    </Tag>
  );
};

export default TypingWriter;
