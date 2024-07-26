import React from "react";
import "../../styles/Frames.css";
import PreviewSmall from "../Artikel/PreviewSmall";

const PreviewSmallFrame = () => {
    return (
    <div className="preview-small-frame">
        <PreviewSmall
                image="/images/Cara_Bösl_Berlin.jpeg"
                headline="Verstärkung zwischen den Pfosten: Cara Bösl geht nach Berlin"
                text="Der 1. FC Union Berlin hat für die kommende Saison 2024/25 Torhüterin Cara Bösl verpflichtet. Die 27-Jährige wechselt von Eintracht Frankfurt zu den Berlinerinnen."
                date="02. Juli 2024"
        />
        <PreviewSmall
                image="/images/Sara_Schaller_Atletico_Madrid.jpg"
                headline="Sara Schaller verstärkt Atlético Madrid B"
                text="Atlético Madrid hat die Verpflichtung von Sara Schaller bekannt gegeben. Die 20-jährige Mittelfeldspielerin wechselt vom VfL Wolfsburg II zu den Madrilenen und hat einen Vertrag bis zum 30. Juni 2026 unterzeichnet. In der spanischen Hauptstadt wird sie für das Reserveteam in der 2. Liga auflaufen."
                date="02. Juli 2024"
        />
        <PreviewSmall 
                image="/images/Kiki_Nazareth_2028.jpeg"
                headline="FC Barcelona sichert sich Kika Nazareth bis 2028"
                text="Der FC Barcelona hat sich mit dem SL Benfica auf den Transfer von Kika Nazareth geeinigt. Die 21-jährige portugiesische Mittelfeldspielerin unterzeichnet einen Vertrag für die nächsten vier Spielzeiten bis zum 30. Juni 2028."
                date="02. Juli 2024"
        />
    </div>
    )
}

export default PreviewSmallFrame;