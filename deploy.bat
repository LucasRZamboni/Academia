@echo off
setlocal enabledelayedexpansion

echo 🚀 Iniciando deploy para GitHub Pages...

REM Verificar se estamos na branch main
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
echo Branch atual: !current_branch!

if not "!current_branch!"=="main" (
    echo ⚠️  Mudando para branch main...
    git checkout main
)

REM Build do projeto
echo 📦 Fazendo build...
call npm run build
if errorlevel 1 (
    echo ❌ Erro durante o build
    exit /b 1
)

REM Copiar 404.html para SPA
echo 📄 Copiando 404.html...
if exist "public\404.html" (
    copy "public\404.html" "dist\404.html" >nul
    echo ✅ 404.html copiado com sucesso
) else (
    echo ⚠️  Arquivo 404.html não encontrado em public/
)

REM Verificar se gh-pages está disponível
echo 📦 Verificando gh-pages...
npx gh-pages --version >nul 2>&1
if errorlevel 1 (
    echo 📦 Instalando gh-pages...
    call npm install --save-dev gh-pages
)

REM Fazer deploy
echo 📤 Fazendo deploy para GitHub Pages...
call npx gh-pages -d dist
if errorlevel 1 (
    echo ❌ Erro durante o deploy
    exit /b 1
)

echo ✅ Deploy concluído com sucesso!
echo 🌐 Seu site estará disponível em: https://LucasRZamboni.github.io/Academia/
echo ⏰ Aguarde alguns minutos para o GitHub Pages atualizar o cache.

pause
