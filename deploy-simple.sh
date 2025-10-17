#!/bin/bash

# 🚀 Script de Deploy Simplificado
echo "🚀 Iniciando deploy automático..."

# Commit mudanças se houver
echo "💾 Verificando mudanças..."
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Fazendo commit das mudanças..."
    git add .
    git commit -m "feat: atualização automática - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Build do projeto
echo "📦 Fazendo build..."
npm run build

# Copiar 404.html
echo "📄 Copiando 404.html..."
cp public/404.html dist/404.html

# Deploy direto para gh-pages
echo "📤 Fazendo deploy..."
npx gh-pages -d dist

echo "✅ Deploy concluído!"
echo "🌐 Site: https://LucasRZamboni.github.io/Academia/"
echo "⏰ Aguarde 1-5 minutos para atualizar."
