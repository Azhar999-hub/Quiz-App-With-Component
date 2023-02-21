import { Button } from "@mui/material";
import React from "react";

export const SMoption = (props) => {
  let { onClick, option } = props;

  return (
    <div>
      <Button 
        style={{
          backgroundImage: " linear-gradient(to right, #099fff, #00f9ff)",
          margin: 5,
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
          fontSize: 18,
          color:"white",
          boxShadow:" 2px 8px 5px 6px rgba(1, 1, 1, 0.2)"
        }}
        
        onClick={onClick}>
        {option}
      </Button>
    </div>
  );
};
