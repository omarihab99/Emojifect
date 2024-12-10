import React, { useState, useEffect } from "react";
import "./Laugh.css";
interface Props {
  children: React.ReactNode;
}

const Laugh: React.FC<Props> = ({ children }) => {
  const [emojis, setEmojis] = useState<
    Array<{
      id: number;
      left: string;
      top: string;
      fontSize: string;
      animationDuration: string;
      rotate: string;
    }>
  >([]);
  const textWdith = 0;
  useEffect(() => {
    const generateEmojis = (count: number) => {
      const emojiArray = Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`, // Random horizontal position
        top: `${Math.random() * 100}%`, // Random vertical position
        fontSize: `${Math.random() * 2 + 1}rem`, // Random size
        animationDuration: `${Math.random() * 2 + 3}s`, // Random animation duration
        rotate: `${Math.random() * 360}deg`,
      }));
      setEmojis(emojiArray);
    };

    generateEmojis(textWdith / 10 ? textWdith / 10 : 5); // Generate 20 emojis
  }, [textWdith]);

  return (
    <div className="laugh-container">
      {children}
      {emojis.map((emoji) => (
        <span
          key={emoji.id}
          className="emoji"
          style={{
            left: emoji.left,
            top: emoji.top,
            fontSize: emoji.fontSize,
            animationDuration: emoji.animationDuration,
            transform: `rotate(${emoji.rotate})`,
          }}
        >
          😂
        </span>
      ))}
    </div>
  );
};

export default Laugh;
