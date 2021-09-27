import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

// GET REQUEST
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((r) => r.json())
    .then((questions) => setQuestions(questions))
  }, [])

  function handleDeleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
    .then((r) => r.json())
    .then(() => {
    const updatedList = questions.filter((question) => question.id !== id)
    setQuestions(updatedList)
  })
  }

  const questionItem = questions.map((question) => <QuestionItem
  key={question.id}
  question={question}
  handleDeleteQuestion={handleDeleteQuestion}

  />)

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
