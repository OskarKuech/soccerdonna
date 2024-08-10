import React from "react";
import '../../styles/Menu.css';

interface MenuDropdownListContentProps {
    text: string;
}

const MenuDropdownListContent: React.FC <MenuDropdownListContentProps> = ({text}) => {
    return (
        <div className="menu-dropdown-list-content">
            <p>{text}</p>
        </div>
    )
}

export default MenuDropdownListContent;