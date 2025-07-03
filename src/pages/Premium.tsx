import React from 'react'

function Premium() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold">Premium</h1>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center py-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Premium'a Yükselt</h2>
            <p className="text-gray-400 text-lg">
              X deneyimini bir üst seviyeye taşı
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6 mb-8">
            {[
              {
                icon: "✅",
                title: "Doğrulama Rozeti",
                description: "Mavi tik ile hesabının doğrulanmış olduğunu göster"
              },
              {
                icon: "📝",
                title: "Daha Uzun Gönderiler",
                description: "10.000 karakter limiti ile daha detaylı içerik paylaş"
              },
              {
                icon: "🎨",
                title: "NFT Profil Fotoğrafları",
                description: "NFT'lerini profil fotoğrafı olarak kullan"
              },
              {
                icon: "📊",
                title: "Gelişmiş Analitik",
                description: "Gönderilerinin performansını detaylı analiz et"
              },
              {
                icon: "🎵",
                title: "Twitter Spaces",
                description: "Canlı ses sohbetleri başlat ve katıl"
              },
              {
                icon: "📱",
                title: "Özelleştirme",
                description: "Uygulama temasını ve görünümünü özelleştir"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <div className="text-4xl font-bold mb-2">
              ₺74.99<span className="text-lg font-normal">/ay</span>
            </div>
            <p className="text-blue-100 mb-6">
              İlk ay ücretsiz, istediğin zaman iptal et
            </p>
            <button className="w-full bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
              Premium'a Abone Ol
            </button>
          </div>

          {/* Terms */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Abone olarak{' '}
            <a href="#" className="text-blue-400 hover:underline">Hizmet Şartları</a>{' '}
            ve{' '}
            <a href="#" className="text-blue-400 hover:underline">Gizlilik Politikası</a>'nı kabul etmiş olursun.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Premium