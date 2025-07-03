import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../zustand/authStore'

function Sidebar() {
  const location = useLocation()
  const { user, logout } = useAuthStore()

  const navigationItems = [
    {
      name: 'Anasayfa',
      path: '/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.534.88.534.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.051 2.66 2.051h9.282c1.35 0 2.444-.837 2.66-2.05l1.588-11.25.734.396c.485.263 1.092.082 1.356-.405.263-.486.08-1.093-.406-1.357zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Keşfet',
      path: '/explore',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Bildirimler',
      path: '/notifications',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.234l-1.141-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Mesajlar',
      path: '/messages',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Grok',
      path: '/grok',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Yer İşaretleri',
      path: '/bookmarks',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Premium',
      path: '/premium',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      )
    },
    {
      name: 'Profil',
      path: `/profile/${user?.uid || 'me'}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <g>
            <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
          </g>
        </svg>
      )
    }
  ]

  return (
    <div className="w-64 h-screen bg-black p-4 flex flex-col">
      {/* X Logo */}
      <div className="mb-8 p-3">
        <Link to="/" className="inline-block hover:bg-gray-900 rounded-full p-2 transition-colors">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-white"
            aria-hidden="true"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-4 px-3 py-3 rounded-full transition-colors text-xl ${
                    isActive 
                      ? 'font-bold text-white' 
                      : 'text-gray-100 hover:bg-gray-900'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-gray-100'}>
                    {item.icon}
                  </span>
                  <span className="hidden xl:block">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Tweet Button */}
      <div className="mb-4">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg xl:block hidden">
          Gönder
        </button>
        {/* Mobile Tweet Button */}
        <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center xl:hidden transition-colors">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <g>
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3.03-6.78 2.16-2.912 5.29-4.911 9.45-4.78C20.95 5.46 19.9 8.51 16 11z"></path>
            </g>
          </svg>
        </button>
      </div>

      {/* User Profile Section */}
      {user && (
        <div className="border-t border-gray-800 pt-4">
          <div className="flex items-center justify-between p-3 hover:bg-gray-900 rounded-full transition-colors cursor-pointer group">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {/* Profile Image */}
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-300">
                    <g>
                      <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                    </g>
                  </svg>
                )}
              </div>
              
              {/* User Info - Hidden on mobile */}
              <div className="hidden xl:block flex-1 min-w-0">
                <div className="font-bold text-white text-sm truncate">
                  {user.displayName || 'User'}
                </div>
                <div className="text-gray-500 text-sm truncate">
                  @{user.email?.split('@')[0] || 'username'}
                </div>
              </div>
            </div>
            
            {/* More Options - Hidden on mobile */}
            <button 
              onClick={logout}
              className="hidden xl:block text-gray-400 hover:text-white p-1"
              title="Çıkış Yap"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <g>
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 8l-5.5-5.5 1.41-1.41L11 16.17 20.59 6.58 22 8l-10 12z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar