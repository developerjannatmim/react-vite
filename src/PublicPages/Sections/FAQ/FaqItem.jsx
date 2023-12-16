import React from "react";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggleAnswer} style={{ cursor: "pointer" }}>
        <strong>{question}</strong>
      </div>
      {isOpen && <p>{answer}</p>}
    </>
  );
};

export default FaqItem;
