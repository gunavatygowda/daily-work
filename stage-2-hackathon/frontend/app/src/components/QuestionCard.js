import { useState } from "react";

export default function QuestionCard({ index, questions, data, handleChange }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="row">
      <select
        value={data.questionId || ""}
        onChange={(e) => handleChange(index, "questionId", e.target.value)}
      >
        <option value="">Select Question</option>
        {questions.map((q, i) => (
          <option key={i} value={q.question}>
            {q.question}
          </option>
        ))}
      </select>

      <div className="input-box">
        <input
          type={showAnswer ? "text" : "password"}
          placeholder="Answer"
          value={data.answer}
          onChange={(e) => handleChange(index, "answer", e.target.value)}
        />
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide" : "Show"}
        </button>
      </div>

      <div className="input-box">
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm"
          value={data.confirmAnswer}
          onChange={(e) => handleChange(index, "confirmAnswer", e.target.value)}
        />
        <button onClick={() => setShowConfirm(!showConfirm)}>
          {showConfirm ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}