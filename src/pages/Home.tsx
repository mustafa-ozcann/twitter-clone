import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Anasayfa</h1>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="max-w-2xl">
          {/* Tweet Box */}
          <div className="border-b border-gray-800 pb-6 mb-6">
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-300">
                  <g>
                    <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                  </g>
                </svg>
              </div>
              <div className="flex-1">
                <textarea 
                  placeholder="Neler oluyor?"
                  className="w-full bg-transparent text-xl placeholder-gray-500 resize-none border-none outline-none"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4 text-blue-400">
                    {/* Media Icons */}
                    <button className="hover:bg-blue-900/20 p-2 rounded-full">
                      📷
                    </button>
                    <button className="hover:bg-blue-900/20 p-2 rounded-full">
                      📊
                    </button>
                    <button className="hover:bg-blue-900/20 p-2 rounded-full">
                      😊
                    </button>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold disabled:opacity-50">
                    Gönder
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-2">Hoş geldiniz!</h2>
              <p className="text-gray-500">
                Twitter Clone'a hoş geldiniz. Sidebar'dan farklı sayfalara gidebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 