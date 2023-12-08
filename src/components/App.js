import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [props, setProps] = useState([]);

  useEffect(() => {
    console.log("fetch")
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        setProps(data)
      })
  }, [])

  function handleAddQuestion(serverQ) {
    let quesAlredyExist = false;
    for (let element in props) {
      if (element.id === serverQ.id) {
        element = serverQ
        quesAlredyExist = true
      } else {
      }
      console.log("element", element)
    }
    if (quesAlredyExist === false) {
      setProps([...props, serverQ])
    }
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = props.filter((item) => item.id !== deletedQuestion.id);
  setProps(updatedQuestions);
    console.log("In app:", deletedQuestion);
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm props={props} onAddQuestion={handleAddQuestion} /> : <QuestionList props={props} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
