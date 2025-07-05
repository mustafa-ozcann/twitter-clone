import {useEffect} from 'react'
import { usePostStore } from '../../zustand/postStore'
import PostItem from '../Post/Item'
import { useNavigate } from 'react-router-dom'

function Posts({id}: {id: string | undefined}) {
    const { posts, getPosts } = usePostStore()
    const navigate = useNavigate()
    
    useEffect(() => {
        getPosts()
    },[getPosts])

  return (
    <div>
        {posts.filter((post) => post.userId === id).map((post) => (
            <div key={post.id} onClick={() => navigate(`/post/${post.id}`)} style={{cursor:'pointer'}}>
                <PostItem post={post} />
            </div>
        ))}
    </div>
  )
}

export default Posts