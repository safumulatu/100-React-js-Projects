import { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Expand } from "@mui/icons-material";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default Question;
