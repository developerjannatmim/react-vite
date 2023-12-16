import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <div>
        <h1>Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </>
  );
};

export default Faq;
