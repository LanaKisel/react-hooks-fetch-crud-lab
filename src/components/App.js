import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [props, setProps] = useState([]);
  const [questions, setQuestions]= useState((props.map((prop)=>prop)).map((questions)=>questions.prompt))

  useEffect(() => {
    console.log("fetch")
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        return setProps(data)
      })
  }, [])

  //const [questions, setQuestions]= useState((props.map((prop)=>prop)).map((questions)=>questions.prompt));
    function handleAddQuestion(newQ) {
    console.log("In ShoppingList:", newQ);
    setQuestions([...questions, newQ])
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm props={props} onAddQuestion={handleAddQuestion}/> : <QuestionList  questions={questions}/>}
    </main>
  );
}

export default App;
