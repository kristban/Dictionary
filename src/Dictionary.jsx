import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

const exampleWords = ["sunset", "ocean", "moon", "garden"];

export default function Dictionary(props) {
    const [word, setWord] = useState(props.defaultKeyword);
    const [result, setResult] = useState(null);
    const [photos, setPhotos] = useState([]);

    function handleResponse(response) {
        setResult(response.data);
    }

    function handleImagesResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleImagesError(error) {
        console.error("Image search failed:", error);
        setPhotos([]);
    }

    function handleError(error) {
        console.error("Dictionary lookup failed:", error);
        setResult(null);
    }

    function search(keyword) {
        if (!keyword.trim()) return;

        //documentation: https://www.shecodes.io/learn/apis/dictionary-api
        const key = "7a9df9a4f940btc116d43db796o3aa67";
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${encodeURIComponent(keyword.trim())}&key=${key}`;

        axios.get(apiUrl).then(handleResponse).catch(handleError);

        //documentation: https://www.shecodes.io/learn/apis/images
        const imagesUrl = `https://api.shecodes.io/images/v1/search?query=${encodeURIComponent(keyword.trim())}&key=${key}`;

        axios.get(imagesUrl).then(handleImagesResponse).catch(handleImagesError);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(word);
    }

    // Search for the default word once, when the page first loads
    useEffect(() => {
        search(word);
    }, []);

    function handleNewWord(event) {
        setWord(event.target.value);
    }

    // Put the clicked example in the search box and look it up
    function handleExampleClick(example) {
        setWord(example);
        search(example);
    }

    return (
        <div className="Dictionary">
            <section className="card search-card">
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    value={word}
                    onChange={handleNewWord}
                    autoFocus
                />
                <p className="hint">
                    Type a word, for example:{" "}
                    {exampleWords.map((example) => (
                        <button
                            key={example}
                            type="button"
                            className="example-word"
                            onClick={() => handleExampleClick(example)}
                        >
                            {example}
                        </button>
                    ))}
                </p>
            </form>
            </section>
            {photos.length > 0 && (
                <section className="card photos-card">
                    <Photos photos={photos} />
                </section>
            )}
            {result && (
                <section className="card results-card">
                    <Results result={result} />
                </section>
            )}
        </div>
    );
}
