import React, { useState,useEffect } from "react";

const BioContentHome = ({ bio }) => {
  const texts = [
    "// Hi, I'm Ayush Mishra ....",
    "// I'm a Coder...",
    "// I'm a full stack developer.... ",
    "// you will find here all information about me .... ",
  ]; 

const [currentText, setCurrentText] = useState(""); // Text being displayed
const [charIndex, setCharIndex] = useState(0); // Track the current character index (both for adding and removing)
const [textIndex, setTextIndex] = useState(0); // Track which string is currently being typed
const [isErasing, setIsErasing] = useState(false); // Track whether we're erasing or typing

useEffect(() => {
  const handleTyping = () => {
    setCharIndex((prevCharIndex) => {
      const currentString = texts[textIndex];

      // Typing logic (building the text)
      if (!isErasing) {
        if (prevCharIndex < currentString.length) {
          return prevCharIndex + 1; // Build one character at a time
        } else {
          // Once the full string is typed, start erasing after a small delay
          setTimeout(() => setIsErasing(true), 1000); // Wait 1s before erasing
          return prevCharIndex;
        }
      }

      // Erasing logic (removing the text)
      if (isErasing) {
        if (prevCharIndex > 1) {
          // Stop erasing when only one character is left
          return prevCharIndex - 1; // Remove one character at a time
        } else {
          // Once only one character is left, move to the next string
          setIsErasing(false);
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length); // Move to the next string
          return 0; // Reset charIndex to start typing the next string
        }
      }
      return prevCharIndex;
    });
  };

  const interval = setInterval(handleTyping, 200); // Speed at which characters are added/removed

  return () => clearInterval(interval); // Cleanup interval on component unmount
}, [charIndex, isErasing, textIndex, texts]);


  return (
    <div className="flex flex-col text-center mt-28 h-36">
      <h1 className="text-3xl font-bold">
        {texts[textIndex].slice(0, charIndex)}
      </h1>
      <span className="text-7xl">&#123;" "&#125;</span>
    </div>
  );
};

export default BioContentHome;
