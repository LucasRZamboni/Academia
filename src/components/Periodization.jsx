import React from 'react'

const Periodization = ({ selectedDay, onDaySelect }) => {
  const days = [
    { 
      day: 'Segunda', 
      workout: 'Peito + Costas', 
      icon: 'fas fa-dumbbell',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-900/20'
    },
    { 
      day: 'Terça', 
      workout: 'Ombros + Braços', 
      icon: 'fas fa-hand-paper',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-900/20'
    },
    { 
      day: 'Quarta', 
      workout: 'Pernas', 
      icon: 'fas fa-running',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-900/20'
    },
    { 
      day: 'Quinta', 
      workout: 'Peito + Costas', 
      icon: 'fas fa-dumbbell',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-900/20'
    },
    { 
      day: 'Sexta', 
      workout: 'Ombros + Braços', 
      icon: 'fas fa-hand-paper',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-900/20'
    },
    { 
      day: 'Sábado', 
      workout: 'Pernas', 
      icon: 'fas fa-running',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-900/20'
    },
    { 
      day: 'Domingo', 
      workout: 'Descanso', 
      isRest: true,
      icon: 'fas fa-bed',
      color: 'from-dark-500 to-dark-600',
      bgColor: 'bg-dark-700/20'
    }
  ]

  const handleDayClick = (workout) => {
    if (workout === 'Descanso') {
      onDaySelect('Descanso')
    } else {
      onDaySelect(workout)
    }
  }

  return (
    <div className="mb-16">
      <h2 className="section-title">PERIODIZAÇÃO</h2>
      <p className="text-center text-dark-300 italic mb-8 text-lg max-w-2xl mx-auto">
        Clique em um dia da semana para ver os exercícios do treino
      </p>
      {/* Mobile Layout - Lista Compacta */}
      <div className="block md:hidden space-y-3">
        {days.map((day, index) => (
          <div 
            key={index} 
            onClick={() => handleDayClick(day.workout)}
            className={`flex items-center justify-between p-4 rounded-xl bg-dark-800/80 backdrop-blur-lg border border-dark-600/50 hover:bg-dark-700/90 transition-all duration-300 cursor-pointer ${selectedDay === day.workout ? 'border-accent-500 bg-accent-900/20' : ''} ${day.isRest ? 'opacity-75' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${day.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                <i className={`${day.icon} text-xs`}></i>
              </div>
              <div>
                <div className="text-lg font-bold text-dark-100">
                  {day.day}
                </div>
                <div className="text-dark-300 text-sm">
                  {day.workout}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!day.isRest && (
                <div className="text-xs text-dark-400 bg-dark-700/60 px-2 py-1 rounded-full">
                  <i className="fas fa-clock mr-1"></i>
                  <span>60-90min</span>
                </div>
              )}
              {selectedDay === day.workout && (
                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - Grid Original */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6">
        {days.map((day, index) => (
          <div 
            key={index} 
            onClick={() => handleDayClick(day.workout)}
            className={`card ${day.isRest ? 'card-rest' : ''} ${selectedDay === day.workout ? 'card-active' : ''} group relative overflow-hidden`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`absolute inset-0 ${day.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${day.color} flex items-center justify-center text-white shadow-lg`}>
                  <i className={`${day.icon} text-sm`}></i>
                </div>
                <div className="text-xs font-semibold text-dark-300 bg-dark-700/80 px-2 py-1 rounded-full">
                  Dia {index + 1}
                </div>
              </div>
              <div className="text-xl font-bold text-dark-100 mb-2 group-hover:text-white transition-colors">
                {day.day}
              </div>
              <div className="text-dark-300 font-medium text-sm leading-relaxed">
                {day.workout}
              </div>
              {!day.isRest && (
                <div className="mt-4 flex items-center text-xs text-dark-400">
                  <i className="fas fa-clock mr-1"></i>
                  <span>60-90 min</span>
                </div>
              )}
              {selectedDay === day.workout && (
                <div className="mt-3 flex items-center text-xs text-accent-400">
                  <i className="fas fa-check-circle mr-1"></i>
                  <span>Selecionado</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Periodization
