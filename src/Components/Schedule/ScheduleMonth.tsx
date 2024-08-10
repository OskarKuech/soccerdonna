import React from "react";
import Headline from "./Headline";
import Trennlinie from "../Trennlinie";
import ScheduleGame from "./ScheduleGame";
import "../../styles/Frames.css";

const ScheduleMonth = () => {
    return (
        <div className="schedule-month">
            <Headline month="September 2024"/>
            <Trennlinie/>
            <ScheduleGame 
                date="04.09." 
                clubHome="Eintracht Frankfurt" 
                clubAway="Sporting CB" 
                score="16:00"
                logoHome="Eintracht_Frankfurt.svg"
                logoAway="Sporting_Clube_de_Portugal.png"
                competition="Champions League-Qualifikation" 
                logo="Champions_League.png"/>
                <Trennlinie/>
            <ScheduleGame
                date="15.09." 
                clubHome="Bayer 04 Leverkusen" 
                clubAway="Eintracht Frankfurt" 
                score="14:00"
                logoHome="Bayer_04_Leverkusen.png"
                logoAway="Eintracht_Frankfurt.svg"
                competition="Bundesliga" 
                logo="Bundesliga.png"/>
                <Trennlinie/>
            <ScheduleGame
                date="22.09." 
                clubHome="1. FFC Turbine Potsdam" 
                clubAway="Eintracht Frankfurt" 
                score="14:00"
                logoHome="Turbine_Potsdam.png"
                logoAway="Eintracht_Frankfurt.svg"
                competition="Bundesliga" 
                logo="Bundesliga.png"/>
            <ScheduleGame 
                date="29.09." 
                clubHome="Eintracht Frankfurt" 
                clubAway="VfL Wolfsburg" 
                score="17:00"
                logoHome="Eintracht_Frankfurt.svg"
                logoAway="VfL_Wolfsburg.svg"
                competition="Bundesliga" 
                logo="Bundesliga.png"/>
            <Trennlinie/>
            </div>
    )
}

export default ScheduleMonth;