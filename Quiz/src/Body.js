import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Body.css";
import Review from "./Review";
const Url = "https://opentdb.com/api.php?amount=50&type=multiple";
var Score = 0;
function Body() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState({});
  // const [score, setScore] = useState(0);
  var selected = "";

  const nextQuestion = () => {
    console.log(current.correct_answer, selected);
    console.log(current.correct_answer === selected);
    if (current.correct_answer === selected) {
      Score++;
    }
    console.log("score", Score);
    setIndex(index + 1);
    setCurrent(questions[index]);
  };

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const fetchQuestions = async (url) => {
    setLoading(true);
    const response = await axios(url).catch((error) => console.log(error));
    if (response) {
      const data = response.data.results;

      if (data.length > 0) {
        console.log(data);
        data.forEach((element) => {
          element.incorrect_answers.push(element.correct_answer);
          shuffle(element.incorrect_answers);
        });
        setQuestions(data);
        setCurrent(data[0]);
        setLoading(false);
      } else {
        console.log("Error Occured:NO DATA");
      }
    }
  };

  useEffect(() => {
    fetchQuestions(Url);
  }, []);

  if (loading) {
    return <h1 id="loading">Loading Quiz...</h1>;
  }
  if (index === 10) {
    return <Review score={Score} />;
  }
  return (
    <div className="list-group ">
      <span class="list-group-item list-group-item-action" className="question">
        {current?.question}
      </span>

      <div>
        {current?.incorrect_answers?.map((option) => {
          return (
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
              id="btn"
              onClick={() => (selected = option)}
            >
              {option}
            </a>
          );
        })}
      </div>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={nextQuestion}
        id="submit"
      >
        Next
      </button>
    </div>
  );
}

export default Body;
