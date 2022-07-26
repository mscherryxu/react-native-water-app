import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0hic9ueXowzWe2W-w2EsC6Ay_3WYMSVY',
  authDomain: 'react-native-water-app.firebaseapp.com',
  projectId: 'react-native-water-app',
  storageBucket: 'react-native-water-app.appspot.com',
  messagingSenderId: '748060280639',
  appId: '1:748060280639:web:26ffe35aab461fb1ec358a',
  measurementId: 'G-Z0KEBPGL1M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
export default app;
