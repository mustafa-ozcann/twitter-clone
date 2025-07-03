import React from 'react'

function Bookmarks() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Yer İşaretleri</h1>
        <p className="text-gray-500 text-sm">@yourusername</p>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="max-w-2xl">
          {/* Empty State */}
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Daha sonra okumak için Gönderiləri kaydet</h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
              Tweet'lerin yanındaki yer işareti simgesine tıklayarak bunları daha sonra kolayca bulabilirsin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmarks