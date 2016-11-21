import firebase from 'firebase';

try {
  const config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.SENDLER_ID
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export const firebaseRef = firebase.database().ref();

export default firebase;