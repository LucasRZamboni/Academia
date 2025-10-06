#!/bin/bash

# Script para deploy manual no GitHub Pages
echo "🚀 Iniciando deploy para GitHub Pages..."

# Build do projeto
echo "📦 Fazendo build..."
npm run build

# Copiar 404.html
echo "📄 Copiando 404.html..."
cp public/404.html dist/404.html

# Fazer commit e push para gh-pages
echo "📤 Fazendo deploy..."
npx gh-pages -d dist

echo "✅ Deploy concluído!"
echo "🌐 Seu site estará disponível em: https://SEU-USUARIO.github.io/Academia/"
