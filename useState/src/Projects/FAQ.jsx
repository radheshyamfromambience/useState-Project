import { useState } from "react";
import "./faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is useState in React?",
      a: "useState is a React Hook that allows you to add state to functional components."
    },
    {
      q: "Why should we not modify state directly?",
      a: "Direct modification does not trigger re-render. React updates UI only when setState is used."
    },
    {
      q: "Can we use multiple useState hooks?",
      a: "Yes, you can use multiple useState hooks for different data in the same component."
    },
    {
      q: "Is useState asynchronous?",
      a: "Yes, state updates are asynchronous and may batch multiple updates for performance."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-card">

        <h1>FAQ</h1>
        <p className="subtitle">
          React useState Accordion Project
        </p>

        {faqs.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.q}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default FAQ;
