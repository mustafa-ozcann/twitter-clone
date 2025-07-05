
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, type DocumentData, Timestamp, doc, collection as subcollection, addDoc as addSubDoc, getCountFromServer, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "./config";

export interface PostData {
    content: string;
    createdAt: Date | Timestamp;
    userId: string;
    userName: string;
    userAvatar: string;
    likes: string[];
    retweets: string[];
    replies: string[];
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
            retweets: [],
            replies: []
        });
    } catch (error) {
        console.error("Error creating post:", error);
        throw new Error(error instanceof Error ? error.message : 'Post oluşturulurken hata oluştu');
    }
}

export const listenToPosts = (callback: (posts: DocumentData[]) => void): (() => void) => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    
    return onSnapshot(q, 
        async (snapshot) => {
            const postsWithCommentCount = await Promise.all(
                snapshot.docs.map(async (doc) => {
                    const postData: DocumentData & { commentCount?: number } = { id: doc.id, ...doc.data() };
                    
                    // Comment sayısını al
                    try {
                        const commentsRef = collection(db, "posts", doc.id, "comments");
                        const commentCountSnapshot = await getCountFromServer(commentsRef);
                        postData.commentCount = commentCountSnapshot.data().count;
                    } catch (error) {
                        console.error("Error getting comment count:", error);
                        postData.commentCount = 0;
                    }
                    
                    return postData;
                })
            );
            callback(postsWithCommentCount);
        },
        (error) => {
            console.error("Error listening to posts:", error);
            throw new Error(error.message || 'Postları dinlerken hata oluştu');
        }
    );
};

export const addCommentToPost = async (postId: string, comment: {
    userId: string;
    userName: string;
    content: string;
    createdAt: Date | Timestamp;
}) => {
    try {
        const postRef = doc(db, "posts", postId);
        await addSubDoc(subcollection(postRef, "comments"), {
            userId: comment.userId,
            userName: comment.userName,
            content: comment.content,
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error adding comment:", error);
        throw new Error(error instanceof Error ? error.message : 'Yorum eklenirken hata oluştu');
    }
}

export const toggleLikePost = async (postId: string, userId: string, isLiked: boolean): Promise<void> => {
    try {
        const postRef = doc(db, "posts", postId);
        if (isLiked) {
            // Unlike - remove user from likes array
            await updateDoc(postRef, {
                likes: arrayRemove(userId)
            });
        } else {
            // Like - add user to likes array
            await updateDoc(postRef, {
                likes: arrayUnion(userId)
            });
        }
    } catch (error) {
        console.error("Error toggling like:", error);
        throw new Error(error instanceof Error ? error.message : 'Beğeni işlemi sırasında hata oluştu');
    }
}