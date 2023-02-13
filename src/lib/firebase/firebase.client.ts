// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	PUBLIC_FIREBASE_APIKEY,
	PUBLIC_AUTHDOMAIN,
	PUBLIC_PROJECT_ID,
	PUBLIC_STORAGEBUCKET,
	PUBLIC_MESSAGING_SENDER_ID,
	PUBLIC_APP_ID,
	PUBLIC_MEASUREMENT_ID
} from "$env/static/public";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_APIKEY,
	authDomain: PUBLIC_AUTHDOMAIN,
	projectId: PUBLIC_PROJECT_ID,
	storageBucket: PUBLIC_STORAGEBUCKET,
	messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
	appId: PUBLIC_APP_ID,
	measurementId: PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
