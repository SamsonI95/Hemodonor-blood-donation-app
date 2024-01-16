// App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./Pages/Home";
import DonateBlood from "./Pages/DonateBlood";
import PrivacyStatement from "./Pages/PrivacyStatementPage";
import TermsPage from "./Pages/TermsPage";
import DonorSelect from "./Components/PagesComponents/DonorSelect";
import DonorForm from "./Components/PagesComponents/DonorForm";
import OrgForm from "./Components/PagesComponents/OrgForm";
import OtpForm from "./Components/Reusables/OtpForm";
import RecipientDetails from "./Components/PagesComponents/RecipientDetails";

//Components
import NavBar from "./Components/Reusables/NavBar";
import Footer from "./Components/Reusables/Footer";
import HideFooter from "./Components/Reusables/HideFooter";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/donate-blood" element={<DonateBlood />} />
          <Route path="/donor-select" element={<DonorSelect />} />
          <Route path="/donor-form" element={<DonorForm />} />
          <Route path="/recipient-details" element={<RecipientDetails />} />
          <Route path="/org-form" element={<OrgForm />} />
          <Route path="/otp-form" element={<OtpForm />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyStatement />} />
        </Routes>
        <HideFooter>
          <Footer />
        </HideFooter>
      </Router>
    </>
  );
}

export default App;
