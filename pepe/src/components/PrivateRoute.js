import React from "react"
import { Route, Navigate, Routes } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    if (!currentUser) {
        return <Navigate to="/login" />;

    }
    return children;
}
export default PrivateRoute;