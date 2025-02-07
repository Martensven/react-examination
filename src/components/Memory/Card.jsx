import { useState, useEffect } from "react";

import colors from "./Colors"; // Importerar en lista med färger
import ShuffleArray from "./ShuffleArray"; // Funktion för att blanda färgerna slumpmässigt

const Card = () => {
    // State-hantering
    const [clickedCards, setClickedCards] = useState([]); // Lagrar upp till två klickade kort
    const [shuffledColors, setShuffledColors] = useState([]); // Lagrar de blandade färgerna
    const [removedCards, setRemovedCards] = useState([]); // Lagrar index för borttagna kort
    const [scores, setScores] = useState({ player1: 0, player2: 0 }); // Håller poäng för båda spelarna
    const [currentPlayer, setCurrentPlayer] = useState(1); // Spårar aktuell spelare (1 eller 2)
    const [isProcessing, setIsProcessing] = useState(false); // Förhindrar klick under bearbetning
    const [winner, setWinner] = useState(null); // Håller reda på om någon har vunnit

    // useEffect körs en gång vid första renderingen för att starta spelet
    useEffect(() => {
        startNewGame(false); // Initiera spelet utan att återställa poäng
    }, []);

    // Startar ett nytt spel, antingen med eller utan att återställa poängen
    const startNewGame = (resetScores) => {
        const shuffled = ShuffleArray(colors); // Blandar färgerna slumpmässigt
        setShuffledColors(shuffled);
        setRemovedCards([]); // Återställer borttagna kort
        setClickedCards([]); // Återställer klickade kort
        setCurrentPlayer(1); // Återställer till spelare 1
        setWinner(null); // Tar bort eventuell vinnarinformation
        if (resetScores) {
            setScores({ player1: 0, player2: 0 }); // Återställer poängen om nödvändigt
        }
    };

    // Hanterar klick på ett kort
    const toggleCardColor = (index) => {
        if (isProcessing || winner) return; // Förhindrar klick om spelet bearbetar eller är slut

        // Kontrollera om kortet redan är klickat eller borttaget
        if (clickedCards.some((card) => card.index === index) || removedCards.includes(index)) {
            return;
        }

        // Lägg till det nya kortet i clickedCards-arrayen
        const newClickedCards = [...clickedCards, { index, color: shuffledColors[index].name }];
        setClickedCards(newClickedCards);

        // När två kort har klickats, jämför dem
        if (newClickedCards.length === 2) {
            setIsProcessing(true); // Förhindra fler klick medan vi jämför korten

            const [firstCard, secondCard] = newClickedCards;

            if (firstCard.color === secondCard.color) {
                // Om färgerna matchar, öka poäng för aktuell spelare
                setScores((prevScores) => {
                    const playerKey = currentPlayer === 1 ? "player1" : "player2";
                    return { ...prevScores, [playerKey]: prevScores[playerKey] + 1 };
                });

                setTimeout(() => {
                    // Lägg till korten i removedCards och rensa clickedCards
                    setRemovedCards((prev) => [...prev, firstCard.index, secondCard.index]);
                    setClickedCards([]);
                    setIsProcessing(false);

                    // Kontrollera om alla kort är borttagna och spelet är slut
                    if (removedCards.length + 2 === shuffledColors.length) {
                        determineWinner(); // Avgör vinnaren
                    } else {
                        setCurrentPlayer((prev) => (prev === 1 ? 2 : 1)); // Byt spelare
                    }
                }, 500);
            } else {
                // Om färgerna inte matchar, återställ clickedCards efter en kort fördröjning
                setTimeout(() => {
                    setClickedCards([]);
                    setIsProcessing(false);
                    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1)); // Byt spelare
                }, 1000);
            }
        }
    };

    useEffect(() => {
        if (removedCards.length === shuffledColors.length) {
            // Kontrollera vinnaren efter att alla kort är borttagna
            if (scores.player1 > scores.player2) {
                setWinner("Spelare 1 vinner denna omgång!");
            } else if (scores.player2 > scores.player1) {
                setWinner("Spelare 2 vinner denna omgång!");
            } else {
                setWinner("Denna omgång blev det oavgjort!");
            }
        }
    }, [removedCards, scores]); // Körs när removedCards eller scores uppdateras

    return (
        <div className="memory-main">
            {winner ? (
                <h1>{winner}</h1>
            ) : (
                <>
                    {/* Poängtavla */}
                    <div className="scoreboard">
                        <h2>Poäng</h2>
                        <p>Spelare 1: {scores.player1}</p>
                        <p>Spelare 2: {scores.player2}</p>
                        <p>Nuvarande tur: Spelare {currentPlayer}</p>
                    </div>

                    {/* Spelplanen */}
                    <div className="memory-box">
                        <article className="card-container">
                            {shuffledColors.map((color, index) =>
                                removedCards.includes(index) ? (
                                    // Rendera en tom ruta för borttagna kort
                                    <section
                                        key={index}
                                        className="removedCard"
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                                    ></section>
                                ) : (
                                    // Rendera kort som kan klickas
                                    <section
                                        key={index}
                                        className="card"
                                        style={{
                                            backgroundColor: clickedCards.some((card) => card.index === index)
                                                ? color.name.toLowerCase() // Visa färgen om kortet är klickat
                                                : "brown", // Annars visa dold färg
                                        }}
                                        onClick={() => toggleCardColor(index)} // Hantera klick
                                    ></section>
                                )
                            )}
                        </article>
                    </div>
                </>
            )}

            {/* Knapp för att starta ny omgång */}
            <button onClick={() => startNewGame(false)}>Starta ny omgång (behåll poäng)</button>

            {/* Knapp för att starta nytt spel och nollställa poäng */}
            <button onClick={() => startNewGame(true)}>Starta nytt spel (nollställ poäng)</button>
        </div>
    );
};

export default Card;