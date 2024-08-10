import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Article from './Pages/Article';
import ClubOverview from './Pages/ClubOverview';
import ClubStatistics from './Pages/ClubStatistics';
import ClubFixtures from './Pages/ClubFixtures';
import ClubSquad from './Pages/ClubSquad';
import ClubPlayer from './Pages/ClubPlayer';
import ClubTransfers from './Pages/ClubTransfers';
import ClubStadium from './Pages/ClubStadium';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/artikel" element={<Article />} />
            <Route path="/club/article" element={<Article />} />
          <Route path="/club/uebersicht" element={<ClubOverview />} />
            <Route path="/club/overview" element={<ClubOverview />} />
          <Route path="/club/statistik" element={<ClubStatistics />} />
            <Route path="/club/statistic" element={<ClubStatistics />} />
          <Route path="/club/termine" element={<ClubFixtures />} />
            <Route path="/club/fixtures" element={<ClubFixtures />} />
          <Route path="/club/kader" element={<ClubSquad />} />
            <Route path="/club/squad" element={<ClubSquad />} />
          <Route path="/club/spieler" element={<ClubPlayer />} />
          <Route path="/club/player" element={<ClubPlayer />} />
          <Route path="/club/transfers" element={<ClubTransfers />} />
          <Route path="/club/stadion" element={<ClubStadium />} />
            <Route path="/club/stadium" element={<ClubStadium />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;