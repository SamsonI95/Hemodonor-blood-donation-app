import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideFooter = ({ children }) => {
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/donate-blood" || location.pathname === "/register") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <div>{ showFooter && children }</div>
  );
};
export default HideFooter;
