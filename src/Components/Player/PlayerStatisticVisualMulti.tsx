import React from "react";
import Trennlinie from "../Trennlinie";
import '../../styles/Player.css'
import '../../styles/textstyle.css'

interface PlayerStatisticVisualMultiProps {
    category: string;
    value: number;
    subCategoryFirst: string;
    valueSubFirst: number;
    subCategorySecond: string;
    valueSubSecond: number;
}


const PlayerStatisticVisualMulti: React.FC <PlayerStatisticVisualMultiProps> = ({category, value, subCategoryFirst, valueSubFirst, subCategorySecond, valueSubSecond}) => {
    return (
        <div className="multiple-stats">
            <div className="stats-input">
                <p>{value}</p>
                <p className="verdana18regular">{category}</p>
            </div>
            <Trennlinie />
            <div className="sub-stats">
                <div className="sub-stats-input">
                    <div className="sub-stats-value">
                        <p>{valueSubFirst}</p>
                    </div>
                    <p className="verdana16regular">{subCategoryFirst}</p>
                </div>
                <div className="sub-stats-input">
                    <div className="sub-stats-value">
                        <p>{valueSubSecond}</p>
                    </div>
                    <p className="verdana16regular">{subCategorySecond}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerStatisticVisualMulti;