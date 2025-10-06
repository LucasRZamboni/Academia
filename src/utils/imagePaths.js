// Utilitário para gerenciar caminhos de imagens no GitHub Pages
const getImagePath = (imageName) => {
  // Em desenvolvimento, usa o caminho normal
  if (import.meta.env.DEV) {
    return `/images/exercises/${imageName}`
  }
  
  // Em produção (GitHub Pages), usa o base path
  return `/Academia/images/exercises/${imageName}`
}

export default getImagePath
