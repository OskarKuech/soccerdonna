import React from "react";
import TransfersJoin from "./TransfersJoin";
import TransfersLeave from "./TransfersLeave";
import '../../styles/Transfers.css';

const Transfers = () => {
    return (
        <div className="transfers">
            <TransfersJoin />
            <TransfersLeave />
        </div>
    )
}

export default Transfers;