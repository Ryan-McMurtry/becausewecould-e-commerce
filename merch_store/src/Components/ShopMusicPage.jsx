import React from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import { useEffect } from "react";
import "../Styles/styles.scss";

function MusicPage() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <div>
        <h1>MUSIC</h1>
        <h1>CDS/Vinyls</h1>
        <h1>MUSIC VIDEOS(?)</h1>
      </div>
    );

}

export default MusicPage;
