import React from "react";
import '../../styles/Playercard.css';

interface PlayerCardInfoHoverProps {
    number: string;
    firstName: string;
    lastName: string;
    type: string;
}

const PlayerCardInfoHover: React.FC<PlayerCardInfoHoverProps> = ({ number, firstName, lastName, type }) => {
    const renderAttributes = () => {
        switch (type) {
            case 'Goal':
                return (
                    <div className="playercard-attribute-row">
                        <div className="playercard-attribute">
                            <p>Einsätze</p>
                            <p>30</p>
                        </div>
                        <div className="playercard-attribute">
                            <p>Zu Null</p>
                            <p>10</p>
                        </div>
                    </div>
                );
            case 'Field':
                return (
                    <div className="playercard-attribute-row">
                        <div className="playercard-attribute">
                            <p>Einsätze</p>
                            <p>28</p>
                        </div>
                        <div className="playercard-attribute">
                            <p>Tore</p>
                            <p>8</p>
                        </div>
                        <div className="playercard-attribute">
                            <p>Vorlagen</p>
                            <p>13</p>
                        </div>
                    </div>
                );
            case 'Staff':
                return (
                    <div className="playercard-attribute-row">
                        <div className="playercard-attribute">
                            <p>Rolle</p>
                            <p>Trainer</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="playercard-info-hover gradient-background">
            <div className="playercard-name">
                <p>{number}</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <div className="divider"/>
            {renderAttributes()}
        </div>
    );
}

export default PlayerCardInfoHover;