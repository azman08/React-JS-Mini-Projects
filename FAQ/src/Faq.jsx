import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How does Tailwind CSS work?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.",
    },
    {
      question: "What is the use of useState?",
      answer:
        "useState is a Hook that lets you add state to function components.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-black rounded-xl">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 text-left bg-gray-100 rounded-lg focus:outline-none hover:bg-gray-200"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-black text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-lg font-semibold rounded-xl">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
