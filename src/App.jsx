import React, { useState, useEffect } from 'react'
import Periodization from './components/Periodization'
import ExerciseCategory from './components/ExerciseCategory'
import RestInfo from './components/RestInfo'
import AdvancedExerciseManagement from './components/AdvancedExerciseManagement'
import { allExercises } from './data/exercisesData'

function App() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [showManagement, setShowManagement] = useState(false)
  const [dayExercises, setDayExercises] = useState({})

  // Carregar seleções por dia do localStorage
  useEffect(() => {
    // Limpar localStorage antigo para forçar nova estrutura
    localStorage.removeItem('dayExercises')
    localStorage.removeItem('selectedExercises') // Limpar também o antigo
    
    const saved = localStorage.getItem('dayExercises')
    
    if (saved) {
      const parsedData = JSON.parse(saved)
      setDayExercises(parsedData)
    } else {
      // Por padrão, configurar treino ABC por dia da semana
      const defaultDayExercises = {
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
      
      setDayExercises(defaultDayExercises)
      localStorage.setItem('dayExercises', JSON.stringify(defaultDayExercises))
    }
  }, [])

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
  const handleSaveDayExercises = (day, exercises) => {
    setDayExercises(prev => ({
      ...prev,
      [day]: exercises
    }))
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 pb-8 sm:pb-12 pt-6 sm:pt-10">
        {/* Botão de gestão */}
        <div className="text-center mb-6 sm:mb-8">
          <button
            onClick={() => setShowManagement(true)}
            className="glass-card p-3 sm:p-4 hover:bg-primary-900/30 transition-colors inline-flex items-center gap-2 sm:gap-3"
          >
            <i className="fas fa-cog text-primary-400"></i>
            <span className="text-dark-100 font-medium text-sm sm:text-base">Gerenciar Exercícios</span>
          </button>
        </div>

        <Periodization selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        
        {selectedDay && (
          <div className="mt-8 sm:mt-12 animate-fade-in">
            {getWorkoutComponent(selectedDay)}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
