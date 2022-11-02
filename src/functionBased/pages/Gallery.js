import React from 'react';
import {Link, userRouteMatch, Route} from 'react-router-dom'
import '../App.css'

export default function Gallery () {
    return(
        <>
        <button></button>
        <div>
            <ul style={{
            listStyleType: "none",
            display: "flex", 
            gap: "20px", 
            flexWrap: "wrap"
            }}>
                <li>
                    <img src="https://picsum.photos/200" alt="photo"/>
                </li>
                <li>
                    <img src="https://picsum.photos/200" alt="photo"/>
                </li>
                <li>
                    <img src="https://picsum.photos/200" alt="photo"/>
                </li>
                <li>
                    <img src="https://picsum.photos/200" alt="photo"/>
                </li>
            </ul>
        </div>
        </>
    );
}