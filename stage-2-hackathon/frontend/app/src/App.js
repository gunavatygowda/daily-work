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
  const [duplicateError, setDuplicateError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/security")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleChange = (index, field, value) => {
    const updated = [...formData];
    updated[index][field] = value;
    setFormData(updated);
  };
  const handleSubmit = () => {
    let newErrors = Array(5).fill("");
    let hasError = false;
    formData.forEach((item, i) => {
      if (
        !item.questionId ||
        !item.answer.trim() ||
        !item.confirmAnswer.trim()
      ) {
        newErrors[i] = "Fill all fields";
        hasError = true;
      } else if (item.answer !== item.confirmAnswer) {
        newErrors[i] = "Answers do not match";
        hasError = true;
      }
    });

    const selected = formData.map((item) => item.questionId);
    const unique = new Set(selected);
    if (unique.size !== selected.length) {
      setDuplicateError("Duplicate questions not allowed");
      hasError = true;
    } else {
      setDuplicateError("");
    }
    setErrors(newErrors);
    if (hasError) return;

    const formattedData = formData.map((item, i) => ({
      questionId: item.questionId ||'Q${i + 1}',
      answer: item.answer.trim(),
      confirmAnswer: item.confirmAnswer.trim()
    }));
    axios
      .post("http://localhost:5000/api/security", formattedData)
      .then(() => {
        setDuplicateError("Submitted Successfully");
      })
      .catch((err) => console.error(err));
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
            formData={formData}
          />
          {errors[index] && <div className="error">{errors[index]}</div>}
        </div>
      ))}
      {duplicateError && <div className="error">{duplicateError}</div>}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
export default App;