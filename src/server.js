const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const port = process.env.PORT || 3000;
const app = express();

app.post('/', (_req, res) => {
    const twiml = new VoiceResponse();
    twiml.say('hello world');

    res.type('text/xml');
    res.status(200).send(twiml.toString());
});

app.listen(port, () => console.log('app listening on port:', port));
