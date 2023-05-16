import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import VolunteerList from "../components/VolunteerList/VolunteerList";
import AddEvent from "../components/AddEvent/AddEvent";
import EventList from "../components/EventList/EventList";
import Main from "../layout/Main/Main";
import UpdateEvent from "../components/UpdateEvent/UpdateEvent";

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
      {
        path: "/admin-dashboard/update-event/:id",
        element: <UpdateEvent></UpdateEvent>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },
    ],
  },
]);

export default router;
