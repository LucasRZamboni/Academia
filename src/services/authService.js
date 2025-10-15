// Serviço de autenticação simples
import { 
  signInAnonymously as firebaseSignInAnonymously, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { createOrGetUser } from './userService'

// Autenticação anônima (para usuários que não querem criar conta)
export const signInAnonymously = async () => {
  try {
    const userCredential = await firebaseSignInAnonymously(auth)
    const user = userCredential.user
    
    // Criar ou obter dados do usuário
    const userData = await createOrGetUser(user.uid, {
      name: 'Usuário Anônimo',
      email: user.email || ''
    })
    
    return { user, userData }
  } catch (error) {
    console.error('Erro na autenticação anônima:', error)
    throw error
  }
}

// Login com email e senha
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    
    // Obter dados do usuário
    const userData = await createOrGetUser(user.uid, {
      name: user.displayName || user.email.split('@')[0],
      email: user.email
    })
    
    return { user, userData }
  } catch (error) {
    console.error('Erro no login:', error)
    throw error
  }
}

// Criar conta com email e senha
export const createAccount = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    
    // Criar dados do usuário
    const userData = await createOrGetUser(user.uid, {
      name: name || user.email.split('@')[0],
      email: user.email
    })
    
    return { user, userData }
  } catch (error) {
    console.error('Erro ao criar conta:', error)
    throw error
  }
}

// Logout
export const signOutUser = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    console.error('Erro no logout:', error)
    throw error
  }
}

// Escutar mudanças no estado de autenticação
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // Obter dados do usuário
        const userData = await createOrGetUser(user.uid, {
          name: user.displayName || user.email?.split('@')[0] || 'Usuário',
          email: user.email || ''
        })
        callback({ user, userData })
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error)
        callback({ user, userData: null })
      }
    } else {
      callback(null)
    }
  })
}

// Obter usuário atual
export const getCurrentUser = () => {
  return auth.currentUser
}

// Verificar se usuário está logado
export const isUserLoggedIn = () => {
  return !!auth.currentUser
}
