import React, { useState } from 'react'
import { useAuthStore } from '../../zustand/authStore'

function EmailLoginForm() {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { signInWithEmail, loading, error } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (emailOrPhone.trim()) {
      await signInWithEmail(emailOrPhone, password)
    }
  }

  const handleNext = () => {
    if (emailOrPhone.trim()) {
      setShowPassword(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!showPassword ? (
        <>
          {/* Email/Phone Input */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Telefon numarası, e-posta veya kullanıcı adı"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            />
            
            <button
              type="button"
              onClick={handleNext}
              disabled={!emailOrPhone.trim() || loading}
              className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              İleri
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="text-white hover:underline text-sm"
            >
              Şifreni mi unuttun?
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Password Step */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm">Şifreni gir</label>
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              autoFocus
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={!password.trim() || loading}
              className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş yap'}
            </button>

            <div className="text-center">
              <button
                type="button"
                className="text-white hover:underline text-sm"
              >
                Şifreni mi unuttun?
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowPassword(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ← Geri dön
              </button>
            </div>
          </div>
        </>
      )}

      {error && (
        <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800 rounded p-2">
          {error}
        </div>
      )}
    </form>
  )
}

export default EmailLoginForm 