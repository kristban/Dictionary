import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary() {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data);
    }

    function handleError(error) {
        console.error("Dictionary lookup failed:", error);
        setResult(null);
    }

    function search(event) {
        event.preventDefault();
        if (!word.trim()) return;

        //documentation: https://www.shecodes.io/learn/apis/dictionary-api
        const key = "7a9df9a4f940btc116d43db796o3aa67";
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${encodeURIComponent(word.trim())}&key=${key}`;

        axios.get(apiUrl).then(handleResponse).catch(handleError);
    }

    function handleNewWord(event) {
        setWord(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input
                    type="search"
                    placeholder="Type a word..."
                    onChange={handleNewWord}
                    autoFocus
                />
            </form>
            <Results result={result} />
        </div>
    );
}
