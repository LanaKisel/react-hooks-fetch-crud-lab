import React, {useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ props }) {

  const newQuestions = props.map(question => <QuestionItem key={question.id} question={question} />)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{newQuestions}</ul>
    </section>
  );
}

export default QuestionList;
