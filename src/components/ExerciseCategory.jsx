import React from 'react'
import ExerciseCard from './ExerciseCard'
import { allExercises, categoryConfigs } from '../data/exercisesData'

const ExerciseCategory = ({ categoryName, selectedExercises = {} }) => {
  // Coletar exercícios selecionados para este dia específico
  const exercises = []
  
  Object.keys(allExercises).forEach(category => {
    allExercises[category].forEach(exercise => {
      if (selectedExercises[exercise.id] === true) {
        exercises.push(exercise)
      }
    })
  })

  const config = categoryConfigs[categoryName] || {
    subtitle: '(Exercícios Selecionados)',
    focus: ['Treino', 'Personalizado'],
    duration: '60-90 min',
    icon: 'fas fa-dumbbell',
    color: 'primary'
  }

  return (
    <div className="mb-16">
      <h2 className="section-title">{categoryName || 'Meus Exercícios'}</h2>
      <div className="text-center mb-8">
        <p className="text-dark-300 italic text-lg mb-4">
          {config.subtitle}
        </p>
        <div className="flex justify-center items-center gap-6 text-sm text-dark-400">
          {config.focus.map((focus, index) => (
            <div key={index} className="flex items-center gap-2">
              <i className={`${config.icon} text-${config.color}-400`}></i>
              <span>{focus}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-primary-400"></i>
            <span>{config.duration}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-2 xl:gap-3">
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

export default ExerciseCategory
