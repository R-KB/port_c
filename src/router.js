import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./page/Home";
import Menu from "./page/Menu";
import Reserve from './page/Reserve';
import Contact from './page/Contact';
import NotFound from './page/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: Home},
            {path: "menu", Component: Menu},
            {path: "reserve", Component: Reserve},
            {path: "contact", Component: Contact},
            {path: "*", Component: NotFound},
        ],
    },
]);

export default router;