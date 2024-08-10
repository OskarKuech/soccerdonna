import React from "react";
import Trennlinie from "../Trennlinie";
import '../../styles/Player.css'
import '../../styles/textstyle.css'

interface PlayerStatisticVisualSingleProps {
    category: string;
    value: number;
}

const PlayerStatisticVisualSingle: React.FC <PlayerStatisticVisualSingleProps> = ({category, value}) => {
    return (
        <div className="singular-stats">
            <div className="stats-input">
                <p>{value}</p>
                <p className="verdana18regular">{category}</p>
            </div>
            <Trennlinie />
        </div>
    )
}

export default PlayerStatisticVisualSingle;