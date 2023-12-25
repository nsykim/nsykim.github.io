import React from "react";
import "./JoinButton";

type prop = {
  textData: string;
  handleClick: () => void
};

export default function JoinButton( {textData, handleClick} : prop ) {
  return (
    <button onClick = {handleClick}>
      {textData}
    </button>
  );
}