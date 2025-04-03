import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";


const router = createBrowserRouter([
  { path: "/", Component: Home },
  // { path: "/:id", element: <Meal /> },
  // { path: "*", element: <NotFound /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}