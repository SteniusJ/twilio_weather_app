const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const debugUtil = require('./modules/debug_utils');
require('dotenv').config()

const port = process.env.PORT || 3000;

const app = express();

app.post('/', async (req, res) => {
    debugUtil.log('new request');

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=60.16852&lon=24.93545&units=metric&appid=${process.env.OW_API_KEY}`, {
        method: "GET"
    });

    console.log(resp);

    const twiml = new VoiceResponse();
    twiml.say('hello world');

    res.type('text/xml');
    res.status(200).send(twiml.toString());
});

app.listen(port, () => console.log('app listening on port:', port));
