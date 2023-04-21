import React, { useEffect, useState } from "react";
import "./Palettes.css";
import Palette from "../Palette/Palette";

const Palettes = ({ setColors, setPalettes, palettes, showPalette }) => {
  const getPalettes = async () => {

    const resultado = await fetch(
      "https://saddly-hues-back.vercel.app/palettes"
    );
    const res = await resultado.json();

    const palettesMapped = res.map((pal) => pal.result);

    setTimeout(() => {
      setPalettes([...palettesMapped]);
    }, 2000);
  };

  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <div className={showPalette ? "palettes mostrarPalette" : "palettes"}>
      {palettes.length !== 1 ? (
        palettes.map((palette) => (
          <Palette
            key={JSON.stringify(palette)}
            palette={palette}
            setColors={setColors}
          />
        ))
      ) : (
        <img
          src="https://global.discourse-cdn.com/business7/uploads/streamlit/original/2X/2/247a8220ebe0d7e99dbbd31a2c227dde7767fbe1.gif"
          alt="loading rocket"
          className="rocket"
        />
      )}
    </div>
  );
};

export default Palettes;
