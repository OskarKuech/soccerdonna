import React, { useState } from "react";
import Trennlinie from "../Trennlinie";
import '../../styles/Stadium.css';

interface DropdownProps {
    section: string;
    subsections?: {
        title?: string;
        content: JSX.Element[];
    }[];
}

const Dropdown: React.FC<DropdownProps> = ({ section, subsections }) => {
    const [isUnfolded, setIsUnfolded] = useState(false);

    const toggleDropdown = () => {
        setIsUnfolded(!isUnfolded);
    };

    return (
        <div onClick={toggleDropdown}>
            <div className="dropdown-text">
                <div className="dropdown-sectionname">
                    <p>{section}</p>
                </div>
                <div className="dropdown-icon">
                    <img src="/icons/arrow.svg" alt="Arrow" style={{ transform: isUnfolded ? 'rotate(270deg)' : 'rotate(90deg)' }} />
                </div>
            </div>
            <Trennlinie />
            {isUnfolded && subsections?.map((sub, index) => (
                <div key={index} className="dropdown-content">
                    {sub.title && <div className="dropdown-headline"><p>{sub.title}</p></div>}
                    {sub.content.map((item, idx) => (
                        <div key={idx} className="dropdown-information">
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Dropdown;