import React from "react";
import "./JoinPage.css";
import { useState } from "react";

import JoinButton from "./JoinButton";

type prop = {
  usernameHandler: any;
  partyIdHandler: any;
  joinHandler: any;
};

export default function JoinPage({ usernameHandler, partyIdHandler, joinHandler} : prop) {
  return (
    <>
      <h1>Join Page</h1>
      <input id="username" type="textBox" className="textbox"
       placeholder="username" onChange={usernameHandler}/>
      <input id="partyId" type="textBox" className="textbox"
       placeholder="party id" onChange={partyIdHandler}/>
      <JoinButton textData="Join Game" handleClick={() => joinHandler(false)} />
      <JoinButton textData="Create Game" handleClick={() => joinHandler(true)} />
    </>
  );
}