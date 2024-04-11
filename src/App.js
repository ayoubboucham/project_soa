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
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/commandes" element={<CommandesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        {/* <Route path="/" exact>
          <Landing />
        </Route> */}
        {/* <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route> */}
        {/* <Route path="/" exact>
          <Landing />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
