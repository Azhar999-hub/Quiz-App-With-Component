import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import questions from './components/questionData'
import { SMoption } from "./components/option";
import StatusBar from "./components/statusBar";


function App() {
  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

let percentage  = Math.round((score / questions.length) * 100);



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

  const resetAll=()=>{
    setShowResult(false);
    setIndexNumber(0);
    setScore(0);
}

  return (
    <div className="inner-div">
      
      {showResult ? (
        <StatusBar score={score} percentage={percentage} indexNumber={indexNumber+1} question={questions.length} tryAgain={resetAll}/>
       
      ) : (
        <div>
        <Box>
          <Box sx={{ padding: 1 }}>
            <Typography variant="h3">
              Question No {indexNumber + 1} out of {questions.length}
            </Typography>
          </Box>
          <Box sx={{ padding: 1 }}>
            <Typography variant="h4"
            style={{
              color: "blue",
            }}>
              {questions[indexNumber].question}
            </Typography>
          </Box>
          <Box>
            <Grid>
              {questions[indexNumber].options.map((x, i) => (
                <Grid key={i} item md={6}>
                   <SMoption option={x} onClick={()=>checkQuestion(x, questions[indexNumber].correctAns)} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>
      )}
    </div>
     
      
  );
}

export default App;
