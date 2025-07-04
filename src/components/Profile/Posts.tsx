import {useEffect} from 'react'
import { usePostStore } from '../../zustand/postStore'
import PostItem from '../Post/Item'
import { useAuthStore } from '../../zustand/authStore'
import { useNavigate } from 'react-router-dom'

function Posts({id}: {id: string | undefined}) {
    const { posts, getPosts } = usePostStore()
    const { user } = useAuthStore()
    const navigate = useNavigate()
    
    useEffect(() => {
        getPosts()
    },[getPosts])

  return (
    <div>
        {posts.filter((post) => post.userId === id).map((post) => (
            <div key={post.id} onClick={() => navigate(`/post/${post.id}`)} style={{cursor:'pointer'}}>
                <PostItem post={post} currentUserId={user?.uid} />
            </div>
        ))}
    </div>
  )
}

export default Posts