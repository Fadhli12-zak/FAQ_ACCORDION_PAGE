import "./App.css";
import { useState } from "react";
import FAQItem from "./components/FAQItem";
import dataFaq from "./data/dataFAQ.json";

function App() {
  const [openId, setOpenId] = useState(null);
  const handleItemClick = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <h2>
        Everything you need to know about our services and creative process
      </h2>
      <div className="faq-container">
        {dataFaq.map((data) => {
          const isOpen = data.id === openId;
          return (
            <FAQItem
              key={data.id}
              question={data.pertanyaan}
              answer={data.jawaban}
              isOpen={isOpen}
              onClick={() => handleItemClick(data.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
