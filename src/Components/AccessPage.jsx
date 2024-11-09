import "../ReusableStyles/Flex.css";
import "../ReusableStyles/Fonts.css";

import "../ComponentsCSS/AccessPage.css";

export const AccessPage = () => {
    return (
        <div className="access-page-container flex-c-c flex-dir-col segoe-ui">
            <h1 className="title hack-green">Access Page</h1>

            <h3 className="header hack-green">Please Enter Your <em>FULL</em> Name and Access Token</h3>

            <p className="hack-green">NAME:</p>
            <input type="text" placeholder="FULL NAME?"/>

            <p className="hack-green">Access Token:</p>
            <input type="text" placeholder="TOKEN?"/>
        </div>
    );
}