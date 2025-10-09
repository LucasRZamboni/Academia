import React, { useState } from 'react'
import TipsModal from './TipsModal'
import ExerciseImageModal from './ExerciseImageModal'

const ExerciseListItem = ({ name, series, reps, notes, icon, restTime = "60-90s", imagePath, isSelected, onToggle }) => {
  const [showTips, setShowTips] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const handleCardClick = (e) => {
    // Evita abrir o modal se clicar nos botões
    if (e.target.closest('button')) return
    setShowImage(true)
  }

  return (
    <>
      <div 
        className={`exercise-list-item group cursor-pointer p-3 md:p-4 lg:p-3 xl:p-2 border-l-4 transition-all ${
          isSelected 
            ? 'border-accent-500 bg-accent-900/20' 
            : 'border-dark-600 bg-dark-800/50 hover:border-accent-400 hover:bg-dark-700/50'
        }`}
        onClick={handleCardClick}
        title="Clique para ver a imagem do exercício"
      >
        {/* Layout horizontal compacto */}
        <div className="flex items-center justify-between gap-2 lg:gap-3">
          {/* Checkbox de seleção */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggle()
            }}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
              isSelected
                ? 'border-accent-500 bg-accent-500 text-white'
                : 'border-dark-400 hover:border-accent-400'
            }`}
          >
            {isSelected && <i className="fas fa-check text-xs"></i>}
          </button>

          {/* Título e ícone */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {icon && (
              <div className="w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center text-white text-xs flex-shrink-0">
                <i className={icon}></i>
              </div>
            )}
            <div className="text-xs md:text-sm lg:text-xs xl:text-sm font-bold text-dark-100 group-hover:text-white transition-colors leading-tight truncate">
              {name}
            </div>
          </div>
          
          {/* Badges compactos */}
          <div className="flex gap-1 lg:gap-2 items-center flex-shrink-0">
            <span className="series-badge text-xs px-2 py-1 lg:px-1.5 lg:py-0.5">
              <i className="fas fa-layer-group mr-1 lg:mr-0.5"></i>
              <span className="hidden sm:inline">{series}s</span>
              <span className="sm:hidden">{series}</span>
            </span>
            <span className="reps-badge text-xs px-2 py-1 lg:px-1.5 lg:py-0.5">
              <i className="fas fa-repeat mr-1 lg:mr-0.5"></i>
              <span className="hidden sm:inline">{reps}</span>
              <span className="sm:hidden">{reps.split('-')[0]}</span>
            </span>
          </div>
          
          {/* Botão de dicas */}
          <button 
            onClick={(e) => {
              e.stopPropagation()
              setShowTips(true)
            }}
            className="w-5 h-5 lg:w-4 lg:h-4 rounded-full bg-primary-500/20 hover:bg-primary-500/30 flex items-center justify-center text-primary-400 hover:text-primary-300 transition-colors flex-shrink-0"
            title="Ver dicas"
          >
            <i className="fas fa-lightbulb text-xs"></i>
          </button>
        </div>
        
        {/* Notas - apenas em telas menores */}
        {notes && (
          <div className="text-xs text-dark-300 italic bg-dark-700/60 px-2 py-1 rounded mt-2 lg:hidden">
            <i className="fas fa-info-circle mr-1"></i>
            {notes}
          </div>
        )}
        
        {/* Informações de tempo - apenas em telas menores */}
        <div className="flex items-center justify-between text-xs text-dark-400 mt-2 lg:hidden">
          <div className="flex items-center gap-1">
            <i className="fas fa-clock"></i>
            <span>{restTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-image"></i>
            <span>Clique para ver</span>
          </div>
        </div>
      </div>
      
      <TipsModal isOpen={showTips} onClose={() => setShowTips(false)} />
      <ExerciseImageModal 
        isOpen={showImage} 
        onClose={() => setShowImage(false)} 
        exerciseName={name}
        imagePath={imagePath}
      />
    </>
  )
}

export default ExerciseListItem
