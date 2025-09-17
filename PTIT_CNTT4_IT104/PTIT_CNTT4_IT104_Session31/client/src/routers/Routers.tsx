import { createBrowserRouter } from "react-router-dom";
import ListPost from "../pages/ListPost";

const router = createBrowserRouter([
    {
        path: "/listPost",
        element: <ListPost />,
    },
]);

export { router };