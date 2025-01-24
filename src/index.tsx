import "./index.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Extra from "./pages/Extra.jsx";
import Step1 from "./pages/Step1.jsx";
import Step2 from "./pages/Step2.jsx";
import React from "react";
import AboutUs from "./pages/AbousUs";
import ContactUs from "./pages/ContactUs";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);