# 🚀 Instruções de Deploy - Academia App

Este projeto agora suporta deploy tanto no **Windows** quanto no **macOS/Linux**. Escolha o método que melhor se adequa ao seu sistema operacional.

## 📋 Scripts Disponíveis

### 🎯 Deploy Automático (Recomendado)
```bash
npm run deploy
```
- **Funciona em:** Windows, macOS e Linux
- **Descrição:** Detecta automaticamente o sistema operacional e executa o script apropriado
- **Uso:** Use este comando independente do seu SO

### 🔧 Deploy Cross-Platform
```bash
npm run deploy-cross
```
- **Funciona em:** Windows, macOS e Linux
- **Descrição:** Script em Node.js que funciona em qualquer sistema
- **Uso:** Alternativa ao deploy automático

### 🪟 Deploy para Windows
```bash
npm run deploy-win
```
- **Funciona em:** Apenas Windows
- **Descrição:** Script .bat específico para Windows
- **Uso:** Use apenas se estiver no Windows

### 🍎 Deploy para macOS/Linux
```bash
npm run deploy-mac
```
- **Funciona em:** macOS e Linux
- **Descrição:** Script .sh específico para sistemas Unix
- **Uso:** Use apenas se estiver no macOS ou Linux

### ⚡ Deploy Simples
```bash
npm run deploy-simple
```
- **Funciona em:** Windows, macOS e Linux
- **Descrição:** Deploy básico usando apenas gh-pages
- **Uso:** Use se os outros métodos falharem

## 🛠️ Servidor Local

### macOS/Linux
```bash
npm run serve
```

### Windows
```bash
npm run serve-win
```

## 📝 Pré-requisitos

1. **Node.js** instalado
2. **Git** configurado
3. **Repositório GitHub** configurado
4. **GitHub Pages** habilitado no repositório

## 🔧 Configuração Inicial

1. Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/Academia.git
cd Academia
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o repositório remoto:
```bash
git remote add origin https://github.com/SEU-USUARIO/Academia.git
```

## 🚨 Solução de Problemas

### Erro: "not a git repository"
```bash
git init
git remote add origin https://github.com/SEU-USUARIO/Academia.git
```

### Erro: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### Erro: "Permission denied" (macOS/Linux)
```bash
chmod +x deploy-updated.sh
```

### Erro no Windows com scripts .bat
- Use `npm run deploy-cross` ou `npm run deploy-simple`
- Verifique se o PowerShell/CMD tem permissões de execução

## 📊 Comparação dos Métodos

| Método | Windows | macOS | Linux | Complexidade | Recursos |
|--------|---------|-------|-------|--------------|----------|
| `deploy` | ✅ | ✅ | ✅ | Baixa | Detecção automática |
| `deploy-cross` | ✅ | ✅ | ✅ | Baixa | Node.js puro |
| `deploy-win` | ✅ | ❌ | ❌ | Média | Script .bat |
| `deploy-mac` | ❌ | ✅ | ✅ | Média | Script .sh |
| `deploy-simple` | ✅ | ✅ | ✅ | Muito baixa | gh-pages direto |

## 🎯 Recomendação

**Use `npm run deploy`** - é o método mais confiável e funciona em qualquer sistema operacional!
