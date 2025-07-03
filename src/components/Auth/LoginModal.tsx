import React, { useState } from 'react'
import Modal from '../UI/Modal'
import AuthButtons from './AuthButtons'
import EmailLoginForm from './EmailLoginForm'
import { useAuthStore } from '../../zustand/authStore'

function LoginModal() {
  const { isLoginModalOpen, closeLoginModal } = useAuthStore()
  const [showEmailForm, setShowEmailForm] = useState(false)

  const handleClose = () => {
    closeLoginModal()
    setShowEmailForm(false)
  }

  return (
    <Modal isOpen={isLoginModalOpen} onClose={handleClose}>
      <div className="pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          {/* X Logo */}
          <div className="flex justify-center mb-6">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 fill-white"
              aria-hidden="true"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          
          <h1 className="text-white text-xl font-bold mb-6">
            X'e giriş yap
          </h1>
        </div>

        {/* Content */}
        {!showEmailForm ? (
          <>
            {/* Auth Buttons */}
            <div className="mb-6">
              <AuthButtons isModal={true} />
            </div>

            {/* Divider */}
            <div className='flex items-center my-6'>
              <div className='flex-1 border-t border-gray-600'></div>
              <div className='px-4 text-gray-500 text-sm'>veya</div>
              <div className='flex-1 border-t border-gray-600'></div>
            </div>

            {/* Email Login Button */}
            <button
              onClick={() => setShowEmailForm(true)}
              className="w-full bg-transparent border border-gray-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition-colors duration-200 mb-4"
            >
              E-posta ile giriş yap
            </button>

            {/* Footer Links */}
            <div className="text-center space-y-4">
              <p className="text-gray-500 text-sm">
                Henüz bir hesabın yok mu?{' '}
                <button className="text-blue-400 hover:underline">
                  Kaydol
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Email Login Form */}
            <EmailLoginForm />
            
            {/* Back to options */}
            <div className="text-center mt-6">
              <p className="text-gray-500 text-sm">
                Henüz bir hesabın yok mu?{' '}
                <button className="text-blue-400 hover:underline">
                  Kaydol
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}

export default LoginModal 