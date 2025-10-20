# How To Run Bot
``.env needed with Open API weather key titled OW_API_KEY``

## 1 Npm
``npm run dev``

## 2 Docker Compose
``Docker compose build``
``Docker compose up``

## 3 Docker Image
``docker build . -t twilio_weather_app
docker run -d -p 80:3000 --env-file .env twilio_weather_app``


# Route
``http://ec2-13-62-103-150.eu-north-1.compute.amazonaws.com ``