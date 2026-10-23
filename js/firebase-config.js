// Firebase Configuration — Tasmiya & Zabi (Wishes Wall)
// Project: zabi-tasmiya-1d50c

var firebaseConfig = {
  apiKey: "AIzaSyArsSGpVTr46z64N0sEc2ocQzkbo4GIjhI",
  authDomain: "zabi-tasmiya-1d50c.firebaseapp.com",
  databaseURL: "https://zabi-tasmiya-1d50c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zabi-tasmiya-1d50c",
  storageBucket: "zabi-tasmiya-1d50c.firebasestorage.app",
  messagingSenderId: "1033519030453",
  appId: "1:1033519030453:web:d36e9c798d3fb426351efc"
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
}
