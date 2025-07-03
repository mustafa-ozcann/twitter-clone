import React from 'react'

function Messages() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Mesajlar</h1>
      </div>
      
      {/* Content */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Messages List */}
        <div className="w-1/3 border-r border-gray-800">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Mesajlar</h2>
              <button className="p-2 hover:bg-gray-900 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"/>
                </svg>
              </button>
            </div>
            
            {/* Search */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Mesajlarda ara"
                className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Message List */}
            <div className="space-y-1">
              {[
                { name: "React Team", username: "@reactjs", message: "New features coming soon!", time: "2s", unread: true },
                { name: "TypeScript", username: "@typescript", message: "Type safety is important", time: "1m", unread: false },
                { name: "JavaScript Info", username: "@javascript", message: "Learn modern JS", time: "5m", unread: true }
              ].map((chat, index) => (
                <div key={index} className={`p-3 hover:bg-gray-900 cursor-pointer rounded-lg ${chat.unread ? 'bg-gray-900/50' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{chat.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold truncate">{chat.name}</span>
                        <span className="text-gray-500 text-sm">{chat.time}</span>
                      </div>
                      <p className="text-gray-500 text-sm truncate">{chat.message}</p>
                    </div>
                    {chat.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Mesajlarını seç</h2>
              <p className="text-gray-500 max-w-sm">
                Mevcut sohbetlerinden birini seç, yeni bir sohbet başlat veya sadece dolaş.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold transition-colors">
                Yeni mesaj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages