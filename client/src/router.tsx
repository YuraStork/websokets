import { useRoutes } from "react-router-dom";
import { LayoutComponent } from "./layout";
import { HomePage } from "./pages/home";

export const Router = () => {
  const router = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/draw", element: <LayoutComponent /> },
    { path: "/draw_online", element: <LayoutComponent /> },
    { path: "*", element: <div>not found</div> }
  ])
  return router;
}