import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Routers";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}