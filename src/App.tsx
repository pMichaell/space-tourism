import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import CrewPage from "./pages/CrewPage/CrewPage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";
import Layout from "./ui/Layout";
import DesignPage from "./pages/DesignPage/DesignPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="design" element={<DesignPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
