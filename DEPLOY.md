# 🚀 Guia de Deploy para GitHub Pages

## ⚠️ Problema Resolvido
O GitHub Actions estava causando problemas com submodules. Agora usamos deploy manual que é mais confiável.

## 📋 Passo a Passo

### 1. **Deploy Manual (Recomendado)**

```bash
# Execute este comando para fazer o deploy
npm run deploy
```

### 2. **Deploy via Script**

```bash
# Ou execute o script
./deploy.sh
```

### 3. **Deploy Manual Completo**

```bash
# 1. Build do projeto
npm run build

# 2. Copiar 404.html para SPA
cp public/404.html dist/404.html

# 3. Deploy para gh-pages
npx gh-pages -d dist
```

## ⚙️ Configuração no GitHub

1. **Vá para o seu repositório no GitHub**
2. **Settings** → **Pages**
3. **Source**: "Deploy from a branch"
4. **Branch**: `gh-pages`
5. **Folder**: `/ (root)`
6. **Save**

## 🌐 URL do Site

Seu site ficará disponível em:
`https://SEU-USUARIO.github.io/Academia/`

## 🔄 Atualizações

Para atualizar o site:
1. Faça suas mudanças no código
2. Execute: `npm run deploy`
3. Aguarde alguns minutos para o GitHub Pages atualizar

## ✅ Vantagens do Deploy Manual

- ✅ Sem problemas de submodules
- ✅ Controle total sobre o processo
- ✅ Mais rápido e confiável
- ✅ Funciona sempre

## 🆘 Se Algo Der Errado

1. **Verifique se o build funciona:**
   ```bash
   npm run build
   ```

2. **Verifique se a branch gh-pages foi criada:**
   ```bash
   git branch -a
   ```

3. **Force o deploy:**
   ```bash
   npx gh-pages -d dist --force
   ```
