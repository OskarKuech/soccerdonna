import React from "react";
import { Link } from 'react-router-dom';
import NavigationSelected from "./NavigationSelected";
import NavigationUnselected from "./NavigationUnselected";
import '../../styles/Navigation.css';

interface NavigationProps {
    selectedTab: string;
}

const Navigation: React.FC<NavigationProps> = ({ selectedTab }) => {
    const tabs = ["Übersicht", "Statistik", "Termine", "Kader", "Transfers", "Stadion"];

    // Function to convert tab names to URL-friendly names
    const toUrlName = (name: string) => {
        const map: { [key: string]: string } = {
            "Übersicht": "uebersicht",
            "Statistik": "statistik",
            "Termine": "termine",
            "Kader": "kader",
            "Transfers": "transfers",
            "Stadion": "stadion"
        };
        return map[name] || name.toLowerCase();
    };

    return (
        <div className="navigation-frame">
            {tabs.map(tab => (
                <Link key={tab} to={`/club/${toUrlName(tab)}`}>
                    {tab === selectedTab ? 
                        <NavigationSelected name={tab} /> : 
                        <NavigationUnselected name={tab} />
                    }
                </Link>
            ))}
        </div>
    );
}

export default Navigation;