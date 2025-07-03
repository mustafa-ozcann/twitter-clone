import React from 'react'

function Notifications() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Bildirimler</h1>
          <button className="p-2 hover:bg-gray-900 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 7.25c-.78 0-1.43.65-1.43 1.43s.65 1.43 1.43 1.43 1.43-.65 1.43-1.43-.65-1.43-1.43-1.43zm0 4.29c-.78 0-1.43.65-1.43 1.43s.65 1.43 1.43 1.43 1.43-.65 1.43-1.43-.65-1.43-1.43-1.43z"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button className="flex-1 py-4 text-center font-semibold border-b-2 border-blue-500 text-white">
            Tümü
          </button>
          <button className="flex-1 py-4 text-center font-semibold text-gray-500 hover:text-white">
            Bahsedenler
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="max-w-2xl">
          {/* Notifications List */}
          <div className="space-y-4">
            {[
              {
                type: "like",
                icon: "❤️",
                message: "ReactJS senin gönderini beğendi",
                time: "2s",
                user: { name: "React", username: "@reactjs" }
              },
              {
                type: "retweet",
                icon: "🔄",
                message: "TypeScript senin gönderini retweetledi",
                time: "1m",
                user: { name: "TypeScript", username: "@typescript" }
              },
              {
                type: "follow",
                icon: "👤",
                message: "JavaScript seni takip etmeye başladı",
                time: "5m",
                user: { name: "JavaScript", username: "@javascript" }
              },
              {
                type: "mention",
                icon: "💬",
                message: "Next.js seni bir gönderide bahsetti",
                time: "1h",
                user: { name: "Next.js", username: "@nextjs" }
              }
            ].map((notification, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 hover:bg-gray-900/50 rounded-lg cursor-pointer transition-colors">
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-xl">{notification.icon}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{notification.user.name[0]}</span>
                    </div>
                    <div>
                      <span className="font-semibold">{notification.user.name}</span>
                      <span className="text-gray-500 ml-1">{notification.user.username}</span>
                    </div>
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm">{notification.time}</span>
                  </div>
                  <p className="text-gray-300">{notification.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for older notifications */}
          <div className="text-center py-8 mt-8">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.234l-1.141-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Hepsi bu kadar!</h3>
            <p className="text-gray-500">
              Tüm bildirimlerini gördün. Daha fazla etkinlik olduğunda burada görünecek.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications