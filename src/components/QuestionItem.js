import React from "react";

function QuestionItem({ question, onQuestionDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDelete() {
    onQuestionDelete(question.id)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE'
    })
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleAnswerUpdate(e) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: {
       "content-type" : "application/json"
      },
      body: JSON.stringify({correctIndex: e.target.value})
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerUpdate} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;