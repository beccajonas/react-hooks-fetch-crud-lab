import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, onQuestionDelete }) {
  
  const renderQuestions = questions.map(question=> {
    return <QuestionItem key={question.id} question={question} onQuestionDelete={onQuestionDelete} />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {renderQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;