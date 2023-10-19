import React from "react";
import { useEffect } from "react";
function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1>Videos</h1>;
}

export default Videos;
