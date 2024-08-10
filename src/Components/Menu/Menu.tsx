import React from "react";
import MenuItem from "./MenuItem";
import '../../styles/Menu.css';

const Menu = () => {

    return (
        <div className="menu">
            <div className="menu-bar">
                <div className="menus">
                    <img src="/images/soccerdonna.png" alt="user" />
                        
                        <MenuItem title="Startseite" />
                        <MenuItem title="Wettbewerbe" />
                        <MenuItem title="Nationallmanschft" />
                        <MenuItem title="Foren" />
                        <MenuItem title="News" />
                    </div>
                <div className="menu-icons">
                    <img src="/icons/user.svg" alt="user" />
                    <img src="/icons/search.svg" alt="search" />
                </div>
            </div>
        </div>
    );
}

export default Menu;