import React from "react";
import Menu from "../Components/Menu/Menu";
import ClubHeader from "../Components/Header/ClubHeader";
import PreviewLargeClub from "../Components/Artikel/PreviewLargeClub";
import PreviousFeed from "../Components/Feeds/PreviousFeed";
import UpcomingFeed from "../Components/Feeds/UpcomingFeed";
import '../styles/Frames.css';

const ClubOverview = () => {
    return (
        <div className="club-frame">
            <Menu />
            <ClubHeader selectedTab="Übersicht"/>
            <div className="full-frame">
                <div className="article-frame">
                    <PreviewLargeClub 
                        image="/images/Champions_League_Frankfurt.png"
                        headline="Eintracht Frankfurt in Champions-League-Quali gegen Sporting CP"
                        date="05. Juli 2024" />

                        <PreviewLargeClub 
                        image="/images/Laura_Freigang_Vertragsverlangerung.webp"
                        headline="Stürmerin Freigang bleibt bis 2028 bei Eintracht Frankfurt"
                        date="04. Juli 2024" />

                        <PreviewLargeClub 
                        image="/images/Brengel_Nürnberg.png"
                        headline="Verstärkung fürs Mittelfeld: Brengel wechselt nach Nürnberg"
                        date="15. Juni 2024" />

                        <PreviewLargeClub 
                        image="/images/Kirchberger_Austria_Wien.png"
                        headline="Austria Wien verpflichtet Virginia Kirchberger"
                        date="06. Juni 2024" />
                </div>
                <div className='live-feed-frame'>
                    <UpcomingFeed />
                    <PreviousFeed />
                </div>
            </div>
        </div>
    )
    }

export default ClubOverview;