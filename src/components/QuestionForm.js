import React, { useState } from "react";

function QuestionForm({onAddQuestion}) {
  // const [formData, setFormData] = useState({
  //   prompt: "",
  //   answer1: "",
  //   answer2: "",
  //   answer3: "",
  //   answer4: "",
  //   correctIndex: 0,
  // });

  const [prompt, setPrompt] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [correctIndex, setCorrectIndex] = useState(0)


  function handleSubmit(e) {
    e.preventDefault();

    const newQuestion = {
      prompt,
      answers: [answer1, answer2, answer3, answer4],
      correctIndex,
    }

    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
    .then(res => res.json())
    .then(newQuestionData => onAddQuestion(newQuestionData))

    alert('Your question was posted');

    e.target.reset();
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={answer1}
            onChange={e => setAnswer1(e.target.value)}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={answer2}
            onChange={e => setAnswer2(e.target.value)}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={answer3}
            onChange={e => setAnswer3(e.target.value)}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={answer4}
            onChange={e => setAnswer4(e.target.value)}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={correctIndex}
            onChange={e => setCorrectIndex(e.target.value)}
          >
            <option value="0">{answer1}</option>
            <option value="1">{answer2}</option>
            <option value="2">{answer3}</option>
            <option value="3">{answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;