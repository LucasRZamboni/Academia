import React, { useState, useEffect } from 'react'
import Periodization from './components/Periodization'
import ExerciseCategory from './components/ExerciseCategory'
import RestInfo from './components/RestInfo'
import AdvancedExerciseManagement from './components/AdvancedExerciseManagement'
import AuthModal from './components/AuthModal'
import { allExercises } from './data/exercisesData'
import { onAuthStateChange } from './services/authService'
import { updateUserWorkoutPlan, getUserWorkoutPlan, subscribeToUser } from './services/userService'

function App() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [showManagement, setShowManagement] = useState(false)
  const [dayExercises, setDayExercises] = useState({})
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [loading, setLoading] = useState(true)

  // Configurar autenticação e carregar dados do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (authData) => {
      setLoading(true)
      
      if (authData) {
        setUser(authData.user)
        setUserData(authData.userData)
        
        // Carregar plano de treino do Firebase
        try {
          const workoutPlan = await getUserWorkoutPlan(authData.user.uid)
          if (workoutPlan && Object.keys(workoutPlan).length > 0) {
            setDayExercises(workoutPlan)
          } else {
            // Usar plano padrão se não houver dados no Firebase
            setDayExercises(authData.userData.workoutPlan || getDefaultWorkoutPlan())
          }
        } catch (error) {
          console.error('Erro ao carregar plano de treino:', error)
          // Fallback para localStorage
          const saved = localStorage.getItem('dayExercises')
          if (saved) {
            setDayExercises(JSON.parse(saved))
          } else {
            setDayExercises(getDefaultWorkoutPlan())
          }
        }
      } else {
        setUser(null)
        setUserData(null)
        
        // Modo offline - carregar do localStorage
        const saved = localStorage.getItem('dayExercises')
        if (saved) {
          setDayExercises(JSON.parse(saved))
        } else {
          setDayExercises(getDefaultWorkoutPlan())
        }
      }
      
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Função para obter plano de treino padrão
  const getDefaultWorkoutPlan = () => {
    return {
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
    }
  }

  const getWorkoutComponent = (day) => {
    // Se for domingo, mostrar tela de descanso
    if (day === 'Domingo') {
      return (
        <div className="text-center py-12">
          <div className="glass-card max-w-md mx-auto">
            <div className="icon-wrapper mx-auto mb-4">
              <i className="fas fa-bed"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-100 mb-4">Dia de Descanso</h3>
            <p className="text-dark-300 mb-6">
              Aproveite para se recuperar! O descanso é fundamental para o crescimento muscular.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-success-900/30 p-3 rounded-lg">
                <div className="text-success-400 font-semibold mb-1">Hidratação</div>
                <div className="text-success-300">2-3L por dia</div>
              </div>
              <div className="bg-primary-900/30 p-3 rounded-lg">
                <div className="text-primary-400 font-semibold mb-1">Sono</div>
                <div className="text-primary-300">7-9 horas</div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Para os outros dias, mostrar exercícios específicos
    const dayExerciseIds = dayExercises[day] || []
    const selectedExercises = {}
    
    // Criar objeto de seleções apenas com os exercícios deste dia
    dayExerciseIds.forEach(exerciseId => {
      selectedExercises[exerciseId] = true
    })
    
    return <ExerciseCategory categoryName={day} selectedExercises={selectedExercises} />
  }

  // Função para salvar as seleções por dia
  const handleSaveDayExercises = async (day, exercises) => {
    const updatedExercises = {
      ...dayExercises,
      [day]: exercises
    }
    
    setDayExercises(updatedExercises)
    
    // Salvar no localStorage como fallback
    localStorage.setItem('dayExercises', JSON.stringify(updatedExercises))
    
    // Salvar no Firebase se usuário estiver logado
    if (user) {
      try {
        await updateUserWorkoutPlan(user.uid, updatedExercises)
      } catch (error) {
        console.error('Erro ao salvar no Firebase:', error)
        // Dados já foram salvos no localStorage como fallback
      }
    }
  }

  // Função para lidar com sucesso na autenticação
  const handleAuthSuccess = () => {
    setShowAuthModal(false)
  }

  // Se estiver mostrando a tela de gestão
  if (showManagement) {
    return (
      <AdvancedExerciseManagement 
        onBack={() => setShowManagement(false)}
        onSave={handleSaveDayExercises}
        dayExercises={dayExercises}
        selectedDay={selectedDay}
      />
    )
  }

  // Mostrar loading enquanto carrega dados
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-8 text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-primary-400 mb-4"></i>
          <p className="text-dark-300">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-12 pt-6 sm:pt-10">
        {/* Header com informações do usuário */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowManagement(true)}
              className="bg-dark-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-dark-600/50 p-3 sm:p-4 hover:bg-primary-900/30 transition-colors inline-flex items-center gap-2 sm:gap-3"
            >
              <i className="fas fa-cog text-primary-400"></i>
              <span className="text-dark-100 font-medium text-sm sm:text-base">Gerenciar Exercícios</span>
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            {user ? (
              <div className="glass-card p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-sm"></i>
                </div>
                <div className="hidden sm:block">
                  <div className="text-dark-100 font-medium text-sm">{userData?.name || 'Usuário'}</div>
                  <div className="text-dark-400 text-xs">
                    {user.isAnonymous ? 'Modo Anônimo' : user.email}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-dark-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-dark-600/50 p-3 hover:bg-primary-900/30 transition-colors inline-flex items-center gap-2"
              >
                <i className="fas fa-sign-in-alt text-primary-400"></i>
                <span className="text-dark-100 font-medium text-sm">Entrar</span>
              </button>
            )}
          </div>
        </div>

        <Periodization selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        
        {selectedDay && (
          <div className="mt-8 sm:mt-12 animate-fade-in">
            {getWorkoutComponent(selectedDay)}
          </div>
        )}
      </div>

      {/* Modal de autenticação */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  )
}

export default App
