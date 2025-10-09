import React from 'react'

const Periodization = ({ selectedDay, onDaySelect }) => {
  const days = [
    { 
      day: 'Segunda-feira', 
      workout: 'Treino Personalizado', 
      icon: 'fas fa-dumbbell',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-900/20'
    },
    { 
      day: 'Terça-feira', 
      workout: 'Treino Personalizado', 
      icon: 'fas fa-cogs',
      color: 'from-warning-500 to-warning-600',
      bgColor: 'bg-warning-900/20'
    },
    { 
      day: 'Quarta-feira', 
      workout: 'Treino Personalizado', 
      icon: 'fas fa-running',
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-900/20'
    },
    { 
      day: 'Quinta-feira', 
      workout: 'Treino Personalizado', 
      icon: 'fas fa-dumbbell',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-900/20'
    },
    { 
      day: 'Sexta-feira', 
      workout: 'Treino Personalizado', 
      icon: 'fas fa-cogs',
      color: 'from-warning-500 to-warning-600',
      bgColor: 'bg-warning-900/20'
    },
    { 
      day: 'Sábado', 
      workout: 'Treino Personalizado', 
      icon: 'fas fa-running',
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-900/20'
    },
    { 
      day: 'Domingo', 
      workout: 'Descanso', 
      isRest: true,
      icon: 'fas fa-bed',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-900/20'
    }
  ]

  const handleDayClick = (dayName) => {
    onDaySelect(dayName)
  }

  return (
    <div className="mb-16">
      <h2 className="section-title">PERIODIZAÇÃO</h2>
      <p className="text-center text-dark-300 italic mb-8 text-lg max-w-2xl mx-auto">
        Clique em um dia da semana para ver os exercícios do treino
      </p>
      {/* Mobile Layout - Lista Compacta */}
      <div className="block md:hidden space-y-2">
        {days.map((day, index) => (
          <div 
            key={index} 
            onClick={() => handleDayClick(day.day)}
            className={`flex items-center justify-between p-3 rounded-xl bg-dark-800/80 backdrop-blur-lg border border-dark-600/50 hover:bg-dark-700/90 transition-all duration-300 cursor-pointer ${selectedDay === day.day ? 'border-accent-500 bg-accent-900/20' : ''} ${day.isRest ? 'opacity-75' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className={`w-7 h-7 rounded-full bg-gradient-to-r ${day.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                <i className={`${day.icon} text-xs`}></i>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-dark-100 truncate">
                  {day.day}
                </div>
                <div className="text-dark-300 text-xs truncate">
                  {day.workout}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              {!day.isRest && (
                <div className="text-xs text-dark-400 bg-dark-700/60 px-2 py-1 rounded-full">
                  <i className="fas fa-clock mr-1"></i>
                  <span className="hidden xs:inline">60-90min</span>
                  <span className="xs:hidden">60-90</span>
                </div>
              )}
              {selectedDay === day.day && (
                <div className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - Grid Responsivo */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4 lg:gap-6">
        {days.map((day, index) => (
          <div 
            key={index} 
            onClick={() => handleDayClick(day.day)}
            className={`card ${day.isRest ? 'card-rest' : ''} ${selectedDay === day.day ? 'card-active' : ''} group relative overflow-hidden`}
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
