const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/', (req, res) => {
    const twiml = new VoiceResponse();
    twiml.say('Hello World');

    res.type('text/xml');
    res.send(twiml.toString());
});

app.listen(3000, () => {
    console.log('app listening on port: 3000')
});
