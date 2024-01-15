//App
import React, { useState } from "react";

//component
import ToggleButtons from "../Reusables/ToggleButtons";
import BloodDonorsPanel from "./BloodDonorsPanel";
import BloodBankPanel from "./BloodBankPanel";

function DonorSelect() {
  const [selectedPanel, setSelectedPanel] = useState("Blood Donors");

  const handleToggle = (choice) => {
    console.log('Toggle selected:', choice);
    setSelectedPanel(choice);
  };

  return (
    <>
      <div className="toggle-button-switch">
        <ToggleButtons texts={["Blood Donors", "Blood Banks"]} onToggle={handleToggle}  />
      </div>
      {console.log('Selected Panel:', selectedPanel)}
      {selectedPanel === "Blood Donors" && <BloodDonorsPanel />}
      {selectedPanel === "Blood Banks" && <BloodBankPanel />}
    </>
  );
}

export default DonorSelect;
