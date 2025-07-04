import { useParams } from 'react-router-dom';
import { usePostStore } from '../zustand/postStore';
import { useAuthStore } from '../zustand/authStore';
import { useState, useEffect } from 'react';
import PostItem from '../components/Post/Item';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import type { Comment } from '../zustand/postStore';

function PostDetails() {
  const { id } = useParams();
  const { posts, addComment } = usePostStore();
  const { user } = useAuthStore();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (!id) return;
    const q = query(collection(db, 'posts', id, 'comments'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map(doc => ({
        id: doc.id,
        userId: doc.data().userId || '',
        userName: doc.data().userName || '',
        content: doc.data().content || '',
        createdAt: doc.data().createdAt || new Date(),
      })));
    });
    return () => unsubscribe();
  }, [id]);

  if (!post) {
    return <div className="text-white p-8">Post bulunamadı.</div>;
  }

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !user) return;
    await addComment(post.id, {
      id: Math.random().toString(36).substr(2, 9),
      userId: user.uid,
      userName: user.displayName || 'Kullanıcı',
      content: comment.trim(),
      createdAt: new Date(),
    });
    setComment('');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-white">
      <PostItem post={post} currentUserId={user?.uid} />
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Yorumlar</h2>
        <form onSubmit={handleAddComment} className="mb-6 flex gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Yorumunuzu yazın..."
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white font-bold hover:bg-blue-700">Gönder</button>
        </form>
        <div className="space-y-4">
          {comments && comments.length > 0 ? (
            comments.map((c) => (
              <div key={c.id} className="bg-gray-900 p-4 rounded">
                <div className="font-semibold">{c.userName}</div>
                <div className="text-gray-400 text-sm mb-1">{typeof c.createdAt === 'object' && 'toDate' in c.createdAt ? c.createdAt.toDate().toLocaleString() : new Date(c.createdAt).toLocaleString()}</div>
                <div>{c.content}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-500">Henüz yorum yok.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetails; 