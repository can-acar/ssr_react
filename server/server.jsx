import cors from "cors";
import express from "express";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";
import {Helmet} from "react-helmet";
import {HelmetProvider} from "react-helmet-async";
import App from "../src/app";
import {Html} from "./html";

const whitelist = ["http://localhost:3000", "https://localhost:3001"];
const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(null, false);
        }
    },
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "device-remember-token", "Access-Control-Allow-Origin", "Origin", "Accept"]
};


const app = express();

app.disable("x-powered-by");

app.use(cors(corsOptions));

console.log(path.join(__dirname, '../public'));

app.use(express.static(path.join(__dirname, '../public')))

app.use("/assets",express.static(path.join(__dirname, '../public')));

app.use("/assets/js",express.static(path.join(__dirname, '../public')));
app.use("/assets/css",express.static(path.join(__dirname, '../public')));
app.use("/assets/img",express.static(path.join(__dirname, '../public')));
//app.use("/js", express.static("/assets"));
//
// app.use("/assets/js", express.static("public"));
//
// app.use("/assets/img", express.static("public"));
//
// app.use("/assets/media", express.static("public"));
//
// app.use("/assets/css", express.static("public"));

const helmetContext = {
    htmlAttributes: {lang: "tr"}
};

let statsFile;
let extractor;

app.get("/*", (req, res) => {

    // if(process.env.NODE_ENV === "development"){
    //     extractor = new ChunkExtractor({
    //         statsFile: path.resolve("build/loadable-stats.json"),
    //         entrypoints: ["client"],
    //         publicPath: "http://localhost:3000/",
    //     });
    // }

    const helmet = Helmet.renderStatic();

    console.log(helmet);

    const context = {}

    const content = renderToString(<HelmetProvider context={helmetContext}><App/></HelmetProvider>);

    const response = Html({content, title: "ssr first test", helmet});

    res.send(response);

});


export default app;
