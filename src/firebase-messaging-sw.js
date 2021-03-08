importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyAQsNML05dUTVV8eqoUzxuBKuUSstFI_x4",
    authDomain: "pwa-push-4e920.firebaseapp.com",
    projectId: "pwa-push-4e920",
    storageBucket: "pwa-push-4e920.appspot.com",
    messagingSenderId: "759456610194",
    appId: "1:759456610194:web:77f717798ec7d5492d734b"
});

const messaging = firebase.messaging();