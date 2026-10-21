import React from "react";
import Destinations from "./components/Destinations";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tours from "./components/Tours";
import Expeditions from "./components/Expeditions";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div>
      {/* <ScrollToTop />
      <Navbar />
      <Home />
      <Guide />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer /> */}

<Router>
      {/* Ensures the page scrolls to the top when route changes */}
      <ScrollToTop />
      
      {/* Fixed Navbar */}
      <Navbar />
      
      <main >
        {/* Routing and Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/tracking" element={<DownloadApp />} />
          <Route path="/expedition" element={<Expeditions />} />
          <Route path="/tour" element={<Tours numberOfTours={6} />} />
          <Route path="/testimonials" element={<Testimonial />} />
          
          
          {/* Add more routes as needed */}
        </Routes>
      </main>
      
      {/* Fixed Footer */}
      <Footer />
    </Router>

    </div>
  );
}

