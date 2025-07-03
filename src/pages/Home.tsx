import React from 'react'
import PostForm from '../components/Post/Form'
import PostList from '../components/Post/List'

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-xl font-bold">Anasayfa</h1>
        </div>
      </div>
      {/* Responsive Container */}
      <div className="max-w-2xl mx-auto px-4">
        {/* Post Form */}
        <PostForm />
        {/* Posts Timeline */}
        <PostList />
      </div>
    </div>
  )
}

export default Home 