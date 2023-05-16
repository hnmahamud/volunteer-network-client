import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import VolunteerList from "../components/VolunteerList/VolunteerList";
import AddEvent from "../components/AddEvent/AddEvent";
import EventList from "../components/EventList/EventList";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/admin-dashboard",
        element: <VolunteerList></VolunteerList>,
      },
      {
        path: "/admin-dashboard/event-list",
        element: <EventList></EventList>,
        loader: () => fetch("http://localhost:5000/events"),
      },
      {
        path: "/admin-dashboard/add-event",
        element: <AddEvent></AddEvent>,
      },
    ],
  },
]);

export default router;
