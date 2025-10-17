// Configuração do Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Configuração do Firebase usando variáveis de ambiente
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAn7rjwL87JbcYSzhukOvUH3zZzCOfkb0U",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "traineeworkout-fc6af.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "traineeworkout-fc6af",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "traineeworkout-fc6af.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "241295755279",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:241295755279:web:36e6fa5f591275baacfb7a",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-P6Q8QVY8S6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar serviços
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app
