import React, { useState, useEffect } from "react";
import { setBackground } from "../redux/BackgroundSlice"; // Importerar Redux-action för att ändra bakgrundsbild
import { useDispatch, useSelector } from "react-redux"; // Importerar hooks för Redux-hantering

const ChangeBackgroundImage = () => {
    const dispatch = useDispatch(); // Skapar en dispatch-funktion för att skicka actions till Redux-store
    const backgroundImage = useSelector((state) => state.background.imageUrl); // Hämtar nuvarande bakgrundsbild från Redux-state

    const [showDropdown, setShowDropdown] = useState(false); // State för att styra visningen av dropdown-menyn

    // useEffect körs varje gång backgroundImage uppdateras
    useEffect(() => {
        if (backgroundImage) {
            // Sätter bakgrundsbilden för hela sidan
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.style.backgroundSize = "cover"; // Ser till att bilden täcker hela bakgrunden
            document.body.style.backgroundRepeat = "no-repeat"; // Förhindrar att bilden upprepas
        }
    }, [backgroundImage]); // Körs när backgroundImage ändras

    // Funktion för att byta bakgrundsbild
    const changeBackgroundImage = async (url) => {
        try {
            const img = new Image(); // Skapar en ny Image-instans
            img.src = url;

            // Väntar på att bilden laddas innan den används
            await new Promise((resolve, reject) => {
                img.onload = resolve; // Laddas bilden korrekt? Fortsätt.
                img.onerror = reject; // Misslyckades laddningen? Kasta ett fel.
            });

            dispatch(setBackground(url)); // Uppdaterar Redux-state med den nya bildadressen
            setShowDropdown(false); // Stänger dropdown-menyn efter valet
        } catch (error) {
            console.error("Failed to load image:", error);
            alert("Could not load the image. Please check the URL."); // Visar ett felmeddelande om bilden inte kunde laddas
        }
    };

    return (
        <div className="BgFix">
            {/* Knapp för att öppna/stänga dropdown-menyn */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Theme</button>

            {/* Dropdown-meny som endast visas om showDropdown är true */}
            {showDropdown && (
                <ul className="dropdown-menu1">
                    <li onClick={() => changeBackgroundImage("https://upload.wikimedia.org/wikipedia/commons/3/3b/Good_Morning_From_the_International_Space_Station.jpg")}>
                        Space Image
                    </li>
                    <li onClick={() => changeBackgroundImage("https://upload.wikimedia.org/wikipedia/commons/2/23/018_Human_looking_at_the_stars_during_Perseids_with_the_Milky_Way_in_the_background_Photo_by_Giles_Laurent.jpg")}>
                        Starry Sky
                    </li>
                    <li onClick={() => changeBackgroundImage("https://upload.wikimedia.org/wikipedia/commons/6/66/Sunlight_and_stormy_sky_over_the_mountains_and_paddy_fields_in_Vang_Vieng%2C_Laos.jpg")}>
                        Stormy Mountains
                    </li>
                </ul>
            )}
        </div>
    );
};

export default ChangeBackgroundImage;