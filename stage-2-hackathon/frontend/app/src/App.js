import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "./components/QuestionCard";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState(
    Array.from({ length: 5 }, () => ({
      questionId: "",
      answer: "",
      confirmAnswer: ""
    }))
  );
  const [errors, setErrors] = useState(Array(5).fill(""));

  useEffect(() => {
    axios.get("http://localhost:5000/api/security")
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (index, field, value) => {
    const updatedData = formData.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    let newErrors = Array(5).fill("");

    formData.forEach((item, i) => {
      if (!item.questionId || !item.answer || !item.confirmAnswer) {
        newErrors[i] = "Fill all fields";
      } else if (item.answer !== item.confirmAnswer) {
        newErrors[i] = "Answers do not match";
      }
    });

    setErrors(newErrors);

    const hasError = newErrors.some(e => e !== "");
    if (hasError) return;

    axios.post("http://localhost:5000/api/security", formData)
      .then(() => alert("Submitted Successfully"))
      .catch(err => console.error(err));
  };

  return (
    <div className="form-container">
      <h2>Security Questions</h2>

      <div className="header">
        <span>Question</span>
        <span>Answer</span>
        <span>Confirm Answer</span>
      </div>

      {formData.map((item, index) => (
        <div key={index}>
          <QuestionCard
            index={index}
            questions={questions}
            data={item}
            handleChange={handleChange}
          />
          {errors[index] && (
            <div className="error">{errors[index]}</div>
          )}
        </div>
      ))}

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;