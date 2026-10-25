import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (!props.result) return null; // nothing searched yet

  const nouns = props.result.meanings
    .filter((meaning) => meaning.partOfSpeech === "noun")
    .slice(0, 2);

  const verbs = props.result.meanings
    .filter((meaning) => meaning.partOfSpeech === "verb")
    .slice(0, 2);

  return (
    <div className="Results">
      <section className="phonetics">
        <h2>{props.result.word}</h2>
        <p>/{props.result.phonetic}/</p>
      </section>

      {nouns.length > 0 && (
        <section className="nouns">
          <h3>Noun</h3>
          {nouns.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </section>
      )}

      {verbs.length > 0 && (
        <section className="verbs">
          <h3>Verb</h3>
          {verbs.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </section>
      )}
    </div>
  );
}