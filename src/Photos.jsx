import React from "react";
import "./Photos.css";

// Shows a grid of pictures for the searched word
export default function Photos(props) {
    if (!props.photos || props.photos.length === 0) return null;

    return (
        <div className="Photos">
            {props.photos.slice(0, 6).map((photo) => (
                <a
                    key={photo.src.original}
                    href={photo.url}
                    target="_blank"
                    rel="noreferrer"
                    title={`Photo by ${photo.photographer} on Pexels`}
                >
                    <img src={photo.src.landscape} alt={photo.alt} loading="lazy" />
                </a>
            ))}
        </div>
    );
}
