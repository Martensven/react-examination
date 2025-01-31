import { useState, useEffect } from "react";

import colors from "./Colors";
import ShuffleArray from "./ShuffleArray";

const Card = () => {
    const [clickedCards, setClickedCards] = useState([]); // Lagrar upp till två klickade kort
    const [shuffledColors, setShuffledColors] = useState([]); // Lagrar blandade färger
    const [removedCards, setRemovedCards] = useState([]); // Lagrar index för borttagna kort
    const [scores, setScores] = useState({ player1: 0, player2: 0 }); // Lagrar poängen för båda spelarna
    const [currentPlayer, setCurrentPlayer] = useState(1); // Håller reda på vilken spelares tur det är
    const [isProcessing, setIsProcessing] = useState(false); // Förhindrar klick under bearbetning
    const [winner, setWinner] = useState(null); // Håller reda på vinnaren vid spelets slut

    // Kör ShuffleArray en gång när komponenten laddas eller när spelet startas om
    useEffect(() => {
        startNewGame(false); // Initiera spelet utan att återställa poäng
    }, []);

    const startNewGame = (resetScores) => {
        const shuffled = ShuffleArray(colors);
        setShuffledColors(shuffled);
        setRemovedCards([]);
        setClickedCards([]);
        setCurrentPlayer(1);
        setWinner(null);
        if (resetScores) {
            setScores({ player1: 0, player2: 0 });
        }
    };

    const toggleCardColor = (index) => {
        if (isProcessing || winner) return; // Förhindra klick under bearbetning eller om spelet är över

        // Kolla om kortet redan är klickat eller borttaget
        if (
            clickedCards.some((card) => card.index === index) ||
            removedCards.includes(index)
        )
            return;

        // Lägg till det nya kortet i clickedCards
        const newClickedCards = [
            ...clickedCards,
            { index, color: shuffledColors[index].name },
        ];

        setClickedCards(newClickedCards);

        // Om två kort har klickats
        if (newClickedCards.length === 2) {
            setIsProcessing(true); // Sätt bearbetning till true för att förhindra fler klick

            const [firstCard, secondCard] = newClickedCards;

            if (firstCard.color === secondCard.color) {
                // Matchning: Öka poängen för aktuell spelare och markera kort som borttagna
                setScores((prevScores) => {
                    const playerKey = currentPlayer === 1 ? "player1" : "player2";
                    return { ...prevScores, [playerKey]: prevScores[playerKey] + 1 };
                });

                setTimeout(() => {
                    setRemovedCards((prev) => [...prev, firstCard.index, secondCard.index]);
                    setClickedCards([]);
                    setIsProcessing(false);

                    // Kontrollera om spelet är över
                    if (removedCards.length + 2 === shuffledColors.length) {
                        determineWinner(); // Avgör vinnaren
                    } else {
                        setCurrentPlayer((prev) => (prev === 1 ? 2 : 1)); // Byt spelare
                    }
                }, 500);
            } else {
                // Ingen matchning: Återställ clickedCards efter en fördröjning och byt spelare
                setTimeout(() => {
                    setClickedCards([]);
                    setIsProcessing(false);
                    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
                }, 1000);
            }
        }
    };

    const determineWinner = () => {
        if (scores.player1 > scores.player2) {
            setWinner("Spelare 1 vinner denna omgång!");
        } else if (scores.player2 > scores.player1) {
            setWinner("Spelare 2 vinner denna omgång!");
        } else {
            setWinner("Denna omgång blev det oavgjort!");
        }
    };

    return (
        <div className="memory-main">
            {winner ? (
                <h1>{winner}</h1>
            ) : (
                <>
                    <div className="scoreboard">
                        <h2>Poäng</h2>
                        <p>Spelare 1: {scores.player1}</p>
                        <p>Spelare 2: {scores.player2}</p>
                        <p>Nuvarande tur: Spelare {currentPlayer}</p>
                    </div>
                    <div className="memory-box">
                        <article className="card-container">
                            {shuffledColors.map((color, index) =>
                                removedCards.includes(index) ? (
                                    // Rendera removedCard för borttagna kort
                                    <section
                                        key={index}
                                        className="removedCard"
                                        style={{
                                            backgroundColor: "rgba(255, 255, 255, 0)",
                                        }}
                                    ></section>
                                ) : (
                                    // Rendera klickbara kort
                                    <section
                                        key={index}
                                        className="card"
                                        style={{
                                            backgroundColor: clickedCards.some(
                                                (card) => card.index === index
                                            )
                                                ? color.name.toLowerCase()
                                                : "brown", // Dold färg
                                        }}
                                        onClick={() => toggleCardColor(index)} // Hantera klick
                                    ></section>
                                )
                            )}
                        </article>
                    </div>
                </>
            )}
            <button onClick={() => startNewGame(false)}>Starta ny omgång (behåll poäng)</button>
            <button onClick={() => startNewGame(true)}>Starta nytt spel (nollställ poäng)</button>
        </div>
    );
};

export default Card;