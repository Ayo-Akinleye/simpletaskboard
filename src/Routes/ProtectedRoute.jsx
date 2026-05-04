import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};

export default ProtectedRoute;
