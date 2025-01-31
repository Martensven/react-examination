import React, { useState } from "react";
import TimeOfDay from "./TimeOfDay";
import AskName from "./Askname";



const Greeting = () => {
    const [name, setName] = useState(""); // Hantera namnet i Greeting

    return (
        <>
            <div className="greetings-container">
                <div className="greetings">

                    {/* Visa hälsning */}
                    <h1>
                        <TimeOfDay />{name && `, ${name}`} {/* Om ett namn finns, lägg till det */}
                    </h1>
                    {/* Fråga efter namnet */}
                    <AskName onNameSubmit={(enteredName) => setName(enteredName)} />
                </div>
            </div>
        </>
    );
};

export default Greeting;