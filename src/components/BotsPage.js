import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";
import { render } from "react-dom";

const API = "http://localhost:8002/bots"

function BotsPage() {
  const [bots, setBots] = useState([])
  const [specs, setSpec] = useState(false);

  useEffect(() => {
    fetch(API)
      .then ((res) => res.json())
      .then ((json) => setBots(json))
  }, [])

  function addBot(bot, inArmy = true){
    console.log("BOT!")
    setBots(bots.map((b) => b.id === bot.id ? {...b, enlisted: inArmy} : b))
  }

  
  function showSpecs(){
    console.log("SPEC!")
    setSpec((showSpec) => !showSpec);
    return renderBot()
  }
  
  function renderBot(bot, inArmy = true){ 
    console.log("RENDER!")
    // let spec = bots
    // setSpec(bots.map((spec) => spec.id === bot.id ? {...spec, enlisted: inArmy} : spec))
    setSpec(bots.map((b) => b.id === bot.id ? {...b, enlisted: inArmy} : b))
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
        handleClick={showSpecs} 
        deleteBot={deleteBot}
      />
      <BotSpecs bot={renderBot} />
    </div>
  )
}

export default BotsPage;
