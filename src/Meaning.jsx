import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>{props.meaning.definition}</p>
      {props.meaning.example && <em>{props.meaning.example}</em>}
    </div>
  );
}
