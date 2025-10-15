// Serviço para gerenciar usuários e treinos no Firebase
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy
} from 'firebase/firestore'
import { db } from '../config/firebase'

// Estrutura de dados para usuário
const createUserStructure = (userId, userData = {}) => ({
  id: userId,
  name: userData.name || 'Usuário',
  email: userData.email || '',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'pt-BR'
  },
  workoutPlan: {
    // Estrutura padrão de treino ABC
    'Segunda-feira': [
      'supino-reto', 'supino-inclinado', 'pullover', 'pulley-frente', 'remada-curvada', 'lat-pulldown'
    ],
    'Terça-feira': [
      'desenvolvimento-militar', 'elevacao-lateral-halter', 'encolhimento-ombro', 'rosca-direta', 
      'rosca-concentrada', 'triceps-testa', 'cable-tricep-extension'
    ],
    'Quarta-feira': [
      'hack-squat', 'leg-press', 'stiff-leg-deadlift', 'cadeira-extensora', 'cadeira-flexora', 
      'maquina-panturrilha-sentada', 'maquina-panturrilha-pe'
    ],
    'Quinta-feira': [
      'supino-reto', 'supino-inclinado', 'pullover', 'pulley-frente', 'remada-curvada', 'lat-pulldown'
    ],
    'Sexta-feira': [
      'desenvolvimento-militar', 'elevacao-lateral-halter', 'encolhimento-ombro', 'rosca-direta', 
      'rosca-concentrada', 'triceps-testa', 'cable-tricep-extension'
    ],
    'Sábado': [
      'hack-squat', 'leg-press', 'stiff-leg-deadlift', 'cadeira-extensora', 'cadeira-flexora', 
      'maquina-panturrilha-sentada', 'maquina-panturrilha-pe'
    ],
    'Domingo': [] // Dia de descanso
  },
  workoutHistory: [], // Histórico de treinos realizados
  statistics: {
    totalWorkouts: 0,
    totalExercises: 0,
    averageWorkoutDuration: 0,
    favoriteExercises: [],
    lastWorkout: null
  }
})

// Criar ou obter usuário
export const createOrGetUser = async (userId, userData = {}) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      // Usuário já existe, retornar dados
      return { id: userSnap.id, ...userSnap.data() }
    } else {
      // Criar novo usuário
      const newUser = createUserStructure(userId, userData)
      await setDoc(userRef, newUser)
      return newUser
    }
  } catch (error) {
    console.error('Erro ao criar/obter usuário:', error)
    throw error
  }
}

// Atualizar plano de treino do usuário
export const updateUserWorkoutPlan = async (userId, workoutPlan) => {
  try {
    const userRef = doc(db, 'users', userId)
    await updateDoc(userRef, {
      workoutPlan: workoutPlan,
      updatedAt: new Date().toISOString()
    })
    return true
  } catch (error) {
    console.error('Erro ao atualizar plano de treino:', error)
    throw error
  }
}

// Obter plano de treino do usuário
export const getUserWorkoutPlan = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      const userData = userSnap.data()
      return userData.workoutPlan || {}
    }
    return {}
  } catch (error) {
    console.error('Erro ao obter plano de treino:', error)
    throw error
  }
}

// Adicionar treino ao histórico
export const addWorkoutToHistory = async (userId, workoutData) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      const userData = userSnap.data()
      const workoutHistory = userData.workoutHistory || []
      
      const newWorkout = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        day: workoutData.day,
        exercises: workoutData.exercises,
        duration: workoutData.duration || 0,
        notes: workoutData.notes || '',
        completed: workoutData.completed || false
      }
      
      workoutHistory.unshift(newWorkout) // Adicionar no início
      
      // Manter apenas os últimos 100 treinos
      if (workoutHistory.length > 100) {
        workoutHistory.splice(100)
      }
      
      // Atualizar estatísticas
      const statistics = userData.statistics || {}
      statistics.totalWorkouts = workoutHistory.filter(w => w.completed).length
      statistics.totalExercises = workoutHistory.reduce((total, w) => total + (w.exercises?.length || 0), 0)
      statistics.lastWorkout = newWorkout.date
      
      await updateDoc(userRef, {
        workoutHistory: workoutHistory,
        statistics: statistics,
        updatedAt: new Date().toISOString()
      })
      
      return newWorkout
    }
    throw new Error('Usuário não encontrado')
  } catch (error) {
    console.error('Erro ao adicionar treino ao histórico:', error)
    throw error
  }
}

// Obter histórico de treinos
export const getUserWorkoutHistory = async (userId, limit = 50) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      const userData = userSnap.data()
      const workoutHistory = userData.workoutHistory || []
      return workoutHistory.slice(0, limit)
    }
    return []
  } catch (error) {
    console.error('Erro ao obter histórico de treinos:', error)
    throw error
  }
}

// Atualizar preferências do usuário
export const updateUserPreferences = async (userId, preferences) => {
  try {
    const userRef = doc(db, 'users', userId)
    await updateDoc(userRef, {
      preferences: preferences,
      updatedAt: new Date().toISOString()
    })
    return true
  } catch (error) {
    console.error('Erro ao atualizar preferências:', error)
    throw error
  }
}

// Obter estatísticas do usuário
export const getUserStatistics = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      const userData = userSnap.data()
      return userData.statistics || {}
    }
    return {}
  } catch (error) {
    console.error('Erro ao obter estatísticas:', error)
    throw error
  }
}

// Escutar mudanças em tempo real no usuário
export const subscribeToUser = (userId, callback) => {
  const userRef = doc(db, 'users', userId)
  
  return onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      callback({ id: doc.id, ...doc.data() })
    } else {
      callback(null)
    }
  }, (error) => {
    console.error('Erro ao escutar mudanças do usuário:', error)
    callback(null)
  })
}

// Modo offline - salvar no localStorage como fallback
export const saveToLocalStorage = (userId, data) => {
  try {
    localStorage.setItem(`user_${userId}`, JSON.stringify(data))
    localStorage.setItem(`user_${userId}_timestamp`, Date.now().toString())
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error)
  }
}

// Modo offline - carregar do localStorage como fallback
export const loadFromLocalStorage = (userId) => {
  try {
    const data = localStorage.getItem(`user_${userId}`)
    if (data) {
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Erro ao carregar do localStorage:', error)
  }
  return null
}

// Sincronizar dados offline com Firebase quando voltar online
export const syncOfflineData = async (userId) => {
  try {
    const offlineData = loadFromLocalStorage(userId)
    if (offlineData) {
      const userRef = doc(db, 'users', userId)
      await setDoc(userRef, {
        ...offlineData,
        updatedAt: new Date().toISOString()
      }, { merge: true })
      
      // Limpar dados offline após sincronização
      localStorage.removeItem(`user_${userId}`)
      localStorage.removeItem(`user_${userId}_timestamp`)
      
      return true
    }
  } catch (error) {
    console.error('Erro ao sincronizar dados offline:', error)
  }
  return false
}
