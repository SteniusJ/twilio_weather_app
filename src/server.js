const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const debugUtil = require('./modules/debug_utils');
require('dotenv').config()

const port = process.env.PORT || 3000;

const app = express();

app.post('/', (req, res) => {
    debugUtil.log('new request');

    const twiml = new VoiceResponse();
    twiml.say('hello world');

    res.type('text/xml');
    res.status(200).send(twiml.toString());
});

app.listen(port, () => console.log('app listening on port:', port));
