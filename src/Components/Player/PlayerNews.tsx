import React from "react";
import PreviewSmall from "../Artikel/PreviewSmall";
import '../../styles/Player.css';

const PlayerNews = () => {
    return (
        <div className="section">
            <div className="headline-player">
                <p>News von Stina Johannes</p>
            </div>
            <div className="player-news">
                <PreviewSmall
                    image="/images/DFB-Frauen_EM-Ticket.jpg"
                    headline="DFB-Frauen lösen EM-Ticket nach Sieg in Polen"
                    text="Der 3:1-Sieg in Polen beschert dem DFB-Team trotz zunächst schwacher Leistung die EM-Qualifikation. Mittelfeld-Star Lena Oberdorf muss in ihrem 50. Länderspiel vorzeitig vom Platz."
                    date="04. Juni 2024"
                />
                <PreviewSmall
                    image="/images/DFB-Frauen_Torwart_offen.avif"
                    headline="Hrubesch lässt Torfrau-Frage für Olympia offen"
                    text="Merle Frohms hütete zuletzt bei EM und WM das deutsche Fußball-Tor. Einen Freifahrtschein für die Sommerspiele bekommt die Wolfsburgerin aber nicht."
                    date="23. Mai 2024"
                />
                <PreviewSmall
                    image="/images/Bayern_im_Pokalfinale.jpeg"
                    headline="Nach Elfmeterschießen: Bayern-Fußballerinnen stehen im Pokalfinale"
                    text="Die Fußballerinnen des FC Bayern stehen nach einem intensiven Duell mit Eintracht Frankfurt im DFB-Pokalfinale. Gegen die Hessinnen fällt die Entscheidung erst vom Punkt."
                    date="31. März 2024"
                />
            </div>
        </div>
    )
}

export default PlayerNews;
