import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import DonatePage from "../pages/DonatePage";
import DashboardPage from "../pages/DashboardPage";
import Contact from "../components/Contact";

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
                path: "/donate",
                element: <DonatePage />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/dashboard", 
        element: <DashboardPage />
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
]);

export default router;