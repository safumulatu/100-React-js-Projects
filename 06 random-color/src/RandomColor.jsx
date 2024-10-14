import { useEffect } from "react";
import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const RandpmColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandpmColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const HendleCreateRandomRgbColor = () => {
    const r = RandpmColorUtility(256);
    const g = RandpmColorUtility(256);
    const b = RandpmColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") {
      HendleCreateRandomRgbColor();
    } else {
      HendleCreateRandomRgbColor();
    }
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : HendleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGb Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
export default RandomColor;
