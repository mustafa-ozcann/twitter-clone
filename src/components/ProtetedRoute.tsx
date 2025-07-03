import { useAuthStore } from "../zustand/authStore";
import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
    const { user } = useAuthStore();
    if (!user) {
        return <Navigate to='/login' />;
    }
    return children;
}

export default ProtectedRoute;