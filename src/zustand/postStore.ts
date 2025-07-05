import { create } from "zustand";
import { listenToPosts, addCommentToPost, toggleLikePost } from "../firebase/PostService";
import { Timestamp } from "firebase/firestore";

export interface Post {
    id: string;
    content: string;
    createdAt: Timestamp | Date;
    userId: string;
    userName: string;
    userAvatar: string;
    likes: string[];
    retweets: string[];
    replies: string[];
    commentCount?: number;
}

export interface Comment {
    id: string;
    userId: string;
    userName: string;
    content: string;
    createdAt: Timestamp | Date;
}

interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | null;
    addPost: (post: Post) => void;
    getPosts: () => void;
    addComment: (postId: string, comment: Comment) => void;
    toggleLike: (postId: string, userId: string) => void;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    loading: false,
    error: null,
    addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    getPosts: () => {
        set({ loading: true, error: null });
        try {
            const unsubscribe = listenToPosts((posts) => {
                set({ posts: posts as Post[], loading: false });
            });
            return unsubscribe;
        } catch (error) {
            set({ 
                error: error instanceof Error ? error.message : 'Postlar yüklenirken hata oluştu', 
                loading: false 
            });
        }
    },   

    addComment: async (postId: string, comment: Comment) => {
        await addCommentToPost(postId, comment);
        set((state) => ({
            posts: state.posts.map((post) => 
                post.id === postId 
                    ? {...post, commentCount: (post.commentCount || 0) + 1} 
                    : post
            )
        }))
    },

    toggleLike: async (postId: string, userId: string) => {
        const post = usePostStore.getState().posts.find(p => p.id === postId);
        if (!post) return;

        const isLiked = post.likes.includes(userId);
        
        try {
            await toggleLikePost(postId, userId, isLiked);
            
            // Optimistic update
            set((state) => ({
                posts: state.posts.map((post) => 
                    post.id === postId 
                        ? {
                            ...post,
                            likes: isLiked 
                                ? post.likes.filter(id => id !== userId)
                                : [...post.likes, userId]
                        }
                        : post
                )
            }));
        } catch (error) {
            set({ 
                error: error instanceof Error ? error.message : 'Beğeni işlemi sırasında hata oluştu'
            });
        }
    }
}));

export default usePostStore;

