import getImagePath from '../utils/imagePaths'

// Todos os exercícios disponíveis organizados por categoria
export const allExercises = {
  'Exercícios Sem Máquinas': [
    // ... (mantenha os que já existem no seu código atual)
    // Abaixo, os que estavam faltando da lista original:
    { 
      id: 'pullover',
      name: 'Pullover', 
      series: 3, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Movimento de costas e peito com peso corporal ou leve',
      restTime: '60-90s',
      imagePath: getImagePath('pullOver.jpeg')
    },
    { 
      id: 'pullover-invertido',
      name: 'Pullover Invertido (Reverse Pullover)', 
      series: 3, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Variação invertida do pullover',
      restTime: '60-90s',
      imagePath: getImagePath('pulloverInvertido.png')
    },
    { 
      id: 'clean-and-press',
      name: 'Clean and Press (Arranco e Press)', 
      series: 4, 
      reps: '6-8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Exercício composto de força e explosão',
      restTime: '120-180s',
      imagePath: getImagePath('cleanAndPress.png')
    },
    { 
      id: 'overhead-squats',
      name: 'Overhead Squats (Agachamento sobre a Cabeça)', 
      series: 3, 
      reps: '6-10 repetições',
      icon: 'fas fa-running',
      notes: 'Requer mobilidade e estabilidade',
      restTime: '120s',
      imagePath: getImagePath('overheadSquats.png')
    },
    { 
      id: 'snatch-bodyweight',
      name: 'Snatch (Arranco) - Peso Corporal', 
      series: 3, 
      reps: '5-8 repetições',
      icon: 'fas fa-bolt',
      notes: 'Versão funcional do arranco sem peso',
      restTime: '120-180s',
      imagePath: getImagePath('snatchBodyweight.png')
    },
    { 
      id: 'muscle-up',
      name: 'Muscle Up', 
      series: 3, 
      reps: 'até a falha',
      icon: 'fas fa-fire',
      notes: 'Exercício avançado de barra fixa',
      restTime: '120-180s',
      imagePath: getImagePath('muscleUp.png')
    },
    { 
      id: 'handstand-push-ups',
      name: 'Handstand Push-ups (Flexões de Braço em Posição de Mão)', 
      series: 3, 
      reps: '5-10 repetições',
      icon: 'fas fa-hand-paper',
      notes: 'Ombros e tríceps, contra parede se necessário',
      restTime: '120s',
      imagePath: getImagePath('handstandPushUps.png')
    },
    { 
      id: 'walking-lunges',
      name: 'Walking Lunges (Afundo Caminhando)', 
      series: 4, 
      reps: '12-15 passos por perna',
      icon: 'fas fa-running',
      notes: 'Afundo dinâmico, equilíbrio e mobilidade',
      restTime: '60-90s',
      imagePath: getImagePath('walkingLunges.png')
    },
    { 
      id: 'v-ups',
      name: 'V-Ups', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Abdômen superior e inferior simultâneos',
      restTime: '60s',
      imagePath: getImagePath('vUps.png')
    },
    { 
      id: 'skater-jumps',
      name: 'Skater Jumps (Saltos de Patinador)', 
      series: 4, 
      reps: '30-45 segundos',
      icon: 'fas fa-arrow-left-right',
      notes: 'Agilidade, coordenação e cardio',
      restTime: '60s',
      imagePath: getImagePath('skaterJumps.png')
    },
    { 
      id: 'agachamento-sumo',
      name: 'Agachamento Sumô (Sumo Squat)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-running',
      notes: 'Pernas abertas, foco em adutores e glúteos',
      restTime: '60-90s',
      imagePath: getImagePath('agachamentoSumo.png')
    },
    { 
      id: 'sprint',
      name: 'Sprint (Corrida de Velocidade)', 
      series: 6, 
      reps: '20-40 metros',
      icon: 'fas fa-running',
      notes: 'Máxima intensidade, recuperação completa',
      restTime: '90-180s',
      imagePath: getImagePath('sprint.png')
    },
    { 
      id: 'sprint-intervalado',
      name: 'Sprint Intervalado (Interval Sprints)', 
      series: 8, 
      reps: '30s esforço / 60s recuperação',
      icon: 'fas fa-fire',
      notes: 'HIIT, queima calórica intensa',
      restTime: 'ativo',
      imagePath: getImagePath('sprintIntervalado.png')
    },
    { 
      id: 'walking-plank',
      name: 'Walking Plank (Prancha Andando)', 
      series: 3, 
      reps: '10-15 passos',
      icon: 'fas fa-stopwatch',
      notes: 'Estabilidade do core e mobilidade',
      restTime: '60s',
      imagePath: getImagePath('walkingPlank.png')
    },
    { 
      id: 'clap-push-ups',
      name: 'Clap Push-ups (Flexões com Palminha)', 
      series: 3, 
      reps: 'até a falha',
      icon: 'fas fa-hand-paper',
      notes: 'Explosão e potência nos peitorais',
      restTime: '90s',
      imagePath: getImagePath('clapPushUps.png')
    },
    { 
      id: 'battle-ropes',
      name: 'Battle Ropes (Corda Naval)', 
      series: 4, 
      reps: '30-45 segundos',
      icon: 'fas fa-wave-square',
      notes: 'Resistência muscular e cardio',
      restTime: '60s',
      imagePath: getImagePath('battleRopes.png')
    },
    { 
      id: 'medicine-ball-slams',
      name: 'Medicine Ball Slams (Arremesso de Bola Medicinal)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-fire',
      notes: 'Explosão total do corpo',
      restTime: '60s',
      imagePath: getImagePath('medicineBallSlams.png')
    },
    { 
      id: 'rope-climbs',
      name: 'Rope Climbs (Subida na Corda)', 
      series: 3, 
      reps: '3-5 subidas',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Força de preensão e costas',
      restTime: '120s',
      imagePath: getImagePath('ropeClimbs.png')
    }
  ],

  'Exercícios Com Máquinas': [
    { 
      id: 'leg-press',
      name: 'Leg Press (Leg Press)', 
      series: 4, 
      reps: '10-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Quadríceps, glúteos e adutores',
      restTime: '90s',
      imagePath: getImagePath('legpress.png')
    },
    { 
      id: 'cadeira-extensora',
      name: 'Cadeira Extensora (Leg Extension)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-chair',
      notes: 'Isolamento do quadríceps',
      restTime: '60s',
      imagePath: getImagePath('cadeiraExtensora.png')
    },
    { 
      id: 'cadeira-flexora',
      name: 'Cadeira Flexora (Leg Curl)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-chair',
      notes: 'Isolamento dos isquiotibiais',
      restTime: '60s',
      imagePath: getImagePath('cadeiraFlexora.png')
    },
    { 
      id: 'pec-deck-fly',
      name: 'Pec Deck Fly (Crucifixo na Máquina)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral com foco em contração',
      restTime: '60s',
      imagePath: getImagePath('pecDeckFly.png')
    },
    { 
      id: 'maquina-remada',
      name: 'Máquina de Remada (Rowing Machine)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Costas e cardio',
      restTime: '90s',
      imagePath: getImagePath('maquinaRemada.png')
    },
    { 
      id: 'pulley-frente',
      name: 'Pulley Frente (Front Pulley)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Dorsais, pegada supinada',
      restTime: '90s',
      imagePath: getImagePath('puxadaFrontalPolia.png')
    },
    { 
      id: 'pulley-costas',
      name: 'Pulley Costas (Back Pulley)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Pegada pronada, dorsais',
      restTime: '90s',
      imagePath: getImagePath('pulleyCostas.png')
    },
    { 
      id: 'crossover',
      name: 'Crossover (Crossover)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral com polias',
      restTime: '60s',
      imagePath: getImagePath('crossover.png')
    },
    { 
      id: 'hack-squat',
      name: 'Hack Squat (Agachamento Hack)', 
      series: 4, 
      reps: '8-12 repetições',
      icon: 'fas fa-running',
      notes: 'Máquina específica para agachamento',
      restTime: '120s',
      imagePath: getImagePath('agachamentoHack.png')
    },
    { 
      id: 'smith-machine-squats',
      name: 'Smith Machine Squats (Agachamento na Máquina Smith)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Estabilidade guiada',
      restTime: '120s',
      imagePath: getImagePath('smithMachineSquats.png')
    },
    { 
      id: 'smith-machine-bench-press',
      name: 'Smith Machine Bench Press (Supino na Máquina Smith)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Supino com trajetória fixa',
      restTime: '90s',
      imagePath: getImagePath('smithMachineBenchPress.png')
    },
    { 
      id: 'chest-press',
      name: 'Chest Press (Press de Peito)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral em máquina',
      restTime: '90s',
      imagePath: getImagePath('chestPress.png')
    },
    { 
      id: 'shoulder-press-machine',
      name: 'Shoulder Press (Press de Ombros)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Ombros em máquina',
      restTime: '90s',
      imagePath: getImagePath('shoulderPressMachine.png')
    },
    { 
      id: 'triceps-press-machine',
      name: 'Triceps Press (Press de Tríceps)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Isolamento de tríceps',
      restTime: '60s',
      imagePath: getImagePath('tricepsPressMachine.png')
    },
    { 
      id: 'maquina-panturrilha',
      name: 'Máquina de Panturrilha (Calf Raise Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Gêmeos e sóleo',
      restTime: '45s',
      imagePath: getImagePath('maquinaPanturrilha.png')
    },
    { 
      id: 'abdominal-maquina',
      name: 'Abdominal na Máquina (Machine Crunches)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Abdômen com resistência guiada',
      restTime: '45s',
      imagePath: getImagePath('abdominalMaquina.png')
    },
    { 
      id: 'abductor-machine',
      name: 'Abductor Machine (Máquina de Abdução)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Abdutores do quadril',
      restTime: '60s',
      imagePath: getImagePath('abductorMachine.png')
    },
    { 
      id: 'adductor-machine',
      name: 'Adductor Machine (Máquina de Adução)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Adutores do quadril',
      restTime: '60s',
      imagePath: getImagePath('adductorMachine.png')
    },
    { 
      id: 'low-row',
      name: 'Low Row (Remada Baixa)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Costas médias e inferiores',
      restTime: '90s',
      imagePath: getImagePath('lowRow.png')
    },
    { 
      id: 'cable-crossovers',
      name: 'Cable Crossovers (Crossover no Cabo)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral com cabos',
      restTime: '60s',
      imagePath: getImagePath('cableCrossovers.png')
    },
    { 
      id: 'cable-crunches',
      name: 'Cable Crunches (Abdominal no Cabo)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Abdômen com resistência variável',
      restTime: '60s',
      imagePath: getImagePath('cableCrunches.png')
    },
    { 
      id: 'cable-bicep-curl',
      name: 'Cable Bicep Curl (Rosca Bicep no Cabo)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Tensão contínua no bíceps',
      restTime: '60s',
      imagePath: getImagePath('cableBicepCurl.png')
    },
    { 
      id: 'cable-tricep-extension',
      name: 'Cable Tricep Extension (Extensão de Tríceps no Cabo)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Tríceps com cabos',
      restTime: '60s',
      imagePath: getImagePath('CordaPolia.png')
    },
    { 
      id: 'maquina-gluteos',
      name: 'Máquina de Glúteos (Glute Machine)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-running',
      notes: 'Glúteos isolados',
      restTime: '90s',
      imagePath: getImagePath('maquinaGluteos.png')
    },
    { 
      id: 'maquina-abdomen',
      name: 'Máquina de Abdômen (Ab Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Variações de abdominal guiado',
      restTime: '45s',
      imagePath: getImagePath('maquinaAbdomen.png')
    },
    { 
      id: 'cardio-machines',
      name: 'Cardio Machines (Esteira, Bicicleta, Elíptico)', 
      series: 1, 
      reps: '20-45 minutos',
      icon: 'fas fa-heartbeat',
      notes: 'Cardio contínuo ou intervalado',
      restTime: 'n/a',
      imagePath: getImagePath('cardioMachines.png')
    },
    { 
      id: 'maquina-costas',
      name: 'Máquina de Costas (Lower Back Machine)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-backward',
      notes: 'Extensão lombar assistida',
      restTime: '90s',
      imagePath: getImagePath('maquinaCostas.png')
    },
    { 
      id: 'pull-down',
      name: 'Pull Down (Pulldown)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Dorsais com barra reta',
      restTime: '90s',
      imagePath: getImagePath('pullDown.png')
    },
    { 
      id: 'lat-pulldown',
      name: 'Lat Pulldown (Pulldown para Costas)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Grande dorsal',
      restTime: '90s',
      imagePath: getImagePath('poliaAltaSupinada.png')
    },
    { 
      id: 'cable-lat-pulldown',
      name: 'Cable Lat Pulldown (Pulldown no Cabo)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Variação com cabo único',
      restTime: '90s',
      imagePath: getImagePath('cableLatPulldown.png')
    },
    { 
      id: 'chest-fly-machine',
      name: 'Chest Fly Machine (Máquina de Crucifixo)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral com máquina específica',
      restTime: '60s',
      imagePath: getImagePath('chestFlyMachine.png')
    },
    { 
      id: 'leg-press-invertida',
      name: 'Leg Press Invertida (Inverted Leg Press)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Posição invertida para maior amplitude',
      restTime: '90s',
      imagePath: getImagePath('legPressInvertida.png')
    },
    { 
      id: 'smith-machine-calf-raise',
      name: 'Máquina Smith para Panturrilhas (Smith Machine Calf Raise)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Panturrilha com barra na Smith',
      restTime: '45s',
      imagePath: getImagePath('smithMachineCalfRaise.png')
    },
    { 
      id: 'maquina-supino',
      name: 'Máquina de Supino (Bench Press Machine)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Supino guiado',
      restTime: '90s',
      imagePath: getImagePath('maquinaSupino.png')
    },
    { 
      id: 'maquina-abducao-quadril',
      name: 'Máquina de Abdução de Quadril (Hip Abduction Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Abdutores do quadril',
      restTime: '60s',
      imagePath: getImagePath('maquinaAbducaoQuadril.png')
    },
    { 
      id: 'maquina-aducao-quadril',
      name: 'Máquina de Adução de Quadril (Hip Adduction Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Adutores do quadril',
      restTime: '60s',
      imagePath: getImagePath('maquinaAducaoQuadril.png')
    },
    { 
      id: 'maquina-prancha-inclinada',
      name: 'Máquina de Prancha Inclinada (Incline Plank Machine)', 
      series: 3, 
      reps: '30-45 segundos',
      icon: 'fas fa-stopwatch',
      notes: 'Core com inclinação',
      restTime: '45s',
      imagePath: getImagePath('maquinaPranchaInclinada.png')
    },
    { 
      id: 'maquina-remada-sentada',
      name: 'Máquina de Remada Sentada (Seated Row Machine)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-arrows-alt-v',
      notes: 'Costas sentado com pegada variável',
      restTime: '90s',
      imagePath: getImagePath('maquinaRemadaSentada.png')
    },
    { 
      id: 'maquina-supino-vertical',
      name: 'Máquina de Supino Vertical (Vertical Chest Press Machine)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral em posição vertical',
      restTime: '90s',
      imagePath: getImagePath('maquinaSupinoVertical.png')
    },
    { 
      id: 'maquina-extensao-lombar',
      name: 'Máquina de Extensão Lombar (Back Extension Machine)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-backward',
      notes: 'Lombar e glúteos',
      restTime: '90s',
      imagePath: getImagePath('maquinaExtensaoLombar.png')
    },
    { 
      id: 'maquina-pullover',
      name: 'Máquina de Pullover (Pullover Machine)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral e costas em máquina',
      restTime: '90s',
      imagePath: getImagePath('maquinaPullover.png')
    },
    { 
      id: 'maquina-abducao-coxas',
      name: 'Máquina de Abdução de Coxas (Thigh Abductor Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Abdutores das coxas',
      restTime: '60s',
      imagePath: getImagePath('maquinaAbducaoCoxas.png')
    },
    { 
      id: 'maquina-aducao-coxas',
      name: 'Máquina de Adução de Coxas (Thigh Adductor Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Adutores das coxas',
      restTime: '60s',
      imagePath: getImagePath('maquinaAducaoCoxas.png')
    },
    { 
      id: 'maquina-prancha-inversa',
      name: 'Máquina de Prancha Inversa (Reverse Plank Machine)', 
      series: 3, 
      reps: '30-45 segundos',
      icon: 'fas fa-stopwatch',
      notes: 'Core posterior',
      restTime: '45s',
      imagePath: getImagePath('maquinaPranchaInversa.png')
    },
    { 
      id: 'maquina-agachamento-horizontal',
      name: 'Máquina de Agachamento Horizontal (Horizontal Squat Machine)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-running',
      notes: 'Agachamento deitado',
      restTime: '120s',
      imagePath: getImagePath('maquinaAgachamentoHorizontal.png')
    },
    { 
      id: 'maquina-panturrilha-sentada',
      name: 'Máquina de Panturrilha Sentada (Seated Calf Raise Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-chair',
      notes: 'Sóleo',
      restTime: '45s',
      imagePath: getImagePath('panturrilhaSentado.png')
    },
    { 
      id: 'maquina-panturrilha-pe',
      name: 'Máquina de Panturrilha em Pé (Standing Calf Raise Machine)', 
      series: 4, 
      reps: '15-20 repetições',
      icon: 'fas fa-running',
      notes: 'Gêmeos',
      restTime: '45s',
      imagePath: getImagePath('panturrilhaPe.png')
    }
  ],

  'Exercícios com Pesos Livres': [
    { 
      id: 'supino-reto',
      name: 'Supino Reto (Flat Bench Press)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral com barra',
      restTime: '120s',
      imagePath: getImagePath('supinoRetoBarra.png')
    },
    { 
      id: 'supino-inclinado',
      name: 'Supino Inclinado (Incline Bench Press)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral superior',
      restTime: '120s',
      imagePath: getImagePath('supinoInclunadoHalter.png')
    },
    { 
      id: 'supino-declinado',
      name: 'Supino Declinado (Decline Bench Press)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Peitoral inferior',
      restTime: '120s',
      imagePath: getImagePath('supinoDeclinado.png')
    },
    { 
      id: 'desenvolvimento-militar',
      name: 'Desenvolvimento Militar (Military Press)', 
      series: 4, 
      reps: '6-8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Ombros com barra, pés juntos',
      restTime: '120s',
      imagePath: getImagePath('desenvolvimento.png')
    },
    { 
      id: 'elevacao-lateral-halter',
      name: 'Elevação Lateral com Halteres (Lateral Raise)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Deltoide médio, movimento controlado',
      restTime: '60s',
      imagePath: getImagePath('elevacaoLateralHalter.png')
    },
    { 
      id: 'encolhimento-ombro',
      name: 'Encolhimento de Ombros (Shoulder Shrug)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Trapézio, movimento vertical',
      restTime: '60s',
      imagePath: getImagePath('encolimentoOmbro.png')
    },
    { 
      id: 'rosca-direta',
      name: 'Rosca Direta (Barbell Curl)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Bíceps com barra reta',
      restTime: '60s',
      imagePath: getImagePath('roscaDiretaBarra.png')
    },
    { 
      id: 'rosca-martelo',
      name: 'Rosca Martelo (Hammer Curl)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-weight-hanging',
      notes: 'Bíceps e braquiorradial',
      restTime: '60s',
      imagePath: getImagePath('roscaMartelo.png')
    },
    { 
      id: 'rosca-concentrada',
      name: 'Rosca Concentrada (Concentration Curl)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-weight-hanging',
      notes: 'Isolamento máximo do bíceps',
      restTime: '60s',
      imagePath: getImagePath('roscaConcentrada.png')
    },
    { 
      id: 'rosca-scott',
      name: 'Rosca Scott (Preacher Curl)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Bíceps com banco Scott',
      restTime: '60s',
      imagePath: getImagePath('roscaScott.png')
    },
    { 
      id: 'triceps-frances',
      name: 'Tríceps Francês (French Press)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Tríceps com barra ou halteres',
      restTime: '60s',
      imagePath: getImagePath('tricepsFrances.png')
    },
    { 
      id: 'triceps-testa',
      name: 'Tríceps Testa (Skull Crusher)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Tríceps com barra EZ',
      restTime: '60s',
      imagePath: getImagePath('tricepsTesta.png')
    },
    { 
      id: 'crucifixo-halteres',
      name: 'Crucifixo (Dumbbell Flyes)', 
      series: 4, 
      reps: '12-15 repetições',
      icon: 'fas fa-weight-hanging',
      notes: 'Peitoral com halteres',
      restTime: '60s',
      imagePath: getImagePath('crucifixoHalteres.png')
    },
    { 
      id: 'remada-curvada',
      name: 'Remada Curvada (Bent-Over Row)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Costas com barra',
      restTime: '120s',
      imagePath: getImagePath('remadaCurvada.png')
    },
    { 
      id: 'levantamento-terra',
      name: 'Levantamento Terra (Deadlift)', 
      series: 4, 
      reps: '5-8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Exercício rei da força',
      restTime: '180s',
      imagePath: getImagePath('levantamentoTerra.png')
    },
    { 
      id: 'stiff-leg-deadlift',
      name: 'Stiff Leg Deadlift (Levantamento Terra com Pernas Rígidas)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Isquiotibiais e lombar',
      restTime: '120s',
      imagePath: getImagePath('stiffHalterBarra.png')
    },
    { 
      id: 'sumo-deadlift',
      name: 'Sumo Deadlift (Levantamento Terra Sumô)', 
      series: 4, 
      reps: '6-8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Pernas abertas, glúteos e adutores',
      restTime: '180s',
      imagePath: getImagePath('sumoDeadlift.png')
    },
    { 
      id: 'agachamento-com-barra',
      name: 'Agachamento com Barra (Barbell Squat)', 
      series: 4, 
      reps: '6-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Fundamental para pernas',
      restTime: '180s',
      imagePath: getImagePath('agachamentoComBarra.png')
    },
    { 
      id: 'front-squat',
      name: 'Front Squat (Agachamento Frontal)', 
      series: 4, 
      reps: '6-8 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Barra na frente dos ombros',
      restTime: '180s',
      imagePath: getImagePath('frontSquat.png')
    },
    { 
      id: 'arremesso-clean',
      name: 'Arremesso (Clean)', 
      series: 4, 
      reps: '3-5 repetições',
      icon: 'fas fa-bolt',
      notes: 'Olimpico, explosão total',
      restTime: '180s',
      imagePath: getImagePath('arremessoClean.png')
    },
    { 
      id: 'snatch-barra',
      name: 'Snatch (Arranco)', 
      series: 4, 
      reps: '3-5 repetições',
      icon: 'fas fa-bolt',
      notes: 'Levantamento olímpico completo',
      restTime: '180s',
      imagePath: getImagePath('snatchBarra.png')
    },
    { 
      id: 'thruster',
      name: 'Thruster', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-fire',
      notes: 'Agachamento + press, funcional',
      restTime: '120s',
      imagePath: getImagePath('thruster.png')
    },
    { 
      id: 'power-clean',
      name: 'Power Clean (Arremesso Rápido)', 
      series: 4, 
      reps: '3-5 repetições',
      icon: 'fas fa-bolt',
      notes: 'Versão explosiva do clean',
      restTime: '180s',
      imagePath: getImagePath('powerClean.png')
    },
    { 
      id: 'hang-clean',
      name: 'Hang Clean (Arremesso de Pendurado)', 
      series: 4, 
      reps: '3-5 repetições',
      icon: 'fas fa-bolt',
      notes: 'Partida do hang position',
      restTime: '180s',
      imagePath: getImagePath('hangClean.png')
    },
    { 
      id: 'turkish-get-up',
      name: 'Turkish Get-Up (Levantamento Turco)', 
      series: 3, 
      reps: '3-5 por lado',
      icon: 'fas fa-star',
      notes: 'Mobilidade, estabilidade e força',
      restTime: '120s',
      imagePath: getImagePath('turkishGetUp.png')
    },
    { 
      id: 'farmers-walk',
      name: 'Farmer\'s Walk (Caminhada do Fazendeiro)', 
      series: 4, 
      reps: '30-50 metros',
      icon: 'fas fa-walking',
      notes: 'Força de preensão e core',
      restTime: '120s',
      imagePath: getImagePath('farmersWalk.png')
    },
    { 
      id: 'zercher-squat',
      name: 'Zercher Squat (Agachamento Zercher)', 
      series: 4, 
      reps: '6-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Barra na dobra do cotovelo',
      restTime: '120s',
      imagePath: getImagePath('zercherSquat.png')
    },
    { 
      id: 'good-morning',
      name: 'Good Morning (Bom Dia)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Posterior da coxa e lombar',
      restTime: '120s',
      imagePath: getImagePath('goodMorning.png')
    },
    { 
      id: 'remada-unilateral',
      name: 'Remada Unilateral (One-Arm Row)', 
      series: 4, 
      reps: '10-12 por braço',
      icon: 'fas fa-weight-hanging',
      notes: 'Costas com halteres',
      restTime: '90s',
      imagePath: getImagePath('remadaUnilateral.png')
    },
    { 
      id: 'remada-cavalinho',
      name: 'Remada Cavalinho (T-Bar Row)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Costas com barra em T',
      restTime: '120s',
      imagePath: getImagePath('remadaCavalinho.png')
    },
    { 
      id: 'landmine-press',
      name: 'Landmine Press (Press com Barra em T)', 
      series: 4, 
      reps: '8-10 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Ombros com barra fixa na ponta',
      restTime: '90s',
      imagePath: getImagePath('landminePress.png')
    },
    { 
      id: 'landmine-row',
      name: 'Landmine Row (Remada com Barra em T)', 
      series: 4, 
      reps: '10-12 repetições',
      icon: 'fas fa-dumbbell',
      notes: 'Costas com barra em T',
      restTime: '90s',
      imagePath: getImagePath('landmineRow.png')
    }
  ]
}

// Configurações padrão para cada categoria
export const categoryConfigs = {
  'Peito': {
    subtitle: '(Peitoral e Serrátil)',
    focus: ['Hipertrofia', 'Força'],
    duration: '45-60 min',
    icon: 'fas fa-heart',
    color: 'primary'
  },
  'Costas': {
    subtitle: '(Dorsais, Trapézio e Lombar)',
    focus: ['Força', 'Postura'],
    duration: '60-75 min',
    icon: 'fas fa-backward',
    color: 'dark'
  },
  'Ombros': {
    subtitle: '(Deltoide e Estabilidade)',
    focus: ['Isolamento', 'Mobilidade'],
    duration: '45 min',
    icon: 'fas fa-user-shield',
    color: 'warning'
  },
  'Bíceps': {
    subtitle: '(Flexores do Cotovelo)',
    focus: ['Isolamento', 'Definição'],
    duration: '30 min',
    icon: 'fas fa-bullseye',
    color: 'success'
  },
  'Tríceps': {
    subtitle: '(Extensão do Cotovelo)',
    focus: ['Força', 'Volume'],
    duration: '30 min',
    icon: 'fas fa-bullseye',
    color: 'success'
  },
  'Quadríceps': {
    subtitle: '(Frente da Coxa)',
    focus: ['Força', 'Explosão'],
    duration: '60 min',
    icon: 'fas fa-running',
    color: 'accent'
  },
  'Isquiotibiais e Glúteos': {
    subtitle: '(Posterior da Coxa e Glúteos)',
    focus: ['Potência', 'Estabilidade'],
    duration: '60 min',
    icon: 'fas fa-hips',
    color: 'danger'
  },
  'Panturrilhas': {
    subtitle: '(Gêmeos e Sóleo)',
    focus: ['Resistência', 'Definição'],
    duration: '20-30 min',
    icon: 'fas fa-shoe-prints',
    color: 'info'
  },
  'Abdômen': {
    subtitle: '(Core e Estabilidade)',
    focus: ['Controle', 'Resistência'],
    duration: '20-30 min',
    icon: 'fas fa-wind',
    color: 'secondary'
  },
  'Corpo Inteiro / Funcional': {
    subtitle: '(Movimentos Compostos e Dinâmicos)',
    focus: ['Potência', 'Condicionamento'],
    duration: '45-60 min',
    icon: 'fas fa-fire',
    color: 'warning'
  }
}