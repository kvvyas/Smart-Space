import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Extra from "./pages/Extra.jsx";
import LiveSchedule from "./pages/LiveSchedule";
import Login from "./pages/Login";
import Step1 from "./pages/Step1.jsx";
import Step2 from "./pages/Step2.jsx";

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
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<LiveSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);