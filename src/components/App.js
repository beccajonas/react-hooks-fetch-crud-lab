import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(('http://localhost:4000/questions'))
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  function onAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function onQuestionDelete(questionId) {
    const filteredQuestions = questions.filter(q => 
      q.id !== questionId 
    )
    setQuestions(filteredQuestions)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={onAddQuestion} /> : <QuestionList questions={questions} onQuestionDelete={onQuestionDelete} />}
    </main>
  );
}

export default App;