import React, { useState } from 'react'
import { signInWithEmail, createAccount, resetPassword } from '../services/authService'

const LoginScreen = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState('login') // 'login', 'register', 'forgot'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
    setSuccess('')
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
      onLoginSuccess()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      await resetPassword(formData.email)
      setSuccess('Email de recuperação enviado! Verifique sua caixa de entrada.')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="icon-wrapper mx-auto mb-4">
              <i className="fas fa-dumbbell text-2xl"></i>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Academia</h1>
            <p className="text-gray-300">Gerencie seus treinos de forma inteligente</p>
          </div>

          {/* Card de Login */}
          <div className="glass-card">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {mode === 'login' ? 'Entrar' : mode === 'register' ? 'Criar Conta' : 'Recuperar Senha'}
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                {mode === 'login' ? 'Entre com sua conta' : mode === 'register' ? 'Crie sua conta para começar' : 'Digite seu email para receber o link de recuperação'}
              </p>
            </div>

            {error && (
              <div className="bg-danger-900/30 border border-danger-600 text-danger-300 p-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-success-900/30 border border-success-600 text-success-300 p-3 rounded-lg mb-6">
                {success}
              </div>
            )}


            {/* Formulário de login/registro/recuperação */}
            <form onSubmit={mode === 'forgot' ? handleForgotPassword : handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={mode === 'register'}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required={true}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              {mode !== 'forgot' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required={true}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              )}

              {mode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={mode === 'register'}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
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
                  <i className={`fas ${mode === 'login' ? 'fa-sign-in-alt' : mode === 'register' ? 'fa-user-plus' : 'fa-envelope'} mr-2`}></i>
                )}
                {mode === 'login' ? 'Entrar' : mode === 'register' ? 'Criar Conta' : 'Enviar Email'}
              </button>
            </form>

            {/* Links para alternar entre login, registro e recuperação */}
            <div className="mt-6 text-center space-y-2">
              {mode === 'login' ? (
                <>
                  <p className="text-gray-300">
                    Não tem uma conta?{' '}
                    <button
                      onClick={() => setMode('register')}
                      className="text-primary-400 hover:text-primary-300 font-medium"
                    >
                      Criar conta
                    </button>
                  </p>
                  <p className="text-gray-300">
                    Esqueceu a senha?{' '}
                    <button
                      onClick={() => setMode('forgot')}
                      className="text-primary-400 hover:text-primary-300 font-medium"
                    >
                      Recuperar senha
                    </button>
                  </p>
                </>
              ) : mode === 'register' ? (
                <p className="text-gray-300">
                  Já tem uma conta?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="text-primary-400 hover:text-primary-300 font-medium"
                  >
                    Entrar
                  </button>
                </p>
              ) : (
                <p className="text-gray-300">
                  Lembrou da senha?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="text-primary-400 hover:text-primary-300 font-medium"
                  >
                    Voltar ao login
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Crie sua conta para salvar seus treinos na nuvem
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
