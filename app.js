const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 80;
const API = process.env.API_MONO;
const options = {
  protocol: "https:",
  host: "api.monobank.ua",
  port: 443,
  method: "GET",
  path: "/personal/client-info",
  headers: {
    "X-Token": "uFDX8z8vWtABeZUESDP8ZTfirfI7ewdjcqz4EDFBYYis",
  },
};

//const resp = `

let today = Math.round(new Date().getTime() / 1000).toString();
let fromDate = (new Date("2021.10.18").getTime() / 1000).toString();

const optionsStatement = {
  protocol: "https:",
  host: "api.monobank.ua",
  port: 443,
  method: "GET",
  path: "/personal/statement/0/1634504400",
  headers: {
    "X-Token": "uFDX8z8vWtABeZUESDP8ZTfirfI7ewdjcqz4EDFBYYis",
  },
};

const askMono = function (options) {
  https
    .get(options, (res) => {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${res.headers}`);
      res.setEncoding("utf8");

      res.on("data", (chunk) => {
        fs.writeFile('res.json', JSON.stringify(chunk), (err)=>{
          if (err) console.error(err);
        });
        console.log(`BODY: ${JSON.stringify(chunk[0])}`);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
  console.log("Request has been sent");
  
};

askMono(optionsStatement);
//setInterval(askMono, 90 * 1000, options);




