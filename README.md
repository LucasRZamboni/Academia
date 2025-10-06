# 🏋️ Academia

Um aplicativo web simples para acompanhar seus treinos de academia, desenvolvido com React.

## 📋 Funcionalidades

- **Periodização semanal** com divisão clara dos dias
- **Exercícios organizados por grupos musculares**:
  - Peito + Costas (Densidade e Volume)
  - Ombros + Braços (Isolamento e Intensidade)
  - Pernas (Explosão e Resistência)
- **Informações detalhadas** de séries e repetições
- **Tempos de descanso** recomendados
- **Design responsivo** para uso em qualquer dispositivo

## 🚀 Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🎨 Personalização

O arquivo `src/index.css` contém todas as variáveis de cores para fácil personalização:

```css
:root {
  --primary-color: #2c3e50;      /* Cor principal */
  --secondary-color: #3498db;     /* Cor secundária */
  --accent-color: #e74c3c;        /* Cor de destaque */
  --success-color: #27ae60;       /* Cor de sucesso */
  --warning-color: #f39c12;       /* Cor de aviso */
  --background-color: #ecf0f1;    /* Cor de fundo */
  --card-background: #ffffff;     /* Cor dos cards */
  --text-primary: #2c3e50;        /* Cor do texto principal */
  --text-secondary: #7f8c8d;      /* Cor do texto secundário */
}
```

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Smartphone

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Periodization.js    # Componente da periodização
│   ├── ChestBack.js        # Exercícios de peito e costas
│   ├── ShouldersArms.js    # Exercícios de ombros e braços
│   ├── Legs.js             # Exercícios de pernas
│   ├── ExerciseCard.js     # Card individual de exercício
│   └── RestInfo.js         # Informações de descanso
├── App.js                  # Componente principal
├── index.js                # Ponto de entrada
└── index.css               # Estilos globais e variáveis
```

## 🎯 Próximas Funcionalidades

- [ ] Sistema de login para múltiplos usuários
- [ ] Histórico de treinos
- [ ] Progressão de cargas
- [ ] Notas pessoais por exercício
- [ ] Modo offline (PWA)
- [ ] Exportação para PDF
