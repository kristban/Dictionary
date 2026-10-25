import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (!props.result) return null; // nothing searched yet

  const maxDefinitions = 5; // per part of speech

  // Each part of speech once, e.g. ["noun", "verb"]
  const partsOfSpeech = [
    ...new Set(props.result.meanings.map((meaning) => meaning.partOfSpeech)),
  ];

  return (
    <div className="Results">
      <section className="phonetics">
        <h2>{props.result.word}</h2>
        <p>/{props.result.phonetic}/</p>
      </section>

      {partsOfSpeech.map((part) => (
        <section key={part}>
          <h3>{part}</h3>
          {props.result.meanings
            .filter((meaning) => meaning.partOfSpeech === part)
            .slice(0, maxDefinitions)
            .map((meaning, index) => (
              <Meaning key={index} meaning={meaning} />
            ))}
        </section>
      ))}
    </div>
  );
}
