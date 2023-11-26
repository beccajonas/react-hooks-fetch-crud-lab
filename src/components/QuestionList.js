import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  }, [])

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(question => 
      question.id !== deletedQuestion.id)
      setQuestions(updatedQuestions)
  }

  function handleAnswerChange(id, correctIndex) {  
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        correctIndex
      })
    })
    .then(res => res.json())
    .then(updatedQuestion => {
      const updatedQuestions = questions.map(question => {
        if (question.id === updatedQuestion.id) { return updatedQuestion;
        }
        return question;
      })
      setQuestions(updatedQuestions)
    })
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => {
          return (
            <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={handleDeleteQuestion}
            onAnswerChange={handleAnswerChange}
              />
          )
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
