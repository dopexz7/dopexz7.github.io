import '../styles/globals.css';
import AuthProvider from '../comps/AuthContext';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
