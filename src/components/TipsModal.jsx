import React from 'react'

const TipsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="icon-wrapper">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-100">Dicas Importantes</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-dark-700 hover:bg-dark-600 flex items-center justify-center text-dark-300 hover:text-white transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Aquecimento */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
              <i className="fas fa-fire"></i>
            </div>
            <div>
              <h4 className="font-semibold text-dark-100 mb-2">Aquecimento</h4>
              <p className="text-sm text-dark-300 leading-relaxed">
                Sempre aqueça por 5-10 minutos antes do treino. Use movimentos dinâmicos e exercícios de mobilidade para preparar o corpo e prevenir lesões.
              </p>
            </div>
          </div>
          
          {/* Progressão */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h4 className="font-semibold text-dark-100 mb-2">Progressão</h4>
              <p className="text-sm text-dark-300 leading-relaxed">
                Aumente gradualmente o peso e intensidade. A regra é: quando conseguir fazer todas as repetições com facilidade, é hora de aumentar a carga.
              </p>
            </div>
          </div>
          
          {/* Técnica */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
              <i className="fas fa-dumbbell"></i>
            </div>
            <div>
              <h4 className="font-semibold text-dark-100 mb-2">Técnica</h4>
              <p className="text-sm text-dark-300 leading-relaxed">
                Priorize sempre a execução correta sobre o peso. Uma boa técnica é mais importante que cargas altas e previne lesões.
              </p>
            </div>
          </div>
          
          {/* Sono */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-success-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
              <i className="fas fa-bed"></i>
            </div>
            <div>
              <h4 className="font-semibold text-dark-100 mb-2">Sono</h4>
              <p className="text-sm text-dark-300 leading-relaxed">
                Durma 7-9 horas por noite para uma recuperação adequada. O sono é quando o corpo repara os músculos e libera hormônios de crescimento.
              </p>
            </div>
          </div>
          
          {/* Consistência */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-warning-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div>
              <h4 className="font-semibold text-dark-100 mb-2">Consistência</h4>
              <p className="text-sm text-dark-300 leading-relaxed">
                Mantenha a regularidade nos treinos. É melhor treinar 3 vezes por semana consistentemente do que 6 vezes por semana irregularmente.
              </p>
            </div>
          </div>
          
          {/* Escuta o Corpo */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
              <i className="fas fa-heart"></i>
            </div>
            <div>
              <h4 className="font-semibold text-dark-100 mb-2">Escuta o Corpo</h4>
              <p className="text-sm text-dark-300 leading-relaxed">
                Respeite os sinais de fadiga e dor. Se sentir dor aguda, pare imediatamente. Fadiga é normal, dor não é.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-dark-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-primary-900/30 p-3 rounded-lg">
              <div className="text-primary-400 font-semibold text-sm mb-1">Tempo de Descanso</div>
              <div className="text-primary-300 text-xs">60-90s isolados<br/>90-120s compostos</div>
            </div>
            <div className="bg-success-900/30 p-3 rounded-lg">
              <div className="text-success-400 font-semibold text-sm mb-1">Hidratação</div>
              <div className="text-success-300 text-xs">500ml-1L durante<br/>2-3L por dia</div>
            </div>
            <div className="bg-warning-900/30 p-3 rounded-lg">
              <div className="text-warning-400 font-semibold text-sm mb-1">Nutrição</div>
              <div className="text-warning-300 text-xs">1-2h antes<br/>30-60min depois</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TipsModal
