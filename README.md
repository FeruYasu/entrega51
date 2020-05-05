# Trama App

## What is it

Trama App is an online event provider, built with [twilio-video.js](https://github.com/twilio/twilio-video.js) and [Create React App](https://github.com/facebook/create-react-app).

This is a preview app.

* Server Back-end with Node.js, Docker and Postgres. 
* Video and Chat built on Twilio Chat and Video API.
* There is no cost associated with deploying the app
* When using the app, you will be charged [$0.01 / video participant minute](https://www.twilio.com/video/pricing).

![App Preview](https://drive.google.com/uc?export=view&id=1EPnE9ssI6kEII2QI-Raz7BzltFFb_w4R)
![App Preview1](https://drive.google.com/uc?export=view&id=1Dk_ZYnpPK2CyVIM3u3Y8P2GjHbRHR_Ao)
![App Preview2](https://drive.google.com/uc?export=view&id=1ZBqwnzSpx9lRks60raU1neYHaytyIb0d)
![App Preview3](https://drive.google.com/uc?export=view&id=1upQBmCHqB5Rjzy1SlshqIXHwcOt_lM4V)
![App Preview4](https://drive.google.com/uc?export=view&id=1dECxGIYUdXSFQY-pMoiKEVGMMFWHLFce)

## Prerequisites

You must have the following installed:

* [Node.js v10+](https://nodejs.org/en/download/)
* NPM v6+ (comes installed with newer Node versions)
* Docker (and create)

## Install Dependencies

Run `npm install` to install all dependencies from NPM.

If you want to use `yarn` to install dependencies, first run the [yarn import](https://classic.yarnpkg.com/en/docs/cli/import/) command. This will ensure that yarn installs the package versions that are specified in `package-lock.json`.

## Update .ENV
The app requires the .env to be updated from the .env.example file. 

### Twilio Credentials
You must provide the Twilio Credentials for the Video and Chat Token generation. 

- Create an account in the [Twilio Console](https://www.twilio.com/console).
- Click on 'Settings' and take note of your Account SID.
- Create a new API Key in the [API Keys Section](https://www.twilio.com/console/video/project/api-keys) under Programmable Video Tools in the Twilio Console. Take note of the SID and Secret of the new API key.
- Store your Account SID, API Key SID, and API Key Secret in a new file called `.env` in the root level of the application (example below).

    $ TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    $ TWILIO_API_KEY_SID=SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    $ TWILIO_API_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    $ TWILIO_CHAT_SERVICE_SID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Docker Settings
    $ DB_HOST=
    $ DB_USER=
    $ DB_PASS=
    $ DB_NAME=

## Configure Docker and the Database
Install and open Docker.

docker version
docker run --name DBNAME -e POSTGRES_PASSWORD=DBPSW -p DBPORT:DBPORT -d postgres
docker start DBNAME


## Server Twilio Features

The Server has the following features:
- [x] Video Token Generation
- [x] Chat Token Generation


## Browser Support

See browser support table for [twilio-video.js SDK](https://github.com/twilio/twilio-video.js/tree/master/#browser-support).


### Running the App locally

Run the app locally with

    $ npm start

This will start the local token server and run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to see the application in the browser.


## License

See the [LICENSE](LICENSE) file for details.
