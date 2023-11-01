import React from "react";
import { useEffect } from "react";
function Tour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1>Tour coming soon...</h1>;
}

export default Tour;
