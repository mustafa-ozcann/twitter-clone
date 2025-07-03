import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, type DocumentData, Timestamp } from "firebase/firestore";
import { db } from "./config";

export interface PostData {
    content: string;
    createdAt: Date | Timestamp;
    userId: string;
    userName: string;
    userAvatar: string;
    likes: string[];
    comments: string[];
    retweets: string[];
    replies: string[];
    images?: string[];
    video?: string;
    audio?: string;
    link?: string;
    location?: string;
}

export const createPost = async (postData: PostData): Promise<void> => {
    try {
        await addDoc(collection(db, "posts"), {
            content: postData.content,
            createdAt: serverTimestamp(),
            userId: postData.userId,
            userName: postData.userName,
            userAvatar: postData.userAvatar,
            likes: [],
            comments: [],
            retweets: [],
            replies: [],
            images: postData.images || [],
            video: postData.video || "",
            audio: postData.audio || "",
            link: postData.link || "",
            location: postData.location || "",
        });
    } catch (error) {
        console.error("Error creating post:", error);
        throw new Error(error instanceof Error ? error.message : 'Post oluşturulurken hata oluştu');
    }
}

export const listenToPosts = (callback: (posts: DocumentData[]) => void): (() => void) => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    
    return onSnapshot(q, 
        (snapshot) => {
            const posts = snapshot.docs.map((doc) => ({ 
                id: doc.id, 
                ...doc.data() 
            }));
            callback(posts);
        },
        (error) => {
            console.error("Error listening to posts:", error);
            throw new Error(error.message || 'Postları dinlerken hata oluştu');
        }
    );
};