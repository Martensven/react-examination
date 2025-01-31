import { useRef } from "react";

function AskName({ onNameSubmit }) {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        const enteredName = inputRef.current.value; // Hämta värdet från input
        onNameSubmit(enteredName); // Skicka värdet till Greeting-komponenten
    };

    const resetButton = () => {
        inputRef.current.value = ""; // Reset inputfältet
        onNameSubmit(""); // Skicka en tom sträng
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleButtonClick(); // Om Enter trycks, trigga knappens onClick
        } else if (e.key === "Escape") {
            resetButton(); // Om Escape trycks, återställ fältet
        }
    };


    return (
        <>
            <input
                ref={inputRef}
                type="text"
                placeholder="Vad heter du?"
                onKeyPress={handleKeyPress} // Lyssna på tangenttryckningar
            />
            <button onClick={handleButtonClick}>Enter</button>
            <button onClick={resetButton}>Reset</button>
        </>
    );
}

export default AskName;