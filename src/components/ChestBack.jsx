import React from 'react'
import ExerciseCard from './ExerciseCard'
import getImagePath from '../utils/imagePaths'

const ChestBack = () => {
  const exercises = [
    { 
      name: 'Supino Reto com Barra', 
      series: 4, 
      reps: '8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Foco na amplitude completa',
      restTime: '90-120s',
      imagePath: getImagePath('supinoRetoBarra.png')
    },
    { 
      name: 'Supino Inclinado com Halteres', 
      series: 4, 
      reps: '10 repetições',
      icon: 'fas fa-weight-hanging',
      notes: 'Inclinação 30-45°',
      restTime: '90-120s',
      imagePath: getImagePath('supinoInclunadoHalter.png')
    },
    { 
      name: 'Pull-Over com Halteres', 
      series: 4, 
      reps: '12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Movimento controlado',
      restTime: '60-90s',
      imagePath: getImagePath('pullOver.jpeg')
    },
    { 
      name: 'Puxada Frontal na Polia', 
      series: 4, 
      reps: '10 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Puxar até o peito',
      restTime: '90-120s',
      imagePath: getImagePath('puxadaFrontalPolia.png')
    },
    { 
      name: 'Remada Curvada com Barra', 
      series: 4, 
      reps: '8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Costas retas',
      restTime: '90-120s',
      imagePath: getImagePath('remadaCurvada.png')
    },
    { 
      name: 'Polia Alta com Pegada Supinada', 
      series: 3, 
      reps: 'até a falha',
      icon: 'fas fa-hand-rock',
      notes: 'Assistido se necessário',
      restTime: '120-180s',
      imagePath: getImagePath('poliaAltaSupinada.png')
    }
  ]

  return (
    <div className="mb-16">
      <h2 className="section-title">Peito + Costas</h2>
      <div className="text-center mb-8">
        <p className="text-dark-300 italic text-lg mb-4">
          (Densidade e Volume)
        </p>
        <div className="flex justify-center items-center gap-6 text-sm text-dark-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-dumbbell text-primary-400"></i>
            <span>Força</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-chart-line text-secondary-400"></i>
            <span>Volume</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-accent-400"></i>
            <span>60-90 min</span>
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

export default ChestBack
