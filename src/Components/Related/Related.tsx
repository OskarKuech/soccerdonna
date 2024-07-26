import React from "react";
import Überschrift from '../LiveFeed/Überschrift';
import Trennlinie from "../Trennlinie";
import Player from "./Player";
import Club from "./Club";
import Nationalteam from "./Nationalteam";
import Competition from "./Competition";
import "../../styles/Frames.css";

const Related = () => {
  return (
    <div className="live-feed">
      <Überschrift league="Relevante Links"/>
      <Trennlinie />

      <Player />
      <Trennlinie />
      <Club />
      <Trennlinie />
      < Nationalteam />
      <Trennlinie />
      <Competition name="Bundesliga"/>
      <Trennlinie />
      <Competition name="Olympia"/>
    </div>
  )
}

export default Related;