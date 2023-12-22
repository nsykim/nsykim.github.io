import React from "react";
import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState<number>(0);
  function clickHandler() {
    setCount(count + 1);
  }
  return (<button onClick={clickHandler}>Clicked {count} times</button>);
}