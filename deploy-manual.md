# 🚀 Deploy Manual para GitHub Pages

## Método 1: Deploy via npm script

```bash
# 1. Faça o build
npm run build

# 2. Copie o 404.html
cp public/404.html dist/404.html

# 3. Deploy para gh-pages
npx gh-pages -d dist
```

## Método 2: Deploy via script

```bash
# Execute o script
./deploy.sh
```

## Método 3: Deploy manual completo

```bash
# 1. Build
npm run build

# 2. Copiar 404.html
cp public/404.html dist/404.html

# 3. Inicializar gh-pages (só na primeira vez)
git subtree push --prefix dist origin gh-pages

# 4. Ou usar gh-pages
npx gh-pages -d dist
```

## Configuração no GitHub

1. Vá em **Settings** → **Pages**
2. **Source**: "Deploy from a branch"
3. **Branch**: `gh-pages`
4. **Folder**: `/ (root)`

## URL do site

Seu site ficará disponível em:
`https://SEU-USUARIO.github.io/Academia/`
