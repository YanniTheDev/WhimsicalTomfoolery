import "../ReusableStyles/Flex.css";
import "../ReusableStyles/Fonts.css";
import "../ReusableStyles/Colours.css";

import "../ComponentsCSS/HomePage.css";

export const HomePage = () => {
    return (
        <div className="home-container flex-s-c flex-dir-col">
            <div className="title-container flex-c-c">
                <h1 className="title comic-sans">Whimsical Tomfoolery</h1>
            </div>

            <div className="messages flex-c-c flex-dir-col">
                <p>
                    I feel like you guys have some questions. 
                </p>
            </div>

            <div className="farewell">

            </div>
        </div>
    );
}