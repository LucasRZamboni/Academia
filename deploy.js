#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, copyFileSync, rmSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🚀 Iniciando deploy para GitHub Pages...');

// Função para executar comandos
function execCommand(command, options = {}) {
  try {
    console.log(`Executando: ${command}`);
    return execSync(command, { 
      stdio: 'inherit', 
      encoding: 'utf8',
      ...options 
    });
  } catch (error) {
    console.error(`Erro ao executar comando: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Função para verificar se estamos na branch correta
function checkBranch() {
  try {
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`Branch atual: ${currentBranch}`);
    
    if (currentBranch !== 'main') {
      console.log('⚠️  Mudando para branch main...');
      execCommand('git checkout main');
    }
  } catch (error) {
    console.error('Erro ao verificar branch:', error.message);
    process.exit(1);
  }
}

// Função para fazer build
function buildProject() {
  console.log('📦 Fazendo build...');
  execCommand('npm run build');
}

// Função para copiar 404.html
function copy404File() {
  console.log('📄 Copiando 404.html...');
  const source404 = join('public', '404.html');
  const dest404 = join('dist', '404.html');
  
  if (existsSync(source404)) {
    copyFileSync(source404, dest404);
    console.log('✅ 404.html copiado com sucesso');
  } else {
    console.log('⚠️  Arquivo 404.html não encontrado em public/');
  }
}

// Função para fazer deploy usando gh-pages
function deployToGhPages() {
  console.log('📤 Fazendo deploy para GitHub Pages...');
  
  // Verificar se gh-pages está instalado
  try {
    execSync('npx gh-pages --version', { stdio: 'pipe' });
  } catch (error) {
    console.log('📦 Instalando gh-pages...');
    execCommand('npm install --save-dev gh-pages');
  }
  
  // Fazer deploy
  execCommand('npx gh-pages -d dist');
}

// Função principal
function main() {
  try {
    // Verificar se estamos em um repositório git
    execSync('git status', { stdio: 'pipe' });
    
    checkBranch();
    buildProject();
    copy404File();
    deployToGhPages();
    
    console.log('✅ Deploy concluído com sucesso!');
    console.log('🌐 Seu site estará disponível em: https://LucasRZamboni.github.io/Academia/');
    console.log('⏰ Aguarde alguns minutos para o GitHub Pages atualizar o cache.');
    
  } catch (error) {
    if (error.message.includes('not a git repository')) {
      console.error('❌ Erro: Este não é um repositório Git válido.');
      console.error('Execute "git init" para inicializar um repositório Git.');
    } else {
      console.error('❌ Erro durante o deploy:', error.message);
    }
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
