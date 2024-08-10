import React from "react";
import '../../styles/Transfers.css';

interface TransferTableProps {
    club: string;
}

const TransferTableHeadline: React.FC <TransferTableProps> = ({club}) => {
    return (
        <div className="table">
            <p className="table-name">Spielerin</p>
            <p className="table-age">Alter</p>
            <p className="table-nationality">Nat</p>
            <p className="table-club">{club}</p>
            <p className="table-fee">Ablöse</p>
        </div>
    )

}

export default TransferTableHeadline;