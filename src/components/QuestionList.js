import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ props, onDeleteQuestion, onChangeSelect }) {
  const newQuestions = props.map(question => <QuestionItem key={question.id} question={question} onChangeSelect={onChangeSelect} onDeleteQuestion={onDeleteQuestion} />)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{newQuestions}</ul>
    </section>
  );
}

export default QuestionList;
