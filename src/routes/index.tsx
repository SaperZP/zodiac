import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import DailyPage from "../pages/DailyPage";
import TarotPage from "../pages/TarotPage";
import ArticlesPage from "../pages/ArticlesPage";
import ContactPage from "../pages/ContactPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        element: <HomePage/>,
        index: true,
      },
      {
        element: <DailyPage />,
        path: '/daily/',
      },
      {
        element: <TarotPage />,
        path: '/tarot/',
      },
      {
        element: <ArticlesPage />,
        path: '/articles/',
      },
      {
        element: <ContactPage />,
        path: '/contact/',
      },
    ],
  },
]);

export default routes;
