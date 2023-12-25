import React from "react";
import "./Gamebox.css";
import { useState } from "react";

import JoinPage from "./JoinPage";
import LobbyPage from "./LobbyPage";

type Page = "JoinPage" | "LobbyPage";

export default function Gamebox() {
  const [username, setUsername] = useState<string>("");
  const [partyId, setPartyId] = useState<string>("");
  const [page, setPage] = useState<Page>("JoinPage");

  function valid() : Boolean {
    if (username.length == 0) {
      alert("missing username");
      return false;
    }
    return true;
  }

  function usernameHandler(event: any) : void {
    setUsername(event.target.value);
  }
  function partyIdHandler(event: any) : void {
    setPartyId(event.target.value);
  }

  function joinHandler(creating: Boolean) : void {
    if (!valid) return;

    if (creating) { //new party

    }
    else { //joining existing party

    }
  }


  return (
    <div className="Gamebox">
      {/* <LobbyPage /> */}

      if (page == "JoinPage") {
        
      }
      <JoinPage 
        usernameHandler={usernameHandler} 
        partyIdHandler={partyIdHandler}
        joinHandler={joinHandler}
      />

    </div>
  )
}