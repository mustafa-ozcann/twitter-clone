import React from 'react'

function Explore() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Keşfet</h1>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="max-w-2xl">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Twitter'ı Ara"
                className="w-full bg-gray-900 text-white pl-10 pr-4 py-3 rounded-full border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-gray-900 rounded-2xl p-4 mb-6">
            <h2 className="text-xl font-bold mb-4">Gündemde</h2>
            <div className="space-y-3">
              {[
                { category: "Teknoloji · Trend", title: "#ReactJS", posts: "25.4B Gönderi" },
                { category: "Türkiye'de trend", title: "#TypeScript", posts: "12.8B Gönderi" },
                { category: "Spor · Trend", title: "#JavaScript", posts: "45.2B Gönderi" },
                { category: "Müzik · Trend", title: "#WebDevelopment", posts: "8.9B Gönderi" }
              ].map((trend, index) => (
                <div key={index} className="hover:bg-gray-800 p-3 rounded-lg cursor-pointer transition-colors">
                  <p className="text-gray-500 text-sm">{trend.category}</p>
                  <p className="font-bold">{trend.title}</p>
                  <p className="text-gray-500 text-sm">{trend.posts}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who to Follow */}
          <div className="bg-gray-900 rounded-2xl p-4">
            <h2 className="text-xl font-bold mb-4">Takip edilecek kişiler</h2>
            <div className="space-y-3">
              {[
                { name: "React", username: "@reactjs", verified: true },
                { name: "TypeScript", username: "@typescript", verified: true },
                { name: "JavaScript", username: "@javascript", verified: false }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{user.name[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-bold">{user.name}</span>
                        {user.verified && (
                          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-2.284-1.525c-.236-.157-.302-.473-.145-.708.157-.235.473-.302.708-.145l1.673 1.116 3.754-5.631c.212-.318.64-.4.968-.18.328.227.4.655.18.968z"/>
                          </svg>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">{user.username}</p>
                    </div>
                  </div>
                  <button className="bg-white text-black px-4 py-1.5 rounded-full font-bold hover:bg-gray-200 transition-colors">
                    Takip et
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore