
import { useAuthStore } from '../zustand/authStore'
import { useParams } from 'react-router-dom'
import Posts from '../components/Profile/Posts'

function Profile() {
  const { user } = useAuthStore()
  const { id } = useParams()
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold">{user?.displayName || 'Kullanıcı'}</h1>
            <p className="text-gray-500 text-sm">42 Gönderi</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div>
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Profile Section */}
        <div className="px-6 pb-6">
          {/* Profile Image */}
          <div className="flex justify-between items-start mb-4">
            <div className="relative -mt-16">
              <div className="w-32 h-32 bg-gray-600 rounded-full border-4 border-black flex items-center justify-center overflow-hidden">
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 fill-gray-300">
                    <g>
                      <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
                    </g>
                  </svg>
                )}
              </div>
            </div>
            <button className="border border-gray-600 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-900 transition-colors">
              Profili düzenle
            </button>
          </div>

          {/* User Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1">{user?.displayName || 'Kullanıcı Adı'}</h2>
            <p className="text-gray-500 mb-3">@{user?.email?.split('@')[0] || 'username'}</p>
            <p className="text-white mb-3">
              React, TypeScript ve modern web teknolojileri ile ilgileniyorum. 
              Bu Twitter clone projesi ile öğrendiklerimi paylashıyorum. 🚀
            </p>
            
            {/* Join Date */}
            <div className="flex items-center text-gray-500 mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
                <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
              </svg>
              <span>Kasım 2024'te katıldı</span>
            </div>

            {/* Following/Followers */}
            <div className="flex space-x-6">
              <button className="hover:underline">
                <span className="font-bold">248</span>
                <span className="text-gray-500 ml-1">Takip edilen</span>
              </button>
              <button className="hover:underline">
                <span className="font-bold">1,847</span>
                <span className="text-gray-500 ml-1">Takipçi</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800">
            <div className="flex">
              <button className="flex-1 py-4 text-center font-semibold border-b-2 border-blue-500 text-white"
               >
                Gönderiler
              </button>
              <button className="flex-1 py-4 text-center font-semibold text-gray-500 hover:text-white">
                Yanıtlar
              </button>
              <button className="flex-1 py-4 text-center font-semibold text-gray-500 hover:text-white">
                Medya
              </button>
              <button className="flex-1 py-4 text-center font-semibold text-gray-500 hover:text-white">
                Beğeniler
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="mt-6">
            <Posts id={id}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile