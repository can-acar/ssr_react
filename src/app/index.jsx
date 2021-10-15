import React from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import styles from "../assets/css/index.css"

const helmetContext = {
    htmlAttributes: {lang: "tr"}
};

const App = (props) => {
    return (
        <HelmetProvider context={helmetContext}>
            <Helmet htmlAttributes={{lang: "tr"}}>
                <title> React Server Render v1.0</title>
            </Helmet>
            <div>
                <div style={styles}>SSR React</div>
                <button onClick={() => console.log("click me")}>clickci</button>
            </div>
        </HelmetProvider>
    );
};

export default App;
