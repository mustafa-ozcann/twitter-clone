import React from 'react'
import { Timestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
  post: {
    id: string
    content: string
    createdAt: Timestamp | Date | null | undefined
    userId: string
    userName: string
    userAvatar: string
    likes: string[]
    retweets: string[]
    replies: string[]
    commentCount?: number
  }
  currentUserId?: string
}

function PostItem({ post, currentUserId }: PostItemProps) {
  const navigate = useNavigate();

  // Format timestamp
  const formatTime = (timestamp: Timestamp | Date | null | undefined) => {
    if (!timestamp) return ''
    const date = timestamp instanceof Timestamp ? timestamp.toDate() : timestamp
    if (!date) return ''
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return `${diffInSeconds}s`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d`
    
    return date.toLocaleDateString('tr-TR', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }

  const isLiked = currentUserId ? post.likes.includes(currentUserId) : false
  const isRetweeted = currentUserId ? post.retweets.includes(currentUserId) : false

  const handleLike = () => {
    // TODO: Implement like functionality
    console.log('Like post:', post.id)
  }

  const handleRetweet = () => {
    // TODO: Implement retweet functionality
    console.log('Retweet post:', post.id)
  }

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/post/${post.id}`);
  }

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share post:', post.id)
  }

  return (
    <article className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        {/* Profile Image */}
        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
          {post.userAvatar ? (
            <img 
              src={post.userAvatar} 
              alt={`${post.userName} avatar`} 
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

        {/* Post Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-bold text-white hover:underline cursor-pointer">
              {post.userName}
            </h3>
            <span className="text-gray-500">@{post.userName.toLowerCase().replace(' ', '')}</span>
            <span className="text-gray-500">·</span>
            <time
              className="text-gray-500 hover:underline cursor-pointer"
              title={
                post.createdAt
                  ? post.createdAt instanceof Timestamp
                    ? post.createdAt.toDate().toLocaleString()
                    : post.createdAt.toLocaleString()
                  : ''
              }
            >
              {formatTime(post.createdAt)}
            </time>
          </div>

          {/* Content */}
          <div className="text-white mb-3">
            <p className="whitespace-pre-wrap leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between max-w-md">
            {/* Comment */}
            <button
              onClick={handleComment}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 rounded-full group-hover:bg-blue-900/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"/>
                </svg>
              </div>
              <span className="text-sm">{post.commentCount && post.commentCount > 0 ? post.commentCount : ''}</span>
            </button>

            {/* Retweet */}
            <button
              onClick={handleRetweet}
              className={`flex items-center space-x-2 transition-colors group ${
                isRetweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-green-900/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                </svg>
              </div>
              <span className="text-sm">{post.retweets.length > 0 ? post.retweets.length : ''}</span>
            </button>

            {/* Like */}
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors group ${
                isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-red-900/20 transition-colors">
                <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm">{post.likes.length > 0 ? post.likes.length : ''}</span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 rounded-full group-hover:bg-blue-900/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostItem
