// Utilitário para gerenciar caminhos de imagens
// Suporta imagens locais e nuvem (Firebase Storage, AWS S3, etc.)

// Configuração de imagens
const IMAGE_CONFIG = {
  // Modo atual: 'local' ou 'cloud'
  mode: 'local',
  
  // Configurações para modo local
  local: {
    dev: '/images/exercises/',
    prod: '/Academia/images/exercises/'
  },
  
  // Configurações para modo nuvem (futuro)
  cloud: {
    // Firebase Storage
    firebase: {
      baseUrl: 'https://firebasestorage.googleapis.com/v0/b/',
      bucket: 'seu-projeto.appspot.com',
      folder: 'exercises/'
    },
    
    // AWS S3
    s3: {
      baseUrl: 'https://s3.amazonaws.com/',
      bucket: 'seu-bucket',
      folder: 'exercises/'
    },
    
    // Cloudinary
    cloudinary: {
      baseUrl: 'https://res.cloudinary.com/',
      cloudName: 'seu-cloud',
      folder: 'exercises/'
    }
  }
}

// Função principal para obter caminho da imagem
const getImagePath = (imageName, options = {}) => {
  const { mode = IMAGE_CONFIG.mode, provider = 'firebase' } = options
  
  if (mode === 'local') {
    // Modo local (atual)
    if (import.meta.env.DEV) {
      return `${IMAGE_CONFIG.local.dev}${imageName}`
    }
    return `${IMAGE_CONFIG.local.prod}${imageName}`
  }
  
  if (mode === 'cloud') {
    // Modo nuvem (futuro)
    const cloudConfig = IMAGE_CONFIG.cloud[provider]
    if (!cloudConfig) {
      console.warn(`Provedor de nuvem '${provider}' não configurado`)
      return getImagePath(imageName, { mode: 'local' }) // Fallback para local
    }
    
    if (provider === 'firebase') {
      return `${cloudConfig.baseUrl}${cloudConfig.bucket}/o/${cloudConfig.folder}${imageName}?alt=media`
    } else if (provider === 's3') {
      return `${cloudConfig.baseUrl}${cloudConfig.bucket}/${cloudConfig.folder}${imageName}`
    } else if (provider === 'cloudinary') {
      return `${cloudConfig.baseUrl}${cloudConfig.cloudName}/image/upload/${cloudConfig.folder}${imageName}`
    }
  }
  
  // Fallback para modo local
  return getImagePath(imageName, { mode: 'local' })
}

// Função para obter URL de imagem com fallback
const getImageWithFallback = (imageName, fallbackImage = 'default-exercise.png') => {
  return new Promise((resolve) => {
    const img = new Image()
    const imagePath = getImagePath(imageName)
    
    img.onload = () => resolve(imagePath)
    img.onerror = () => {
      console.warn(`Imagem não encontrada: ${imageName}, usando fallback`)
      resolve(getImagePath(fallbackImage))
    }
    
    img.src = imagePath
  })
}

// Função para pré-carregar imagens
const preloadImages = (imageNames) => {
  const promises = imageNames.map(imageName => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(imageName)
      img.onerror = () => resolve(null)
      img.src = getImagePath(imageName)
    })
  })
  
  return Promise.all(promises)
}

// Função para obter todas as imagens de uma categoria
const getCategoryImages = (category) => {
  // Esta função pode ser expandida para buscar imagens de uma categoria específica
  // Por enquanto, retorna as imagens locais
  return []
}

// Função para migrar imagens para nuvem (futuro)
const migrateImagesToCloud = async (provider = 'firebase') => {
  // Esta função será implementada quando necessário
  console.log(`Migração para ${provider} não implementada ainda`)
  return false
}

export default getImagePath
export { 
  getImageWithFallback, 
  preloadImages, 
  getCategoryImages, 
  migrateImagesToCloud,
  IMAGE_CONFIG 
}
