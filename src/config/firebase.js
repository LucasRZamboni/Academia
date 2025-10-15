// Configuração do Firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Configuração do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "seu-app-id"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar serviços
export const db = getFirestore(app)
export const auth = getAuth(app)

export default app
