# React + Redux + Firebase = Book Library Example + Authentication
This project is a simple book library using React, Redux & Firebase.
* Register and Login
* View Books List
* Sort, Filter and Search Items
* View Book Details
* Add Books To Favorite List

## Demo online
[blasterxl.github.io/react-frontend-library](https://blasterxl.github.io/react-frontend-library/)

## About
Using technologies:
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/rackt/redux)
* [React Router](https://github.com/rackt/react-router)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Redux Dev Tools Extensions](https://github.com/zalmoxisus/redux-devtools-extension)
* [Semantic UI React](http://react.semantic-ui.com/) React UI components
* [Firebase](https://www.npmjs.com/package/firebase) - Database and Authentication
* [Webpack](http://webpack.github.io) for bundling
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [style-loader](https://github.com/webpack/style-loader) and [sass-loader](https://github.com/jtangelder/sass-loader) to allow import of stylesheets in plain css and sass

## Installation
``` code
git clone https://github.com/blasterxl/react-frontend-library.git
cd react-frontend-library
npm install
```
## Firebase settings
First you need to create your firebase application to fetch settings. For more information how to add your web app check this [resource](https://firebase.google.com/docs/web/setup). After it copy your settings from firebase and fill config/firebase.env

```code
API_KEY=YOUR_SETTINGS
AUTH_DOMAIN=YOUR_SETTINGS
DATABASE_URL=YOUR_SETTINGS
STORAGE_BUCKET=YOUR_SETTINGS
SENDLER_ID=YOUR_SETTINGS
```

## Running dev server
``` code
npm run start
```
Default server is running on port `3000`. If you want to change, you can edit at `server.js`.
Go to: `http://localhost:3000`. You also must configure firebase.env file in /config.

## Building production
``` code
npm run buid
```
It generates static file `public/bundle.js`.

You can run `public/index.html`

## Documents
* [Firebase Docs](https://firebase.google.com/docs/)
