import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import PageVignette from './components/PageVignette';
import HomePage from './pages/HomePage';

import WarehouseOverviewPage from './pages/course/WarehouseOverviewPage';
import SoftwareSystemsPage from './pages/course/SoftwareSystemsPage';
import HardwareEquipmentPage from './pages/course/HardwareEquipmentPage';
import WarehouseTypesPage from './pages/course/WarehouseTypesPage';

import CourseTestPage from './pages/CourseTestPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <GlobalBackground />
        <PageVignette intensity="medium" />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/course/warehouse-overview" element={<WarehouseOverviewPage />} />
            <Route path="/course/software-systems" element={<SoftwareSystemsPage />} />
            <Route path="/course/hardware-equipment" element={<HardwareEquipmentPage />} />
            <Route path="/course/warehouse-types" element={<WarehouseTypesPage />} />

            <Route path="/course-test" element={<CourseTestPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 