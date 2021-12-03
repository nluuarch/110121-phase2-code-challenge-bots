import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots"

function BotsPage() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch(API)
      .then ((res) => res.json())
      .then ((json) => setBots(json))
  }, [])

  function addBot(bot, inArmy = true){
    console.log("BOT!")
    setBots(bots.map((b) => b.id === bot.id? {...b, enlisted: inArmy} : b))
  }

  function removeBot(bot){
    addBot(bot, false);
  }

  function deleteBot(bot){
    setBots(bots.filter((b) => b.id !== bot.id))
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter(b => b.enlisted)} handleClick={removeBot} deleteBot={deleteBot}/>
      <BotCollection 
        bots={bots} 
        handleClick={addBot} 
        deleteBot={deleteBot}
      />
    </div>
  )
}

export default BotsPage;
