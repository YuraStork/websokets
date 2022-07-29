import { useRoutes } from "react-router-dom";
import { LayoutComponent } from "./layout";
import { DrawOnlinePage } from "./pages/drawOnlinePage";
import { EnterRoomWrapper } from "./pages/enterRoomPage";
import { HomePage } from "./pages/homePage";
import { NotFoundPage } from "./pages/notfoundPage";
import { PrivateRoom } from "./pages/confirmAccessPage";
import { ServerErrorPage } from "./pages/serverErrorPage";

export const Router = () => {
  const router = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/draw", element: <LayoutComponent /> },
    { path: "/draw_online/:id", element: <EnterRoomWrapper><DrawOnlinePage /> </EnterRoomWrapper> },
    { path: "/checkRoompassword/:id", element: <PrivateRoom /> },
    { path: "/server-error", element: <ServerErrorPage/> },
    { path: "*", element: <NotFoundPage /> }
  ])
  return router;
}