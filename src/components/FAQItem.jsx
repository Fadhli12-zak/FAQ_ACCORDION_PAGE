import "./FAQItem.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item" onClick={onClick}>
      <div className="question-content">
        <p>{question}</p>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`answer-content ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
