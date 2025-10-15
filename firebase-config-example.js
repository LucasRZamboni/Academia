// Exemplo de configuração do Firebase
// Copie este arquivo para src/config/firebase.js e preencha com suas configurações

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

// Como obter essas configurações:
// 1. Acesse https://console.firebase.google.com/
// 2. Selecione seu projeto
// 3. Clique na engrenagem ⚙️ > Configurações do projeto
// 4. Role para baixo até "Seus aplicativos"
// 5. Clique no ícone da web </>
// 6. Copie as configurações do firebaseConfig
