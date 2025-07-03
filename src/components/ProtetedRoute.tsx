import { useAuthStore } from "../zustand/authStore";
import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
    const { user, loading } = useAuthStore();
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <Navigate to='/login' />;
    }
    return children;
}

export default ProtectedRoute;