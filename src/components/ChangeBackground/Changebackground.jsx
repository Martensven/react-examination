// import React, { useEffect } from "react";
// import { setBackground } from "../redux/BackgroundSlice";
// import { useDispatch, useSelector } from "react-redux";

// const ChangeBackgroundImage = () => {
//     const dispatch = useDispatch();
//     const backgroundImage = useSelector((state) => state.background.imageUrl);

//     useEffect(() => {
//         if (backgroundImage) {
//             document.body.style.backgroundImage = `url(${backgroundImage})`;
//             document.body.style.backgroundSize = "cover";
//             document.body.style.backgroundRepeat = "no-repeat";
//         }
//     }, [backgroundImage]);

//     const changeBackgroundImage = async (url) => {
//         try {
//             const img = new Image();
//             img.src = url;

//             await new Promise((resolve, reject) => {
//                 img.onload = resolve;
//                 img.onerror = reject;
//             });

//             dispatch(setBackground(url));
//         } catch (error) {
//             console.error("Failed to load image:", error);
//             alert("Could not load the image. Please check the URL.");
//         }
//     };

//     return (
//         <div className="BgFix">
//             <button
//                 onClick={() =>
//                     changeBackgroundImage(
//                         "https://upload.wikimedia.org/wikipedia/commons/3/3b/Good_Morning_From_the_International_Space_Station.jpg"
//                     )
//                 }
//             >
//                 Space Image
//             </button>
//             <button
//                 onClick={() =>
//                     changeBackgroundImage(
//                         "https://upload.wikimedia.org/wikipedia/commons/2/23/018_Human_looking_at_the_stars_during_Perseids_with_the_Milky_Way_in_the_background_Photo_by_Giles_Laurent.jpg"
//                     )
//                 }
//             >
//                 Starry Sky
//             </button>
//             <button
//                 onClick={() =>
//                     changeBackgroundImage(
//                         "https://upload.wikimedia.org/wikipedia/commons/6/66/Sunlight_and_stormy_sky_over_the_mountains_and_paddy_fields_in_Vang_Vieng%2C_Laos.jpg"
//                     )
//                 }
//             >
//                 Stormy Mountains
//             </button>
//         </div>
//     );
// };

// export default ChangeBackgroundImage;

import React, { useState, useEffect } from "react";
import { setBackground } from "../redux/BackgroundSlice";
import { useDispatch, useSelector } from "react-redux";

const ChangeBackgroundImage = () => {
    const dispatch = useDispatch();
    const backgroundImage = useSelector((state) => state.background.imageUrl);
    const [showDropdown, setShowDropdown] = useState(false); // State för att visa/dölja dropdown

    useEffect(() => {
        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
        }
    }, [backgroundImage]);

    const changeBackgroundImage = async (url) => {
        try {
            const img = new Image();
            img.src = url;

            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
            });

            dispatch(setBackground(url));
            setShowDropdown(false); // Stäng dropdown efter val
        } catch (error) {
            console.error("Failed to load image:", error);
            alert("Could not load the image. Please check the URL.");
        }
    };

    return (
        <div className="BgFix">
            <button onClick={() => setShowDropdown(!showDropdown)}>Theme</button>

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