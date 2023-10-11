import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

import frodo from "./images/frodo.jpg";
import olive from "./images/olive.jpg";
import peach from "./images/peach.jpg";
import shrek from "./images/shrek.jpg";


function App({dogs}) {
    return (
        <div>
          <BrowserRouter>
            <NavBar dogs={dogs} />
            <div className="container">
                <Routes dogs={dogs} />
            </div>
          </BrowserRouter>
        </div>
    );
}

export const dogs = [
    {
        name: "Frodo",
        age: 4,
        src: frodo,
        facts: [
            "Frodo loves to play fetch.",
            "Frodo loves to have his belly rubbed.",
            "Frodo loves to nap."
        ]
    },
    {
        name: "Olive",
        age: 2,
        src: olive,
        facts: [
            "Olive is a prissy girl.",
            "Olive is very affectionate.",
            "Olive love to eat fish."

        ]
    },
    {
        name: "Peach",
        age: 5,
        src: peach,
        facts: [
            "Peach is very timid.",
            "Peach is very loyal.",
            "Peach is a big eater."
        ]
    },
    {
        name: "Shrek",
        age: 6,
        src: shrek,
        facts: [
            "Shrek is still a puppy at heart.",
            "Shrek loves going on long walks.",
            "Shrek is very good around children."
        ]
    }
];

App.defaultProps = { dogs };

export default App;