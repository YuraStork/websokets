import { useRoutes } from "react-router-dom";
import { LayoutComponent } from "./layout";
import { DrawOnlinePage } from "./pages/drawOnline/layout";
import { EnterRoomWrapper } from "./pages/enterRoom";
import { HomePage } from "./pages/home";
import { PrivateRoom } from "./pages/roomPassword";

export const Router = () => {
  const router = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/draw", element: <LayoutComponent /> },
    { path: "/draw_online/:id", element: <EnterRoomWrapper><DrawOnlinePage /> </EnterRoomWrapper> },
    { path: "/checkRoompassword/:id", element: <PrivateRoom /> },
    { path: "*", element: <div>not found</div> }
  ])
  return router;
}