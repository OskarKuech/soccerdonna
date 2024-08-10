import React from "react";
import MenuDropdownListContent from "./MenuDropdownListContent";
import MenuDropdownGroupContent from "./MenuDropdownGroupContent";
import '../../styles/Menu.css';

const MenuDropdown = () => {
    return (
        <div className="menu-dropdown">
            <div className="menu-dropdown-list">
                <MenuDropdownListContent text="Bundesliga"/>
                <MenuDropdownListContent text="2. Bundesliga"/>
                <MenuDropdownListContent text="DFB-Pokal"/>
                <MenuDropdownListContent text="Champions League"/>
            </div>
            <div className="menu-dropdown-group">
                <div className="menu-dropdown-haha">
                    <div className="menu-dropdown-group-content-headline">
                        <p>Teams</p>
                    </div>
                    <MenuDropdownGroupContent logo="FC_Bayern_Muenchen.svg" text="FC Bayern München"/>
                    <MenuDropdownGroupContent logo="VfL_Wolfsburg.svg" text="VfL Wolfsburg"/>
                    <MenuDropdownGroupContent logo="Eintracht_Frankfurt.svg" text="Eintracht Frankfurt"/>
                    <MenuDropdownGroupContent logo="SGS_Essen.png" text="SGS Essen"/>
                    <MenuDropdownGroupContent logo="TSG_Hoffenheim.svg" text="TSG 1899 Hoffenheim"/>
                    <MenuDropdownGroupContent logo="Bayer_04_Leverkusen.png" text="Bayer 04 Leverkusen"/>
                </div>
                <div className="menu-dropdown-haha">
                    <div className="menu-dropdown-group-content-headline">
                        <p></p>
                    </div>
                    <MenuDropdownGroupContent logo="SV_Werder_Bremen.svg" text="SV Werder Bremen"/>
                    <MenuDropdownGroupContent logo="RB_Leipzig.svg" text="RasenBallsport Leipzig"/>
                    <MenuDropdownGroupContent logo="SC_Freiburg.svg" text="SC Freiburg"/>
                    <MenuDropdownGroupContent logo="1._FC_Koeln.svg" text="1. FC Köln"/>
                    <MenuDropdownGroupContent logo="Turbine_Potsdam.png" text="1. FFC Turbine Potsdam"/>
                    <MenuDropdownGroupContent logo="Carl_Zeiss_Jena.png" text="FC Carl Zeiss Jena"/>
                </div>
            </div>
        </div>
    )
}

export default MenuDropdown;