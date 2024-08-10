import React from "react";
import '../../styles/Navigation.css';
import '../../styles/textstyle.css';

interface NavigationSelectedProps {
    name: string;
}
const NavigationSelected: React.FC<NavigationSelectedProps> = ({ name }) => {
    return (
            <div className="navigation-tab">
                <div className="text-frame">
                    <p className="verdana18regular">{name}</p>
                </div>
                <div className="navigation-selected"></div>
            </div>
    )
}

export default NavigationSelected;