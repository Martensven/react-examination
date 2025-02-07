import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
    // State för att hålla reda på om stoppuret är igång eller ej
    const [isRunning, setIsRunning] = useState(false);

    // State för att hålla reda på hur lång tid som har gått
    const [elapsedTime, setElapsedTime] = useState(0);

    // useRef används för att lagra intervallets ID och starttiden utan att orsaka renderingar
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    // useEffect körs varje gång isRunning ändras
    useEffect(() => {
        if (isRunning) {
            // Starta en intervalltimer som uppdaterar elapsedTime var 10:e millisekund
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        // Cleanup-funktion som rensas när komponenten avmonteras eller isRunning ändras
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    // Startar stoppuret
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime; // Justerar starttiden för att fortsätta från rätt tid
    }

    // Stoppar stoppuret
    function stop() {
        setIsRunning(false);
    }

    // Återställer stoppuret
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    // Omvandlar tiden till formatet MM:SS:MS
    function formatTime() {
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        // Säkerställer att siffrorna alltid har två tecken (t.ex. "01" istället för "1")
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch-container">
            <div className="stopwatch">
                {/* Visar tiden i formatet MM:SS:MS */}
                <div className="display">{formatTime()}</div>

                {/* Knappar för att styra stoppuret */}
                <div className="controls">
                    <button onClick={start} className="startBtn">Start</button>
                    <button onClick={stop} className="stopBtn">Stop</button>
                    <button onClick={reset} className="resetBtn">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;