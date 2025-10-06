import React, { useState } from 'react'
import Periodization from './components/Periodization'
import ChestBack from './components/ChestBack'
import ShouldersArms from './components/ShouldersArms'
import Legs from './components/Legs'
import RestInfo from './components/RestInfo'

function App() {
  const [selectedDay, setSelectedDay] = useState(null)

  const getWorkoutComponent = (day) => {
    switch(day) {
      case 'Peito + Costas':
        return <ChestBack />
      case 'Ombros + Braços':
        return <ShouldersArms />
      case 'Pernas':
        return <Legs />
      case 'Descanso':
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
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 pb-12 pt-10">
        <Periodization selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        
        {selectedDay && (
          <div className="mt-12 animate-fade-in">
            {getWorkoutComponent(selectedDay)}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
