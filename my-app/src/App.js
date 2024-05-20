// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche-logement" element={<FicheLogement />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
