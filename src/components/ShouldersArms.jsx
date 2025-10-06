import React from 'react'
import ExerciseCard from './ExerciseCard'

const ShouldersArms = () => {
  const exercises = [
    { 
      name: 'Desenvolvimento com Barra', 
      series: 4, 
      reps: '8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Movimento completo',
      restTime: '90-120s',
      imagePath: '/images/exercises/desenvolvimento.png'
    },
    { 
      name: 'Elevação Lateral com Halteres', 
      series: 4, 
      reps: '12 repetições',
      icon: 'fas fa-hand-paper',
      notes: 'Controle na descida',
      restTime: '60-90s',
      imagePath: '/images/exercises/elevacaoLateralHalter.png'
    },
    { 
      name: 'Encolhimento de Ombros com Barra', 
      series: 4, 
      reps: '15 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Pausa no topo',
      restTime: '60-90s',
      imagePath: '/images/exercises/encolimentoOmbro.png'
    },
    { 
      name: 'Rosca Direta com Barra (Bíceps)', 
      series: 4, 
      reps: '10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Cotovelos fixos',
      restTime: '60-90s',
      imagePath: '/images/exercises/roscaDiretaBarra.png'
    },
    { 
      name: 'Rosca Concentrada (Bíceps)', 
      series: 3, 
      reps: '12 repetições',
      icon: 'fas fa-weight-hanging',
      notes: 'Apoio no banco',
      restTime: '60-90s',
      imagePath: '/images/exercises/roscaConcentrada.png'
    },
    { 
      name: 'Triceps Testa', 
      series: 4, 
      reps: '10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Amplitude total',
      restTime: '60-90s',
      imagePath: '/images/exercises/tricepsTesta.png'
    },
    { 
      name: 'Corda na Polia (Tríceps)', 
      series: 3, 
      reps: '15 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Extensão completa',
      restTime: '60-90s',
      imagePath: '/images/exercises/CordaPolia.png'
    }
  ]

  return (
    <div className="mb-16">
      <h2 className="section-title">Ombros + Braços</h2>
      <div className="text-center mb-8">
        <p className="text-dark-300 italic text-lg mb-4">
          (Isolamento e Intensidade)
        </p>
        <div className="flex justify-center items-center gap-6 text-sm text-dark-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-hand-paper text-secondary-400"></i>
            <span>Isolamento</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-fire text-accent-400"></i>
            <span>Intensidade</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-primary-400"></i>
            <span>45-60 min</span>
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

export default ShouldersArms
