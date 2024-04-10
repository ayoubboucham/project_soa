import React from 'react';
import logo from './logo.svg'; 
import './App.css';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
// import { Route, Switch } from "react-router";

import ArticlesPage from './pages/articles'; 
import CommandesPage from './pages/commandes'; 
import ClientsPage from './pages/clients'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/commandes" element={<CommandesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
