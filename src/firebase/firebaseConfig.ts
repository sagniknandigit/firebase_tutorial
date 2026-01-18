import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSj2RTmQu-CaER31ueNn6UiMteHnCwfNA",
  authDomain: "rn-firebase-auth-73bfb.firebaseapp.com",
  projectId: "rn-firebase-auth-73bfb",
  storageBucket: "rn-firebase-auth-73bfb.firebasestorage.appT",
  messagingSenderId: "3498999796",
  appId: "1:3498999796:web:3161c1ae324fea195303a1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
