import React, { useState, useEffect } from 'react'
import { allExercises, categoryConfigs } from '../data/exercisesData'
import ExerciseListItem from './ExerciseListItem'
import ExerciseImageModal from './ExerciseImageModal'

const AdvancedExerciseManagement = ({ onBack, onSave, dayExercises = {}, selectedDay = null }) => {
  const [currentDay, setCurrentDay] = useState(selectedDay || 'Segunda-feira')
  const [selectedExercises, setSelectedExercises] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showPreview, setShowPreview] = useState(false)
  const [previewExercise, setPreviewExercise] = useState(null)
  const [sortBy, setSortBy] = useState('name') // name, series, reps
  const [filterBy, setFilterBy] = useState('all') // all, selected, unselected

  // Carregar exercícios do dia atual
  useEffect(() => {
    const dayExerciseIds = dayExercises[currentDay] || []
    const daySelection = {}
    
    // Marcar exercícios deste dia como selecionados
    Object.keys(allExercises).forEach(category => {
      allExercises[category].forEach(exercise => {
        daySelection[exercise.id] = dayExerciseIds.includes(exercise.id)
      })
    })
    
    setSelectedExercises(daySelection)
  }, [currentDay, dayExercises])

  // Função para alternar seleção de um exercício
  const toggleExercise = (exerciseId) => {
    setSelectedExercises(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }))
  }

  // Função para selecionar/deselecionar todos os exercícios de uma categoria
  const toggleCategory = (category) => {
    const categoryExercises = allExercises[category]
    const allSelected = categoryExercises.every(exercise => selectedExercises[exercise.id])
    
    const newSelection = { ...selectedExercises }
    categoryExercises.forEach(exercise => {
      newSelection[exercise.id] = !allSelected
    })
    setSelectedExercises(newSelection)
  }

  // Função para selecionar/deselecionar todos os exercícios
  const toggleAllExercises = () => {
    const allSelected = Object.values(selectedExercises).every(Boolean)
    const newSelection = {}
    Object.keys(allExercises).forEach(category => {
      allExercises[category].forEach(exercise => {
        newSelection[exercise.id] = !allSelected
      })
    })
    setSelectedExercises(newSelection)
  }

  // Função para salvar e voltar ao dashboard
  const handleSave = () => {
    // Extrair apenas os IDs dos exercícios selecionados para este dia
    const selectedExerciseIds = Object.keys(selectedExercises).filter(
      exerciseId => selectedExercises[exerciseId] === true
    )
    
    // Salvar no localStorage
    const updatedDayExercises = {
      ...dayExercises,
      [currentDay]: selectedExerciseIds
    }
    localStorage.setItem('dayExercises', JSON.stringify(updatedDayExercises))
    
    // Notificar o componente pai
    onSave(currentDay, selectedExerciseIds)
    onBack()
  }

  // Função para abrir preview do exercício
  const openPreview = (exercise) => {
    setPreviewExercise(exercise)
    setShowPreview(true)
  }

  // Filtrar e ordenar exercícios
  const getFilteredAndSortedExercises = () => {
    let exercises = []
    
    // Coletar todos os exercícios
    Object.keys(allExercises).forEach(category => {
      if (selectedCategory === 'all' || selectedCategory === category) {
        exercises = exercises.concat(
          allExercises[category].map(exercise => ({
            ...exercise,
            category
          }))
        )
      }
    })

    // Filtrar por busca
    if (searchTerm) {
      exercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtrar por status de seleção
    if (filterBy === 'selected') {
      exercises = exercises.filter(exercise => selectedExercises[exercise.id])
    } else if (filterBy === 'unselected') {
      exercises = exercises.filter(exercise => !selectedExercises[exercise.id])
    }

    // Ordenar
    exercises.sort((a, b) => {
      switch (sortBy) {
        case 'series':
          return b.series - a.series
        case 'reps':
          return a.reps.localeCompare(b.reps)
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return exercises
  }

  const filteredExercises = getFilteredAndSortedExercises()
  const selectedCount = Object.values(selectedExercises).filter(Boolean).length
  const totalCount = Object.keys(allExercises).reduce((total, category) => total + allExercises[category].length, 0)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 pb-12 pt-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="bg-dark-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-dark-600/50 p-3 hover:bg-primary-900/30 transition-colors"
            >
              <i className="fas fa-arrow-left text-primary-400"></i>
            </button>
            <h1 className="text-4xl font-bold text-dark-100">Gestão Avançada de Exercícios</h1>
          </div>
          <p className="text-dark-300 text-lg">
            Personalize completamente seu treino selecionando os exercícios ideais
          </p>
        </div>

        {/* Seletor de Dia */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-dark-100 mb-4 text-center">
            <i className="fas fa-calendar-alt text-primary-400 mr-2"></i>
            Selecione o Dia da Semana
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
            {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map(day => (
              <button
                key={day}
                onClick={() => setCurrentDay(day)}
                className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                  currentDay === day
                    ? 'border-primary-400 bg-primary-900/30 text-primary-100'
                    : 'border-dark-600 bg-dark-800/30 text-dark-300 hover:border-primary-500 hover:bg-primary-900/20'
                } ${day === 'Domingo' ? 'opacity-75' : ''}`}
              >
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-medium mb-1 truncate">
                    {day.split('-')[0]}
                  </div>
                  <div className="text-xs opacity-75">
                    {day === 'Domingo' ? 'Descanso' : 'Treino'}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="glass-card p-6 mb-8">
          <h3 className="text-lg font-bold text-dark-100 mb-4 text-center">
            Estatísticas - {currentDay}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">{selectedCount}</div>
              <div className="text-sm text-dark-300">Exercícios Selecionados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-400">{totalCount - selectedCount}</div>
              <div className="text-sm text-dark-300">Exercícios Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400">{totalCount}</div>
              <div className="text-sm text-dark-300">Total de Exercícios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success-400">
                {Math.round((selectedCount / totalCount) * 100)}%
              </div>
              <div className="text-sm text-dark-300">Progresso</div>
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
            {/* Busca */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar exercícios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 pl-10 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400"></i>
            </div>

            {/* Filtro por categoria */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 focus:outline-none focus:border-primary-400 transition-colors"
            >
              <option value="all">Todas as categorias</option>
              <option value="Exercícios Sem Máquinas">Exercícios Sem Máquinas</option>
              <option value="Exercícios Com Máquinas">Exercícios Com Máquinas</option>
              <option value="Exercícios com Pesos Livres">Exercícios com Pesos Livres</option>
            </select>

            {/* Filtro por status */}
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 focus:outline-none focus:border-primary-400 transition-colors"
            >
              <option value="all">Todos</option>
              <option value="selected">Selecionados</option>
              <option value="unselected">Não selecionados</option>
            </select>

            {/* Ordenação */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 focus:outline-none focus:border-primary-400 transition-colors"
            >
              <option value="name">Nome</option>
              <option value="series">Séries</option>
              <option value="reps">Repetições</option>
            </select>
          </div>

          {/* Controles de seleção */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={toggleAllExercises}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white transition-colors"
              >
                {Object.values(selectedExercises).every(Boolean) ? 'Deselecionar Todos' : 'Selecionar Todos'}
              </button>
              
              {Object.keys(allExercises).map(category => {
                const categoryExercises = allExercises[category]
                const selectedCount = categoryExercises.filter(exercise => selectedExercises[exercise.id]).length
                const totalCount = categoryExercises.length
                const allSelected = selectedCount === totalCount
                
                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      allSelected
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                    }`}
                  >
                    <span className="hidden sm:inline">{category}</span>
                    <span className="sm:hidden">{category.split(' ')[0]}</span> ({selectedCount}/{totalCount})
                  </button>
                )
              })}
            </div>
            
          </div>
        </div>

        {/* Verificação para domingo */}
        {currentDay === 'Domingo' ? (
          <div className="glass-card p-8 text-center">
            <div className="icon-wrapper mx-auto mb-4">
              <i className="fas fa-bed text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-dark-100 mb-4">Dia de Descanso</h3>
            <p className="text-dark-300 mb-6">
              Domingo é o dia de descanso! Não há exercícios para configurar.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm max-w-md mx-auto">
              <div className="bg-success-900/30 p-3 rounded-lg">
                <div className="text-success-400 font-semibold mb-1">Hidratação</div>
                <div className="text-success-300">2-3L por dia</div>
              </div>
              <div className="bg-primary-900/30 p-3 rounded-lg">
                <div className="text-primary-400 font-semibold mb-1">Sono</div>
                <div className="text-primary-300">7-9 horas</div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Lista de exercícios em formato compacto */}
            <div className="space-y-2">
          {selectedCategory === 'all' ? (
            // Mostrar por categoria quando "todas" estiver selecionada
            Object.keys(allExercises).map(category => {
              const categoryExercises = allExercises[category].filter(exercise => {
                if (searchTerm) {
                  return exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
                }
                return true
              }).filter(exercise => {
                if (filterBy === 'selected') return selectedExercises[exercise.id]
                if (filterBy === 'unselected') return !selectedExercises[exercise.id]
                return true
              })

              if (categoryExercises.length === 0) return null

              const config = {
                'Exercícios Sem Máquinas': {
                  subtitle: '(Peso Corporal e Funcional)',
                  focus: ['Funcional', 'Mobilidade'],
                  duration: '30-45 min',
                  icon: 'fas fa-running',
                  color: 'success'
                },
                'Exercícios Com Máquinas': {
                  subtitle: '(Máquinas e Equipamentos)',
                  focus: ['Isolamento', 'Segurança'],
                  duration: '45-60 min',
                  icon: 'fas fa-cogs',
                  color: 'warning'
                },
                'Exercícios com Pesos Livres': {
                  subtitle: '(Barras e Halteres)',
                  focus: ['Força', 'Hipertrofia'],
                  duration: '60-75 min',
                  icon: 'fas fa-dumbbell',
                  color: 'primary'
                }
              }[category] || {
                subtitle: '(Categoria)',
                focus: ['Exercício'],
                duration: '45 min',
                icon: 'fas fa-dumbbell',
                color: 'primary'
              }
              const selectedInCategory = categoryExercises.filter(ex => selectedExercises[ex.id]).length
              
              return (
                <div key={category} className="mb-8">
                  {/* Cabeçalho da categoria */}
                  <div className="flex items-center justify-between mb-4 p-4 bg-dark-800/50 rounded-lg border border-dark-600/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${
                        category === 'Exercícios Sem Máquinas' ? 'from-success-500 to-success-600' :
                        category === 'Exercícios Com Máquinas' ? 'from-warning-500 to-warning-600' :
                        category === 'Exercícios com Pesos Livres' ? 'from-primary-500 to-primary-600' :
                        'from-accent-500 to-accent-600'
                      } flex items-center justify-center text-white shadow-lg`}>
                        <i className={`${config.icon} text-sm`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-dark-100">{category}</h3>
                        <p className="text-sm text-dark-300">{config.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-dark-400">
                        {selectedInCategory}/{categoryExercises.length} selecionados
                      </div>
                      <button
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                          selectedInCategory === categoryExercises.length
                            ? 'bg-primary-600 text-white'
                            : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                        }`}
                      >
                        {selectedInCategory === categoryExercises.length ? 'Deselecionar Todos' : 'Selecionar Todos'}
                      </button>
                    </div>
                  </div>

                  {/* Lista de exercícios da categoria */}
                  <div className="space-y-1 lg:hidden">
                    {categoryExercises.map((exercise) => (
                      <ExerciseListItem
                        key={exercise.id}
                        name={exercise.name}
                        series={exercise.series}
                        reps={exercise.reps}
                        notes={exercise.notes}
                        icon={exercise.icon}
                        restTime={exercise.restTime}
                        imagePath={exercise.imagePath}
                        isSelected={selectedExercises[exercise.id]}
                        onToggle={() => toggleExercise(exercise.id)}
                      />
                    ))}
                  </div>

                  {/* Grid para telas maiores */}
                  <div className="hidden lg:grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-3">
                    {categoryExercises.map((exercise) => (
                      <ExerciseListItem
                        key={exercise.id}
                        name={exercise.name}
                        series={exercise.series}
                        reps={exercise.reps}
                        notes={exercise.notes}
                        icon={exercise.icon}
                        restTime={exercise.restTime}
                        imagePath={exercise.imagePath}
                        isSelected={selectedExercises[exercise.id]}
                        onToggle={() => toggleExercise(exercise.id)}
                      />
                    ))}
                  </div>
                </div>
              )
            })
          ) : (
            // Mostrar exercícios filtrados quando uma categoria específica estiver selecionada
            <>
              {/* Lista para telas menores */}
              <div className="space-y-1 lg:hidden">
                {filteredExercises.map((exercise) => (
                  <ExerciseListItem
                    key={exercise.id}
                    name={exercise.name}
                    series={exercise.series}
                    reps={exercise.reps}
                    notes={exercise.notes}
                    icon={exercise.icon}
                    restTime={exercise.restTime}
                    imagePath={exercise.imagePath}
                    isSelected={selectedExercises[exercise.id]}
                    onToggle={() => toggleExercise(exercise.id)}
                  />
                ))}
              </div>

              {/* Grid para telas maiores */}
              <div className="hidden lg:grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-3">
                {filteredExercises.map((exercise) => (
                  <ExerciseListItem
                    key={exercise.id}
                    name={exercise.name}
                    series={exercise.series}
                    reps={exercise.reps}
                    notes={exercise.notes}
                    icon={exercise.icon}
                    restTime={exercise.restTime}
                    imagePath={exercise.imagePath}
                    isSelected={selectedExercises[exercise.id]}
                    onToggle={() => toggleExercise(exercise.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

            {/* Botão de salvar */}
            <div className="text-center mt-12">
              <button
                onClick={handleSave}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-save mr-2"></i>
                Salvar Seleções e Voltar
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal de preview */}
      {showPreview && previewExercise && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-dark-100">Detalhes do Exercício</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={previewExercise.imagePath}
                  alt={previewExercise.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-100 mb-2">{previewExercise.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-dark-300">Séries:</span>
                    <span className="text-dark-100">{previewExercise.series}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-300">Repetições:</span>
                    <span className="text-dark-100">{previewExercise.reps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-300">Descanso:</span>
                    <span className="text-dark-100">{previewExercise.restTime}</span>
                  </div>
                  {previewExercise.notes && (
                    <div className="mt-4">
                      <span className="text-dark-300">Observações:</span>
                      <p className="text-dark-100 mt-1">{previewExercise.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedExerciseManagement
