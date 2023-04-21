import React, { useState } from "react";
import "./Layout.css";
import Button from "../Button/Button";

const Layout = ({ setColors, colors, getRandomPalette, setShowPalette, showPalette }) => {

    const [mostrarColores, setMostrarColores] = useState(true);

  return (
    <div className="layout">
      <div className="layout-header">
        <div className="layout-header_left">
          <div className="icons">
            <img
              className="icon"
              src="/assets/triste.png"
              style={{
                backgroundColor:
                  colors &&
                  `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`,
              }}
            />
            <div
              className="ball"
              style={{
                backgroundColor:
                  colors &&
                  `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`,
              }}
            ></div>
            <div
              className="ball"
              style={{
                backgroundColor:
                  colors &&
                  `rgb(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]})`,
              }}
            ></div>
          </div>
          <h3
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
            }}
          >
            Saddly Hues
          </h3>
        </div>
        <div className="layout-header_right">
          <h4
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
              cursor: "pointer",
              userSelect: "none"
            }}
            onClick={() => setShowPalette(!showPalette)}
          >
            Toggle palettes
          </h4>
          <h4
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
              cursor: "pointer",
              userSelect: "none"
            }}
            onClick={() => setMostrarColores(!mostrarColores)}
          >
            Toggle section colors
          </h4>
        </div>
      </div>
      <div className="layout-main">
        <div className="layout-main_left">
          <h1
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
            }}
          >
            Curated colors in context.
          </h1>
          <p
            style={{
              color:
                colors &&
                `rgb(${colors.at(-2)[0]}, ${colors.at(-2)[1]}, ${
                  colors.at(-2)[2]
                })`,
            }}
          >
            Not sure what colors to use in your designs or where to use them?
            Saddly Hues is a color palette inspiration site that acts as a real
            worl example as to how the colors could be used in your design
            projects.
          </p>
          <button
            className="aleatorio"
            style={{
              backgroundColor:
                colors &&
                `rgb(${colors.at(-3)[0]}, ${colors.at(-3)[1]}, ${
                  colors.at(-3)[2]
                })`,
              color:
                colors &&
                `rgb(${colors.at(0)[0]}, ${colors.at(0)[1]}, ${
                  colors.at(0)[2]
                })`,
            }}
            onClick={() => setColors(getRandomPalette())}
          >
            Try changing the palette!
          </button>
        </div>
        <div className="layout-main_right"></div>
      </div>
      <div className={mostrarColores ? "layout-colors mostrar" : "layout-colors"}>
        <div>
          <h2
            className="section-hues"
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
            }}
          >
            This sections hues
          </h2>
          <p
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
            }}
          >
            Click to copy the rgb code to your clipboard
          </p>
        </div>
        <div className="elements">
          <h4
            style={{
              color:
                colors &&
                `rgb(${colors.at(-1)[0]}, ${colors.at(-1)[1]}, ${
                  colors.at(-1)[2]
                })`,
            }}
          >
            Elements
          </h4>
          <div className="botones">
            {colors.map((color, index) => {
              return <Button key={color} color={color} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
