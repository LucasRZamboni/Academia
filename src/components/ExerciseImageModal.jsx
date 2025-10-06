import React, { useEffect } from 'react'

const ExerciseImageModal = ({ isOpen, onClose, exerciseName, imagePath }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="icon-wrapper">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-100">{exerciseName}</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-dark-700 hover:bg-dark-600 flex items-center justify-center text-dark-300 hover:text-white transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="relative">
          {imagePath ? (
            <img 
              src={imagePath} 
              alt={exerciseName}
              className="w-full h-auto max-h-[60vh] object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          
          <div 
            className="hidden w-full h-60 bg-dark-700 rounded-lg flex items-center justify-center text-dark-400"
            style={{ display: imagePath ? 'none' : 'flex' }}
          >
            <div className="text-center">
              <i className="fas fa-image text-4xl mb-4"></i>
              <p>Imagem não encontrada</p>
              <p className="text-sm mt-2">Adicione a imagem em: /public/images/exercises/</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-dark-700/50 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-dark-300">
            <i className="fas fa-info-circle"></i>
            <span>Clique fora, pressione ESC ou clique no X para fechar</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseImageModal
