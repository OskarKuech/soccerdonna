import React from "react";
import '../../styles/Transfers.css';

interface TransfersHeadlineProps {
    headline: string;
}

const TransfersHeadline: React.FC <TransfersHeadlineProps> = ({headline}) => {

    return (
        <div className="headline">
            <p>{headline}</p>
        </div>
    )
}

export default TransfersHeadline;