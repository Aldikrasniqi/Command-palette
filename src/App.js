import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommandPalette from './components/CommandPalette';
import { data } from './data/data';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectPage data={data}/>} />
      </Routes>
      <div className="">
        <CommandPalette data={data} />
      </div>
    </Router>
  );
}
