# Patient Relations Management System (Barebones)

## System Requirements

-   NodeJS installed on system
-   Ngrok CLI installed on system and an Ngrok account
-   Expo Go app installed on mobile
-   Expo account

## Setup

```sh
git clone
npm install

cd prm-backend
npm install
```

## Running

1. First start the backend Strapi API

```sh
cd prm-backend
npm start
```

Copy the Strapi API key and paste it in the `.env` file

In another terminal, run ngrok

```sh
npx ngrok http 1337
```

Copy the forward URL and paste it in the `.env` file

2. Then, run the app

```sh
npm start
```

Open the Expo Go app, login to your account and scan the QR code to run the app natively on your mobile device
