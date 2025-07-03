import { useEffect } from 'react'
import { useAuthStore } from '../zustand/authStore'
import { useNavigate } from 'react-router-dom'
import AuthButtons from '../components/Auth/AuthButtons'
import LoginModal from '../components/Auth/LoginModal'

function Login() {
    const { user, error, openLoginModal } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])
    

    return (
        <>
            <div className='min-h-screen bg-black flex'>
                {/* Sol taraf - Logo */}
                <div className='flex-1 flex items-center justify-center'>
                    <div className='text-white'>
                        {/* Twitter/X Logo */}
                        <svg 
                            viewBox="0 0 24 24" 
                            className="w-80 h-80 fill-white"
                            aria-hidden="true"
                        >
                            <g>
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Sağ taraf - Login Form */}
                <div className='flex-1 flex items-center justify-center px-8'>
                    <div className='max-w-md w-full'>
                        <div className='mb-16'>
                            <h1 className='text-white text-7xl font-bold mb-12'>
                                Şu anda olup bitenler
                            </h1>
                            <h2 className='text-white text-4xl font-bold mb-8'>
                                Hemen katıl.
                            </h2>
                        </div>

                        <div className='space-y-4'>
                            {/* Auth Buttons Component */}
                            <AuthButtons />

                            {/* Şartlar */}
                            <p className='text-gray-500 text-xs leading-4'>
                                By signing up, you agree to the{' '}
                                <a href="#" className='text-blue-400 hover:underline'>Terms of Service</a>{' '}
                                and{' '}
                                <a href="#" className='text-blue-400 hover:underline'>Privacy Policy</a>,{' '}
                                including{' '}
                                <a href="#" className='text-blue-400 hover:underline'>Cookie Use</a>.
                            </p>

                            {/* Giriş yap bölümü */}
                            <div className='mt-16'>
                                <h3 className='text-white text-xl font-bold mb-6'>
                                    Zaten bir hesabın var mı?
                                </h3>
                                <button 
                                    onClick={openLoginModal}
                                    className='w-full border border-gray-600 text-blue-400 font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition-colors duration-200'
                                >
                                    Giriş yap
                                </button>
                            </div>
                        </div>

                        {/* Hata mesajı */}
                        {error && (
                            <div className='mt-4 bg-red-900/20 border border-red-800 text-red-400 px-4 py-3 rounded-lg'>
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            <LoginModal />
        </>
    )
}

export default Login