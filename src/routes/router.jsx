import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import DonatePage from "../pages/DonatePage";
import DashboardPage from "../pages/DashboardPage";
import Contact from "../components/Contact";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", 
                element: <HomePage />
            },
            {
                path: "/about", 
                element: <AboutPage />
            },
            {
                path: "/donate",
                element: <PrivateRoute><DonatePage /></PrivateRoute>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignUpPage  />
            },
        ]
    },
    {
        path: "/dashboard", 
        element: <PrivateRoute><DashboardPage /></PrivateRoute>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
]);

export default router;