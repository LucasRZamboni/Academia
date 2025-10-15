#!/usr/bin/env node

import { execSync } from 'child_process';
import { platform } from 'os';

console.log('🚀 Iniciando deploy automático para GitHub Pages...');

// Detectar sistema operacional
const os = platform();
console.log(`Sistema operacional detectado: ${os}`);

try {
  if (os === 'win32') {
    console.log('🪟 Executando script para Windows...');
    execSync('deploy.bat', { stdio: 'inherit' });
  } else {
    console.log('🍎 Executando script para macOS/Linux...');
    execSync('node deploy.js', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('❌ Erro durante o deploy:', error.message);
  process.exit(1);
}
