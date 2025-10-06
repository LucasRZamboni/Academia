import React from 'react'
import ExerciseCard from './ExerciseCard'
import getImagePath from '../utils/imagePaths'

const Legs = () => {
  const exercises = [
    { 
      name: 'Agachamento Hack', 
      series: 4, 
      reps: '8 repetições',
      icon: 'fas fa-running',
      notes: 'Amplitude completa',
      restTime: '120-180s',
      imagePath: getImagePath('agachamentoHack.png')
    },
    { 
      name: 'Leg Press 45°', 
      series: 4, 
      reps: '12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Controle na descida',
      restTime: '90-120s',
      imagePath: getImagePath('legpress.png')
    },
    { 
      name: 'Stiff com Halteres ou Barra', 
      series: 4, 
      reps: '10 repetições',
      icon: 'fas fa-weight-hanging',
      notes: 'Costas retas',
      restTime: '90-120s',
      imagePath: getImagePath('stiffHalterBarra.png')
    },
    { 
      name: 'Cadeira Extensora (Quadríceps)', 
      series: 4, 
      reps: '15 repetições',
      icon: 'fas fa-chair',
      notes: 'Pausa no topo',
      restTime: '60-90s',
      imagePath: getImagePath('cadeiraExtensora.png')
    },
    { 
      name: 'Cadeira Flexora (Isquiotibiais)', 
      series: 4, 
      reps: '12 repetições',
      icon: 'fas fa-chair',
      notes: 'Contração máxima',
      restTime: '60-90s',
      imagePath: getImagePath('cadeiraFlexora.png')
    },
    { 
      name: 'Panturrilhas Sentado', 
      series: 4, 
      reps: '20 repetições',
      icon: 'fas fa-chair',
      notes: 'Amplitude total',
      restTime: '30-60s',
      imagePath: getImagePath('panturrilhaSentado.png')
    },
    { 
      name: 'Panturrilhas em pé', 
      series: 4, 
      reps: '20 repetições',
      icon: 'fas fa-running',
      notes: 'Pausa no topo',
      restTime: '30-60s',
      imagePath: getImagePath('panturrilhaPe.png')
    }
  ]

  return (
    <div className="mb-16">
      <h2 className="section-title">Pernas</h2>
      <div className="text-center mb-8">
        <p className="text-dark-300 italic text-lg mb-4">
          (Explosão e Resistência)
        </p>
        <div className="flex justify-center items-center gap-6 text-sm text-dark-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-bolt text-accent-400"></i>
            <span>Explosão</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-tachometer-alt text-success-400"></i>
            <span>Resistência</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-primary-400"></i>
            <span>75-90 min</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            name={exercise.name}
            series={exercise.series}
            reps={exercise.reps}
            notes={exercise.notes}
            icon={exercise.icon}
            restTime={exercise.restTime}
            imagePath={exercise.imagePath}
          />
        ))}
      </div>
    </div>
  )
}

export default Legs
