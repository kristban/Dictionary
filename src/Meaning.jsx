import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>{props.meaning.definition}</p>
      {props.meaning.example && (
        <p className="example">
          <strong>Example:</strong> <em>{props.meaning.example}</em>
        </p>
      )}
      {/* One synonym: show it on the same line */}
      {props.meaning.synonyms && props.meaning.synonyms.length === 1 && (
        <p className="synonyms">
          <strong>Synonym:</strong> {props.meaning.synonyms[0]}
        </p>
      )}

      {/* Two or more synonyms: show them as a bullet list */}
      {props.meaning.synonyms && props.meaning.synonyms.length > 1 && (
        <div className="synonyms">
          <strong>Synonyms:</strong>
          <ul>
            {props.meaning.synonyms.map((synonym) => (
              <li key={synonym}>{synonym}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
