import React from "react";
import BotCard from "./BotCard";


function BotCollection( { bots, handleClick, deleteBot }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (<BotCard key={bot.id} bot={bot} handleClick={handleClick} deleteBot={deleteBot}/>))}
      </div>
    </div>
  );
}

export default BotCollection;
