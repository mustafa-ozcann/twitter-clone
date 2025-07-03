import { create } from "zustand";
import { listenToPosts } from "../firebase/PostService";
import { Timestamp } from "firebase/firestore";

export interface Post {
    id: string;
    content: string;
    createdAt: Timestamp | Date;
    userId: string;
    userName: string;
    userAvatar: string;
    likes: string[];
    comments: string[];
    retweets: string[];
    replies: string[];
}

interface PostState {
    posts: Post[];
    loading: boolean;
    error: string | null;
    addPost: (post: Post) => void;
    getPosts: () => void;
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
}));

export default usePostStore;

