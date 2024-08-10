import React from "react";
import '../../styles/Menu.css';

interface MenuDropdownGroupContentProps {
    logo?: string;
    text: string;
}

const MenuDropdownGroupContent: React.FC <MenuDropdownGroupContentProps> = ({logo, text}) => {
    return (
        <div className="menu-dropdown-group-content">
            <img src={`/logo/club/${logo}`} alt={text} />
            <p>{text}</p>
        </div>
    )
}

export default MenuDropdownGroupContent;