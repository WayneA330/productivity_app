import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Spaces = lazy(() => import("../pages/Spaces"));
const Notes = lazy(() => import("../pages/Notes"));
const TodoList = lazy(() => import("../pages/Todo_List"));

const PublicRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/spaces", element: <Spaces /> },
    { path: "/todo_list", element: <TodoList /> },
    { path: "/notes", element: <Notes /> },
  ]);

  return routes;
};

export default PublicRoutes;
