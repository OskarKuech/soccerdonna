import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import '../../styles/Squad.css';

const SquadPosition = () => {
    return (
        <div>
            <div className="position">
                <h1>Tor</h1>
                <div className="roster">
                    <PlayerCard number="1" firstName="Stina" lastName="Johannes" type="Goal"/>
                    <PlayerCard number="1" firstName="Stina" lastName="Johannes" type="Goal"/>
                    <PlayerCard number="1" firstName="Stina" lastName="Johannes" type="Goal"/>
                </div>
            </div>
            <div className="position">
                <h1>Abwehr</h1>
                <div className="roster">
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                </div>
            </div>
            <div className="position">
                <h1>Mittelfeld</h1>
                <div className="roster">
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                </div>
            </div>
            <div className="position">
                <h1>Sturm</h1>
                <div className="roster">
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                    <PlayerCard number="22" firstName="Nadine" lastName="Riesen" type="Field"/>
                </div>
            </div>
            <div className="position">
                <h1>Trainerteam</h1>
                <div className="roster">
                    <PlayerCard number="" firstName="Niko" lastName="Arnautis" type="Staff"/>
                    <PlayerCard number="" firstName="Niko" lastName="Arnautis" type="Staff"/>
                    <PlayerCard number="" firstName="Niko" lastName="Arnautis" type="Staff"/>
                </div>
            </div>
        </div>
    )
}

export default SquadPosition;