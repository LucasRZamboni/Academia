# 🔥 Configuração do Firebase - Academia App

Este documento explica como configurar o Firebase para o aplicativo de academia, incluindo autenticação, banco de dados e armazenamento de imagens.

## 📋 Pré-requisitos

1. Conta no Google (para acessar Firebase Console)
2. Node.js instalado
3. Projeto configurado com as dependências do Firebase

## 🚀 Passo a Passo

### 1. Criar Projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Criar um projeto"
3. Digite o nome do projeto (ex: "academia-app")
4. Desabilite o Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Authentication

1. No painel lateral, clique em "Authentication"
2. Clique em "Começar"
3. Vá para a aba "Sign-in method"
4. Habilite os métodos desejados:
   - **Email/Password**: Para login com email
   - **Anonymous**: Para usuários anônimos (recomendado)

### 3. Configurar Firestore Database

1. No painel lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha "Começar no modo de teste" (para desenvolvimento)
4. Selecione uma localização (ex: us-central1)

### 4. Configurar Storage (Opcional - para imagens)

1. No painel lateral, clique em "Storage"
2. Clique em "Começar"
3. Aceite as regras padrão
4. Escolha a mesma localização do Firestore

### 5. Obter Configurações do Projeto

1. No painel lateral, clique na engrenagem ⚙️
2. Clique em "Configurações do projeto"
3. Role para baixo até "Seus aplicativos"
4. Clique no ícone da web `</>`
5. Digite um nome para o app (ex: "academia-web")
6. **NÃO** marque "Também configurar o Firebase Hosting"
7. Clique em "Registrar app"
8. Copie as configurações do `firebaseConfig`

### 6. Configurar o Projeto Local

1. Abra o arquivo `src/config/firebase.js`
2. Substitua as configurações de exemplo pelas suas:

```javascript
const firebaseConfig = {
  apiKey: "sua-api-key-real",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "seu-app-id"
}
```

### 7. Instalar Dependências

```bash
npm install firebase
```

## 🗄️ Estrutura do Banco de Dados

### Coleção: `users`

Cada documento representa um usuário:

```javascript
{
  id: "user-id",
  name: "Nome do Usuário",
  email: "usuario@email.com",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z",
  preferences: {
    theme: "dark",
    notifications: true,
    language: "pt-BR"
  },
  workoutPlan: {
    "Segunda-feira": ["supino-reto", "supino-inclinado"],
    "Terça-feira": ["desenvolvimento-militar", "rosca-direta"],
    // ... outros dias
  },
  workoutHistory: [
    {
      id: "workout-id",
      date: "2024-01-01T00:00:00.000Z",
      day: "Segunda-feira",
      exercises: ["supino-reto", "supino-inclinado"],
      duration: 45,
      notes: "Treino pesado",
      completed: true
    }
  ],
  statistics: {
    totalWorkouts: 10,
    totalExercises: 50,
    averageWorkoutDuration: 45,
    favoriteExercises: ["supino-reto"],
    lastWorkout: "2024-01-01T00:00:00.000Z"
  }
}
```

## 🔐 Regras de Segurança

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários só podem acessar seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules (se usar)

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /exercises/{allPaths=**} {
      allow read: if true; // Imagens públicas
      allow write: if request.auth != null; // Apenas usuários autenticados podem fazer upload
    }
  }
}
```

## 🖼️ Sistema de Imagens

### Modo Atual: Local
- Imagens ficam na pasta `public/images/exercises/`
- Funciona offline
- Não requer configuração adicional

### Modo Futuro: Nuvem
Para migrar para nuvem, edite `src/utils/imagePaths.js`:

```javascript
const IMAGE_CONFIG = {
  mode: 'cloud', // Mudar de 'local' para 'cloud'
  cloud: {
    firebase: {
      baseUrl: 'https://firebasestorage.googleapis.com/v0/b/',
      bucket: 'seu-projeto.appspot.com',
      folder: 'exercises/'
    }
  }
}
```

## 🚀 Funcionalidades Implementadas

### ✅ Autenticação
- Login anônimo (sem cadastro)
- Login com email/senha
- Criação de conta
- Logout

### ✅ Banco de Dados
- Salvar plano de treino personalizado
- Histórico de treinos
- Estatísticas do usuário
- Sincronização em tempo real

### ✅ Modo Offline
- Fallback para localStorage
- Sincronização automática quando voltar online
- Dados sempre disponíveis

### ✅ Interface
- Modal de autenticação
- Indicador de usuário logado
- Loading states
- Tratamento de erros

## 🔧 Comandos Úteis

### Instalar dependências
```bash
npm install
```

### Executar em desenvolvimento
```bash
npm run dev
```

### Fazer build
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```

## 🐛 Solução de Problemas

### Erro: "Firebase App named '[DEFAULT]' already exists"
- Reinicie o servidor de desenvolvimento
- Verifique se não há múltiplas inicializações do Firebase

### Erro: "Permission denied"
- Verifique as regras do Firestore
- Confirme se o usuário está autenticado

### Erro: "Network request failed"
- Verifique sua conexão com a internet
- Confirme se as configurações do Firebase estão corretas

### Dados não salvam
- Verifique o console do navegador para erros
- Confirme se o usuário está logado
- Verifique as regras de segurança do Firestore

## 📱 Próximos Passos

1. **Configurar Firebase Hosting** (opcional)
2. **Implementar notificações push**
3. **Adicionar mais métodos de autenticação** (Google, Facebook)
4. **Migrar imagens para Firebase Storage**
5. **Implementar backup automático**
6. **Adicionar analytics**

## 🔗 Links Úteis

- [Firebase Console](https://console.firebase.google.com/)
- [Documentação Firebase](https://firebase.google.com/docs)
- [Firestore Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Auth](https://firebase.google.com/docs/auth)

## 💡 Dicas

1. **Desenvolvimento**: Use regras permissivas no Firestore
2. **Produção**: Configure regras restritivas
3. **Backup**: Configure backup automático no Firebase
4. **Monitoramento**: Use Firebase Analytics para insights
5. **Performance**: Use índices no Firestore para consultas complexas
