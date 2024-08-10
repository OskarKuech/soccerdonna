import React from "react";
import '../../styles/Navigation.css';

interface NavigationUnselectedProps {
    name: string;
}
const NavigationUnselected: React.FC<NavigationUnselectedProps> = ({ name }) => {
    return (
        <div className="navigation-tab">
            <div className="text-frame">
                <p>{name}</p>
            </div>
            <div className="navigation-unselected"></div>
        </div>
    )
}

export default NavigationUnselected;