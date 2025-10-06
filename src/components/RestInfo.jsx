import React from 'react'

const RestInfo = () => {
  return (
    <div className="mb-16">
      <h2 className="section-title">Informações de Descanso</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tempo de Descanso */}
        <div className="card text-center">
          <div className="icon-wrapper mx-auto mb-4">
            <i className="fas fa-clock"></i>
          </div>
          <h3 className="text-xl font-bold text-dark-100 mb-3">Tempo de Descanso</h3>
          <div className="space-y-3">
            <div className="bg-primary-900/30 p-3 rounded-lg">
              <div className="text-sm text-primary-400 font-semibold mb-1">Exercícios Isolados</div>
              <div className="text-lg font-bold text-primary-300">60-90 segundos</div>
            </div>
            <div className="bg-secondary-900/30 p-3 rounded-lg">
              <div className="text-sm text-secondary-400 font-semibold mb-1">Exercícios Compostos</div>
              <div className="text-lg font-bold text-secondary-300">90-120 segundos</div>
            </div>
          </div>
        </div>

        {/* Hidratação */}
        <div className="card text-center">
          <div className="icon-wrapper mx-auto mb-4">
            <i className="fas fa-tint"></i>
          </div>
          <h3 className="text-xl font-bold text-dark-100 mb-3">Hidratação</h3>
          <div className="space-y-3">
            <div className="bg-success-900/30 p-3 rounded-lg">
              <div className="text-sm text-success-400 font-semibold mb-1">Durante o Treino</div>
              <div className="text-lg font-bold text-success-300">500ml - 1L</div>
            </div>
            <div className="bg-accent-900/30 p-3 rounded-lg">
              <div className="text-sm text-accent-400 font-semibold mb-1">Pós-Treino</div>
              <div className="text-lg font-bold text-accent-300">2-3L por dia</div>
            </div>
          </div>
        </div>

        {/* Nutrição */}
        <div className="card text-center">
          <div className="icon-wrapper mx-auto mb-4">
            <i className="fas fa-apple-alt"></i>
          </div>
          <h3 className="text-xl font-bold text-dark-100 mb-3">Nutrição</h3>
          <div className="space-y-3">
            <div className="bg-warning-900/30 p-3 rounded-lg">
              <div className="text-sm text-warning-400 font-semibold mb-1">Pré-Treino</div>
              <div className="text-sm font-bold text-warning-300">1-2h antes</div>
            </div>
            <div className="bg-success-900/30 p-3 rounded-lg">
              <div className="text-sm text-success-400 font-semibold mb-1">Pós-Treino</div>
              <div className="text-sm font-bold text-success-300">30-60 min depois</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dicas Extras */}
      <div className="mt-8">
        <div className="card">
          <div className="text-center mb-6">
            <div className="icon-wrapper mx-auto mb-4">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-100 mb-2">Dicas Importantes</h3>
            <p className="text-dark-300">Siga essas recomendações para maximizar seus resultados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100 mb-1">Aquecimento</h4>
                  <p className="text-sm text-dark-300">Sempre aqueça por 5-10 minutos antes do treino</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary-500 flex items-center justify-center text-white text-xs font-bold mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100 mb-1">Progressão</h4>
                  <p className="text-sm text-dark-300">Aumente gradualmente o peso e intensidade</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs font-bold mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100 mb-1">Técnica</h4>
                  <p className="text-sm text-dark-300">Priorize a execução correta sobre o peso</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success-500 flex items-center justify-center text-white text-xs font-bold mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100 mb-1">Sono</h4>
                  <p className="text-sm text-dark-300">Durma 7-9 horas por noite para recuperação</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-warning-500 flex items-center justify-center text-white text-xs font-bold mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100 mb-1">Consistência</h4>
                  <p className="text-sm text-dark-300">Mantenha a regularidade nos treinos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100 mb-1">Escuta o Corpo</h4>
                  <p className="text-sm text-dark-300">Respeite os sinais de fadiga e dor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestInfo
