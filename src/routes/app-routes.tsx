import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/products/products";
import Header from "../components/header";
import Register from "@/pages/register/register";
import { useAuthStore } from "@/auth/useStore";
import Login from "@/pages/login/login";

export const AppRoutes = () => {
    const { isAuthenticated } = useAuthStore(); 
    return (
        <BrowserRouter>
            {isAuthenticated ? (
                <>
                    <Header />
                    <Routes>
                        <Route path="/products" element={<Products />} />                       
                    </Routes>
                </>
            ) : (
                <Routes>
                        <Route path="*" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                </Routes>
            )} 
        </BrowserRouter>
    );
};
