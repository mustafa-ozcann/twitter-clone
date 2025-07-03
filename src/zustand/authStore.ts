import { create } from "zustand";
import { GoogleAuthProvider, type User, signInWithPopup, signInWithEmailAndPassword, signOut, type AuthError, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
    isLoginModalOpen: boolean;
    signIn: () => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    openLoginModal: () => void;
    closeLoginModal: () => void;
    initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    
    user: null,
    loading: true,
    error: null,
    isLoginModalOpen: false,
    signIn: async () => {
        set({ loading: true, error: null });
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            set({ user: result.user, loading: false, isLoginModalOpen: false });
        } catch (error) {
            const authError = error as AuthError;
            set({ error: authError.message || 'Giriş yaparken bir hata oluştu', loading: false });
        }
    },
    signInWithEmail: async (email: string, password: string) => {
        set({ loading: true, error: null });
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            set({ user: result.user, loading: false, isLoginModalOpen: false });
        } catch (error) {
            const authError = error as AuthError;
            let errorMessage = 'Giriş yaparken bir hata oluştu';
            
            if (authError.code === 'auth/user-not-found') {
                errorMessage = 'Bu e-posta adresi ile kayıtlı bir hesap bulunamadı';
            } else if (authError.code === 'auth/wrong-password') {
                errorMessage = 'Hatalı şifre';
            } else if (authError.code === 'auth/invalid-email') {
                errorMessage = 'Geçersiz e-posta adresi';
            } else if (authError.code === 'auth/too-many-requests') {
                errorMessage = 'Çok fazla başarısız deneme. Lütfen daha sonra tekrar deneyin';
            }
            
            set({ error: errorMessage, loading: false });
        }
    },
    logout: async () => {
        await signOut(auth);
        set({ user: null, loading: false });
    },
    openLoginModal: () => set({ isLoginModalOpen: true, error: null }),
    closeLoginModal: () => set({ isLoginModalOpen: false, error: null }),
    initializeAuth: () => {
        onAuthStateChanged(auth, (user) => {
            set({ user, loading: false });
        });
    }
}))