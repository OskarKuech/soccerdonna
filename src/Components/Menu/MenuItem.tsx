import React from "react";
import '../../styles/Menu.css';

interface MenuItemProps {
    title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({title}) => {

    return (
        <div className="menu-item">
            <p>{title}</p>
            <img src="/icons/arrow-white.svg" alt="arrow" />
        </div>
    );
}

export default MenuItem;