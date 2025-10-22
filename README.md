# How To Run app
The app can be ran with any of the following options.

Docker compose or image is recommended.

## Prerequisites
A .env file is needed with a valid Open Weather Map API key

This can be acquired for free from: https://openweathermap.org/

### .env example:
``
OW_API_KEY={valid Open Weather Map API key}
``

<br>

## Options

### 1 Npm
Running the app without a container can be done by first installing the packages using:

``npm install``

And then running the application by using:

``npm run start``

Or
``npm run dev``
For dev mode

<br>

### 2 Docker Compose
Running the app using docker compose can be done by:

Building the image:

``Docker compose build``

Running the image:

``Docker compose up``

<br>

### 3 Docker Image
Running the app using docker images can be done by:

Building the image:

``docker build . -t twilio_weather_app``

<br>

Running the image:

In detached mode:

``docker run -d -p 3000:3000 --env-file .env twilio_weather_app``

or attached to terminal:

``docker run -p 3000:3000 --env-file .env twilio_weather_app``

<br>

# Route
``http://ec2-13-62-103-150.eu-north-1.compute.amazonaws.com``
