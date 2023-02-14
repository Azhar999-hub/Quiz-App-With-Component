import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "Html Stands For ?",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "How can you make a bulleted list ?",
      options: ["dl", "ul", "ol", "list"],
      correctAns: "ul",
    },
    {
      question: "Css Stands For ?",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For ?",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For ?",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For ?",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For ?",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
    {
      question: "The external JavaScript file must contain the <script> tag ?",
      options: ["true", "false"],
      correctAns: "false",
    },
    {
      question: "Where is the correct place to insert a JavaScript ?",
      options: ["in the <body>", "in the <head>", "in both <head> and <body> "],
      correctAns: "in both <head> and <body>",
    },
    {
      question: "Which of these elements are all <table> elements ?",
      options: ["<table> <tr> <tt>", "<table> <head> <tfoot>", "<table> <tr> <td>", "<thead> <tbody> <tr> "],
      correctAns: "<table> <tr> <td>",
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  let checkQuestion = (a, b) => {
    if (a === b) {
      setScore(score + 1);
    }
    if (indexNumber + 1 === questions.length) {
      setShowResult(true);
    } else {
      setIndexNumber(indexNumber + 1);
    }
  };
  return (
    <div className="inner-div">
      {showResult ? (
        <h1
          style={{
            color: "red",
          }}
        >
          Your Score is {score}/{indexNumber + 1} <br />
          Your Percentage is {(score / questions.length) * 100}
        </h1>
      ) : (
        <Box>
          <Box sx={{ padding: 1 }}>
            <Typography variant="h3">
              Question No {indexNumber + 1} out of {questions.length}
            </Typography>
          </Box>
          <Box sx={{ padding: 1 }}>
            <Typography variant="h4"
            style={{
              color: "#1e88e9",
            }}>
              {questions[indexNumber].question}
            </Typography>
          </Box>
          <Box>
            <Grid>
              {questions[indexNumber].options.map((x, i) => (
                <Grid key={i} item md={6}>
                  <Chip
                      variant="outlined"
                    style={{
                      backgroundImage:" linear-gradient(to right, #0097ff, #00f9ff)",
                      margin: 5,
                      padding: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      fontSize: 18,
                    }}
                    
                    onClick={() =>
                      checkQuestion(x, questions[indexNumber].correctAns)
                    }
                    label={x}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default App;
