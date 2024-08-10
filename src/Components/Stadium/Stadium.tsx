import React from "react";
import StadiumInfo from "./StadiumInfo";
import Trennlinie from "../Trennlinie";
import Dropdown from "./Dropdown";
import '../../styles/Stadium.css';

const Stadium = () => {
    return (
        <div className="stadium">
            <div className="headline">
                <p>Stadion am Brentanobad</p>
            </div>
            <div className="stadium-image">
                <img src="/images/stadium/preview/Stadion_am_Brentanobad.png" alt="Stadion am Brentanobad" />
            </div>
            <div className="stadium-overview">
                <div className="stadium-plan">
                    <img src="/images/stadium/plan/Stadion_am_Brentanobad.png" alt="Stadionplan" />
                    </div>
                    <div className="stadium-info">
                        <StadiumInfo category="Stadionname:" value="Stadion am Brentanobad"/>
                        <Trennlinie />
                        <StadiumInfo category="Zuschauerplätze:" value="5.650"/>
                        <Trennlinie />
                        <StadiumInfo category="Sitzplätze:" value="1.100"/>
                        <Trennlinie />
                        <StadiumInfo category="überdach:" value="1.100"/>
                        <Trennlinie />
                        <StadiumInfo category="Letzter Umbau:" value="2015"/>
                        <Trennlinie />
                        <StadiumInfo category="Baukosten:" value="11.000.000€"/>
                        <Trennlinie />
                        <StadiumInfo category="Eigentümer:" value="Stadt Frankfurt"/>
                        <Trennlinie />
                        <StadiumInfo category="Spielfeldgröße:" value="105m x 68m"/>
                </div>
            </div>
            <Dropdown section="Anfahrt zum Stadion" subsections={[
                {
                    title: "Anfahrt mit dem Auto:",
                    content: [
                        <p>Auto Nord/Süd-Verbindung A5 (Bad Hersfeld-Basel)</p>,
                        <p>Abfahrt: "Frankfurt-Nordwest" auf A66 (Richtung Frankfurt-Miquelallee)</p>,
                        <p>A66 bis AS Frankfurt-Ludwig-Landmann-Straße fahrent</p>,
                        <p>Abfahrt: "Frankfurt-Rödelheim" auf Ludwig-Landmann-Straße fahren Ludwig-Landmann-Straße entlang fahren rechts in Rödelheimer Parkweg einbiegen</p>,
                        <p>Ost/West-Verbindung A66 (Wiesbaden-Schlüchtern)</p>,
                        <p>Von Wiesbaden: A66 in Richtung Frankfurt-Miquelallee bis AS Frankfurt-Ludwig-Landmann-Straße fahren</p>,
                        <p>Abfahrt: "Frankfurt-Rödelheim" auf Ludwig-Landmann-Straße fahren</p>,
                        <p>Ludwig-Landmann-Straße entlang fahren</p>,
                        <p>rechts in Rödelheimer Parkweg einbiegen</p>,
                        <p>Von Schlüchtern (Fulda): A66 in Richtung Frankfurt fahren bis Autobahnende "Frankfurt-Bergen-Enkheim" links abbiegen, in Richtung "Frankfurt-Riederwald" folgen Sie den Hinweisschildern zur Autobahn-Fortsetzung A66 "Alleenring" fahren</p>,
                        <p>(Wittelsbacherallee- Habsburgerallee- Rothschildallee- Nibelungenallee-Adickesallee- Miquelallee), Miquelallee mündet in die Fortsetzung der A66</p>,
                        <p>A66 in Richtung Wiesbaden bis AS Frankfurt-Ludwig-Landmann-Straße fahren</p>,
                        <p>Abfahrt: "Frankfurt-Rödelheim" auf Ludwig-Landmann-Straße fahren</p>,
                        <p>Ludwig-Landmann-Straße entlang fahren rechts in Rödelheimer Parkweg einbiegen</p>
                    ]
                },
                {
                    title: "Anfahrt mit den öffentlichen Verkehrsmitteln:",
                    content: [
                        <p>Von den DB-Bahnhöfen:</p>,
                        <p>Frankfurt-Hauptbahnhof, Frankfurt-Süd, Frankfurt-West und Frankfurt-Messe:</p>,
                        <p>S3 (Richtung Bad Soden), S4 (Richtung Kronberg/Ts.), S5 (Richtung Friedrichsdorf) oder FKE Taunusbahn (Richtung Grävenwiesbach) bis Station Frankfurt-Rödelheim Bf. Umsteigen in Bus 34 (Richtung Gallus Mönchhofstraße)</p>,
                        <p>Aussteigen an Station "Sternbrücke"</p>,
                        <p>Fußweg 5 min.</p>,
                        <p>Für U6 (Praunheim Heerstraße- Frankfurt-Ost):</p>,
                        <p>Aussteigen an Station "Fischstein"</p>,
                        <p>Fußweg 5 min.</p>
                    ]
                }
            ]}
            />
            <Dropdown section="Besonderheiten" subsections={[
                {
                    content: [
                        <p>Im Stadion am Brentanobad spielen auch die Männer der SG Rot Weiss Frankfurt 1901 e.V. und den ESV Blau-Gold e.V.</p>,
                    ]
                }
            ]}
            />
        </div>
    )
}


export default Stadium;