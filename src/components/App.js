import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [props, setProps] = useState([]);
  //const [questions, setQuestions]= useState([]);

  useEffect(() => {
    console.log("fetch")
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        setProps(data)
        //setQuestions(data.map((questions)=>questions.prompt))
      })
    }, [])

 // console.log("In app:", questions);

    function handleAddQuestion(serverQ) {
      let quesAlredyExist = false;
      for ( let element in props) {
        if (element.id === serverQ.id ) {
          element=serverQ
          quesAlredyExist = true
        } else {
        }       
        console.log("element", element)      
      }
      if (quesAlredyExist === false) {
        setProps([...props, serverQ])
      }
      
    //setQuestions([...questions, serverQ])
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm props={props} onAddQuestion={handleAddQuestion}/> : <QuestionList  props={props}  />}
    </main>
  );
}

export default App;
