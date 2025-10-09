import React, { useState } from 'react'
import TipsModal from './TipsModal'
import ExerciseImageModal from './ExerciseImageModal'

const ExerciseCard = ({ name, series, reps, notes, icon, restTime = "60-90s", imagePath }) => {
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
        className="exercise-card group h-full cursor-pointer p-3 md:p-6" 
        onClick={handleCardClick}
        title="Clique para ver a imagem do exercício"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {icon && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center text-white text-xs">
                <i className={icon}></i>
              </div>
            )}
            <div className="text-xs md:text-sm font-bold text-dark-100 group-hover:text-white transition-colors leading-tight">
              {name}
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              setShowTips(true)
            }}
            className="w-6 h-6 rounded-full bg-primary-500/20 hover:bg-primary-500/30 flex items-center justify-center text-primary-400 hover:text-primary-300 transition-colors"
            title="Ver dicas"
          >
            <i className="fas fa-lightbulb text-xs"></i>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1 md:gap-2 items-center mb-2 md:mb-3">
          <span className="series-badge text-xs px-2 py-1">
            <i className="fas fa-layer-group mr-1"></i>
            {series}s
          </span>
          <span className="reps-badge text-xs px-2 py-1">
            <i className="fas fa-repeat mr-1"></i>
            {reps}
          </span>
        </div>
        
        {notes && (
          <div className="text-xs text-dark-300 italic bg-dark-700/60 px-2 py-1 rounded mb-2 md:mb-3">
            <i className="fas fa-info-circle mr-1"></i>
            {notes}
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs text-dark-400">
          <div className="flex items-center gap-1">
            <i className="fas fa-clock"></i>
            <span>{restTime} entre séries</span>
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

export default ExerciseCard
