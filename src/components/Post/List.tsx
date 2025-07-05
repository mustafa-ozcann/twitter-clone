import React, { useEffect } from 'react'
import PostItem from './Item'
import usePostStore from '../../zustand/postStore'
import { useNavigate } from 'react-router-dom'

function PostList() {
  const { posts, loading, getPosts } = usePostStore()
  const navigate = useNavigate()
  console.log(posts)

  useEffect(() => {
    getPosts()
  }, [getPosts])

  if (loading) {
    return (
      <div className="space-y-4">
        {/* Loading skeletons */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="border-b border-gray-800 p-4 animate-pulse">
            <div className="flex space-x-3">
              {/* Profile skeleton */}
              <div className="w-12 h-12 bg-gray-700 rounded-full flex-shrink-0"></div>
              
              {/* Content skeleton */}
              <div className="flex-1 space-y-3">
                {/* Header skeleton */}
                <div className="flex items-center space-x-2">
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                  <div className="h-4 bg-gray-700 rounded w-8"></div>
                </div>
                
                {/* Content skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
                
                {/* Actions skeleton */}
                <div className="flex items-center space-x-8 mt-3">
                  <div className="h-4 bg-gray-700 rounded w-8"></div>
                  <div className="h-4 bg-gray-700 rounded w-8"></div>
                  <div className="h-4 bg-gray-700 rounded w-8"></div>
                  <div className="h-4 bg-gray-700 rounded w-8"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16 border-b border-gray-800">
        <div className="max-w-sm mx-auto">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3.03-6.78 2.16-2.912 5.29-4.911 9.45-4.78C20.95 5.46 19.9 8.51 16 11z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Hoş geldin!
          </h3>
          <p className="text-gray-500 leading-relaxed">
            İlk tweetini paylaştığında burada görünecek. Neler düşünüyorsun?
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} onClick={() => navigate(`/post/${post.id}`)} style={{cursor:'pointer'}}>
          <PostItem 
            post={post}
          />
        </div>
      ))}
    </div>
  )
}

export default PostList
