import React, { useState } from 'react'
import { signInAnonymously, signInWithEmail, createAccount } from '../services/authService'

const AuthModal = ({ isOpen, onClose, onSuccess, canClose = true }) => {
  const [mode, setMode] = useState('login') // 'login', 'register', 'anonymous'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (mode === 'login') {
        await signInWithEmail(formData.email, formData.password)
      } else if (mode === 'register') {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('As senhas não coincidem')
        }
        await createAccount(formData.email, formData.password, formData.name)
      }
      onSuccess()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAnonymousLogin = async () => {
    setLoading(true)
    setError('')

    try {
      await signInAnonymously()
      onSuccess()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-dark-100">
            {mode === 'login' ? 'Entrar' : mode === 'register' ? 'Criar Conta' : 'Acesso Rápido'}
          </h2>
          {canClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 hover:text-white transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {error && (
          <div className="bg-danger-900/30 border border-danger-600 text-danger-300 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Botão de acesso anônimo */}
        <div className="mb-6">
          <button
            onClick={handleAnonymousLogin}
            disabled={loading}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            {loading ? (
              <i className="fas fa-spinner fa-spin mr-2"></i>
            ) : (
              <i className="fas fa-user-secret mr-2"></i>
            )}
            Continuar Anonimamente
          </button>
          <p className="text-xs text-dark-400 mt-2 text-center">
            Seus dados serão salvos localmente
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dark-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-dark-800 text-dark-400">ou</span>
          </div>
        </div>

        {/* Formulário de login/registro */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={mode === 'register'}
                className="w-full bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
                placeholder="Seu nome"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required={mode !== 'anonymous'}
              className="w-full bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Senha
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required={mode !== 'anonymous'}
              className="w-full bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Confirmar Senha
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={mode === 'register'}
                className="w-full bg-dark-800/50 border border-dark-600 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-400 focus:outline-none focus:border-primary-400 transition-colors"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-secondary-600 hover:bg-secondary-700 disabled:bg-secondary-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            {loading ? (
              <i className="fas fa-spinner fa-spin mr-2"></i>
            ) : (
              <i className={`fas ${mode === 'login' ? 'fa-sign-in-alt' : 'fa-user-plus'} mr-2`}></i>
            )}
            {mode === 'login' ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        {/* Links para alternar entre login e registro */}
        <div className="mt-6 text-center">
          {mode === 'login' ? (
            <p className="text-dark-300">
              Não tem uma conta?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Criar conta
              </button>
            </p>
          ) : (
            <p className="text-dark-300">
              Já tem uma conta?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Entrar
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthModal
