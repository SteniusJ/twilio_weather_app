const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const debugUtil = require('./modules/debug_utils');
require('dotenv').config();

const port = process.env.PORT || 3000;
const OW_API_KEY = process.env.OW_API_KEY || undefined;

if (OW_API_KEY === undefined) throw new Error('No API key found in .env');

const app = express();

app.post('/', async (req, res) => {
    debugUtil.log('new request');

    let weatherTTS = 'Sorry, I could not retrieve the weather right now.';

    try {
        const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=60.16852&lon=24.93545&units=metric&appid=${OW_API_KEY}`,
            { method: 'GET' }
        );

        if (!resp.ok) return res.status(404);

        const data = await resp.json();

        const location = data.name; 

        const temp = data.main && typeof data.main.temp === 'number'
            ? Math.round(data.main.temp)
            : null;

        const feelsLike = data.main && typeof data.main.feels_like === 'number'
            ? Math.round(data.main.feels_like)
            : null;

        const desc = data.weather && data.weather[0] && data.weather[0].description
            ? data.weather[0].description
            : null;

        const windSpeed = data.wind && typeof data.wind.speed === 'number'
            ? Math.round(data.wind.speed)
            : null;

        if (temp || desc || windSpeed) {
            weatherTTS = `The current weather in ${location} is `;
            if (desc) weatherTTS += `${desc}, `;
            if (temp !== null) {
                weatherTTS += `temperature ${temp} degrees Celsius`;
                if (feelsLike !== null) {
                    weatherTTS += `, feels like ${feelsLike} degrees`;
                }
                weatherTTS += ', ';
            }
            if (windSpeed !== null) weatherTTS += `wind speed ${windSpeed} meters per second.`;
        }

    } catch (err) {
        debugUtil.log('weather fetch error', err?.message || err);
    }

    const twiml = new VoiceResponse();
    twiml.say(weatherTTS);
    // "The current weather in Helsinki is broken clouds, temperature 5 degrees Celsius, feels like 5 degrees, wind speed 4 meters per second."


    res.type('text/xml');
    res.status(200).send(twiml.toString());
});

app.listen(port, () => console.log('app listening on port:', port));

module.exports = app;
