import React from "react";
import '../../styles/Player.css';

interface PlayerInformationProps {
    nationality: string;
    birthday: string;
    height: number;
    clubEntry: string;
}

const PlayerInformation: React.FC<PlayerInformationProps> = ({nationality, birthday, height, clubEntry}) => {
    return (
        <div className="information-container">
                        <div className="information-content">
                            <p>Nationalität</p>
                            <p>{nationality}</p>
                        </div>
                        <div className="information-content">
                            <p>Geburtsdatum</p>
                            <p>{birthday}</p>
                            </div>
                        <div className="information-content">
                            <p>Größe</p>
                            <p>{height}cm</p>
                        </div>
                        <div className="information-content">
                            <p>Im Verein seit</p>
                            <p>{clubEntry}</p>
                        </div>
                    </div>
        
    )
}

export default PlayerInformation;