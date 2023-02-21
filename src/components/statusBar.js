import { Box, Button, Divider } from "@mui/material";
import React from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const StatusBar = (props) => {
  let { score, indexNumber, percentage,question,tryAgain} = props;

  return (
    <div>
      <h1
        style={{
          color: "red",
        }}>
       

        Attepmt question {question} out of {indexNumber} 
        <Divider sx={{paddingBottom:"4px"}} />
        Your Score is {score}<br />
        <Divider sx={{paddingBottom:"4px"}} />
        Your Percentage is {percentage}%<br />
        <Divider sx={{paddingBottom:"4px"}} />
        <Box sx={{textAlign:"center"}}>
        {percentage >= 70 ? (
          <h3>😊Congratulation! You Are Pass😊</h3>
        ) : (
          <h3>😢 BadLuck! You Are Failed 😢</h3>
        )}
      </Box>
      </h1>
      <Box sx={{textAlign:"center"}}>
      <Button  variant="contained" onClick={tryAgain}>Try Again<RestartAltIcon/></Button>
      </Box>
    </div>
  );
};

export default StatusBar;
