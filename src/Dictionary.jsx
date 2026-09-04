import React, { useState} from "react";
import './Dictionary.css';

export default function Dictionary() {
    let [word, setWord] = useState(null); 

    function search(event) {
        event.preventDefault();
        alert(`Searching for ... ${word}`);
    }

    function handleNewWord(event) {
        console.log(event.target.value);
        setWord(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Type a word..." onChange={handleNewWord}/>
        </form>
    </div>;
}