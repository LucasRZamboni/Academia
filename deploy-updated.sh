#!/bin/bash

# Script para deploy manual no GitHub Pages - Versão Atualizada
echo "🚀 Iniciando deploy para GitHub Pages..."

# Verificar se estamos na branch main
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  Mudando para branch main..."
    git checkout main
fi

# Build do projeto
echo "📦 Fazendo build..."
npm run build

# Copiar 404.html para SPA
echo "📄 Copiando 404.html..."
cp public/404.html dist/404.html

# Mudar para branch gh-pages
echo "🔄 Mudando para branch gh-pages..."
git checkout gh-pages

# Limpar branch gh-pages
echo "🧹 Limpando branch gh-pages..."
git rm -rf . 2>/dev/null || true
git clean -fd

# Copiar arquivos do dist
echo "📋 Copiando arquivos do build..."
git checkout main -- dist/
cp -r dist/* .
rm -rf dist/

# Adicionar e commitar mudanças
echo "💾 Fazendo commit..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S') - Atualização automática"

# Push para GitHub
echo "📤 Enviando para GitHub..."
git push origin gh-pages

# Voltar para main
echo "🔄 Voltando para branch main..."
git checkout main

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Seu site estará disponível em: https://LucasRZamboni.github.io/Academia/"
echo "⏰ Aguarde alguns minutos para o GitHub Pages atualizar o cache."
