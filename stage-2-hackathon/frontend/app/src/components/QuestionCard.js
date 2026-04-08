import React, { useState } from "react";

function QuestionCard({ index, questions, data, handleChange, formData }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="row">

      {/* Dropdown */}
      <select
        value={data.questionId}
        onChange={(e) =>
          handleChange(index, "questionId", e.target.value)
        }
      >
        <option value="">Select Question</option>

        {(questions || []).map((q, i) => {
          const value = q.id ||`Q${i + 1}`;

          const isSelectedElsewhere = (formData || []).some(
            (item, idx) =>
              idx !== index && item.questionId === value
          );

          return (
            <option key={i} value={value} disabled={isSelectedElsewhere}>
              {q.question}
            </option>
          );
        })}
      </select>

      {/* Answer */}
      <div>
        <input
          type={showAnswer ? "text" : "password"}
          placeholder="Answer"  
          value={data.answer}
          onChange={(e) =>
            handleChange(index, "answer", e.target.value)
          }
        />
        <button type="button" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide" : "Show"}
        </button>
      </div>

      {/* Confirm */}
      <div>
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm"  
          value={data.confirmAnswer}
          onChange={(e) =>
            handleChange(index, "confirmAnswer", e.target.value)
          }
        />
        <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
          {showConfirm ? "Hide" : "Show"}
        </button>
      </div>

    </div>
  );
}

export default QuestionCard;