const express = require('express');
const axios = require('axios');;
const app = express();
const port = 80;
const API = process.env.API_MONO;
const monoClientInfo = `https://api.monobank.ua/personal/client-info/`;


setTimeout(() => {
    axios.get(monoClientInfo, {
        params: {
          "X-Token": API
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
}, 1000 * 65);
