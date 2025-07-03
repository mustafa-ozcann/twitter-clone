import React from 'react'

function Grok() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Grok</h1>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center py-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">G</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Grok'a Hoş Geldin!</h2>
            <p className="text-gray-500">
              AI destekli sohbet deneyimi. Sorularını sor, bilgi al.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-6">
            <div className="space-y-4">
              {/* Grok Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">G</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300">
                    Merhaba! Ben Grok, senin AI asistanın. Size nasıl yardımcı olabilirim?
                  </p>
                </div>
              </div>
              
              {/* Suggested Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[
                  "Bugünün haberleri neler?",
                  "React hakkında bilgi ver",
                  "JavaScript öğrenmek için tavsiye",
                  "Twitter'da trend olan konular"
                ].map((question, index) => (
                  <button 
                    key={index}
                    className="text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <span className="text-gray-300">{question}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-gray-900 rounded-2xl p-4">
            <div className="flex space-x-3">
              <div className="flex-1">
                <textarea
                  placeholder="Grok'a bir soru sor..."
                  className="w-full bg-transparent text-white placeholder-gray-500 resize-none border-none outline-none"
                  rows={2}
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Info */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Grok, bilgilendirici ve eğlenceli yanıtlar vermeye odaklanır.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Grok