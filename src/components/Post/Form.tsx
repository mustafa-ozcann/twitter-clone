import React, { useState } from 'react'
import { useAuthStore } from '../../zustand/authStore'
import { createPost } from '../../firebase/PostService'

interface PostFormProps {
  onPostCreated?: () => void
}

function PostForm({ onPostCreated }: PostFormProps) {
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!content.trim() || !user) return

    setIsLoading(true)
    try {
      await createPost({
        content: content.trim(),
        createdAt: new Date(),
        userId: user.uid,
        userName: user.displayName || 'Kullanıcı',
        userAvatar: user.photoURL || '',
        likes: [],
        comments: [],
        retweets: [],
        replies: []
      })
      
      setContent('')
      onPostCreated?.()
    } catch (error) {
      console.error('Post oluşturulurken hata:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const characterCount = content.length
  const maxCharacters = 280
  const isOverLimit = characterCount > maxCharacters

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex space-x-3">
        {/* Profile Image */}
        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
          {user?.photoURL ? (
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-300">
              <g>
                <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
              </g>
            </svg>
          )}
        </div>

        {/* Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            {/* Text Area */}
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Neler oluyor?"
              className="w-full bg-transparent text-white text-xl placeholder-gray-500 resize-none border-none outline-none min-h-[120px]"
              disabled={isLoading}
            />

            {/* Media and Actions Row */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-800">
              {/* Media Buttons */}
              <div className="flex items-center space-x-4">
                {/* Image */}
                <button 
                  type="button"
                  className="p-2 hover:bg-blue-900/20 rounded-full transition-colors text-blue-400"
                  title="Fotoğraf ekle"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3zm0 12V7h18v10H3zm13.5-7L14 13l-2.5-3L8 14h8l-2.5-4z"/>
                  </svg>
                </button>

                {/* Video */}
                <button 
                  type="button"
                  className="p-2 hover:bg-blue-900/20 rounded-full transition-colors text-blue-400"
                  title="Video ekle"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7v4.79c0 .45-.54.67-.85.35L16 10.5V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1.5l2.15-1.64c.31-.32.85-.1.85.35V7z"/>
                  </svg>
                </button>

                {/* Poll */}
                <button 
                  type="button"
                  className="p-2 hover:bg-blue-900/20 rounded-full transition-colors text-blue-400"
                  title="Anket oluştur"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .414.336.75.75.75s.75-.336.75-.75V6.293h12.556c.151 0 .277.126.277.277v2.31c0 .414.336.75.75.75s.75-.336.75-.75V6.57c0-1.8-1.472-3.277-3.277-3.277H3.5V2.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75v18.472c0 .414.336.75.75.75s.75-.336.75-.75V19.83h15.222c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.25V17.83h15.972c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.25v-1.25h16.694c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.25V12.58h15.972c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.25v-1.25h15.972c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/>
                  </svg>
                </button>

                {/* Emoji */}
                <button 
                  type="button"
                  className="p-2 hover:bg-blue-900/20 rounded-full transition-colors text-blue-400"
                  title="Emoji ekle"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
                    <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.81-.124 1.036.226.747 1.162 2.016 1.853 3.395 1.853s2.648-.691 3.396-1.853c.225-.35.688-.45 1.036-.226.35.224.45.687.226 1.035-1.025 1.594-2.766 2.544-4.658 2.544z"/>
                    <circle cx="8.5" cy="8.5" r="1.25"/>
                    <circle cx="15.5" cy="8.5" r="1.25"/>
                  </svg>
                </button>

                {/* Location */}
                <button 
                  type="button"
                  className="p-2 hover:bg-blue-900/20 rounded-full transition-colors text-blue-400"
                  title="Konum ekle"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12z"/>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 18.5c-1.19-1.75-5-7.9-5-11.5 0-2.76 2.24-5 5-5s5 2.24 5 5c0 3.6-3.81 9.75-5 11.5z"/>
                  </svg>
                </button>
              </div>

              {/* Character Count and Post Button */}
              <div className="flex items-center space-x-3">
                {/* Character Counter */}
                {characterCount > 0 && (
                  <div className="relative w-8 h-8">
                    <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#2F3336"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={isOverLimit ? "#F4212E" : "#1D9BF0"}
                        strokeWidth="2"
                        strokeDasharray={`${(characterCount / maxCharacters) * 100}, 100`}
                      />
                    </svg>
                    {isOverLimit && (
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-red-500">
                        {maxCharacters - characterCount}
                      </span>
                    )}
                  </div>
                )}

                {/* Separator */}
                {content.trim() && (
                  <div className="w-px h-6 bg-gray-600"></div>
                )}

                {/* Post Button */}
                <button
                  type="submit"
                  disabled={!content.trim() || isLoading || isOverLimit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1.5 rounded-full font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostForm
