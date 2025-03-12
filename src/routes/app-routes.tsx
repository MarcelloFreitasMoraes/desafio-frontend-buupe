import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Header from "../components/header";

export const AppRoutes = () => {
    // const { isAuthenticated } = useAuthStore(); 
    return (
        <BrowserRouter>
        <Header/>
            {/* {isAuthenticated ? (
                <BaseLayout>
                    <Routes>
                        <Route path="/people" element={<People />} />
                        {PATHS.map(({ element, path }) => (
                            <Route key={path} element={element} path={path} />
                        ))}
                    </Routes>
                </BaseLayout>
            ) : ( */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/register" element={<Register />} /> */}
                </Routes>
            {/* )} */}
        </BrowserRouter>
    );
};
