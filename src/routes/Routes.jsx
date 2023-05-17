import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import VolunteerList from "../components/Dashboard/VolunteerList/VolunteerList";
import AddEvent from "../components/Dashboard/AddEvent/AddEvent";
import UpdateEvent from "../components/Dashboard/UpdateEvent/UpdateEvent";
import Home from "../components/Main/Home/Home";
import Login from "../components/Main/Login/Login";
import VolunteerRegistration from "../components/Main/VolunteerRegistration/VolunteerRegistration";
import EventListAdmin from "../components/Dashboard/EventListAdmin/EventListAdmin";
import EventListUser from "../components/Main/EventListUser/EventListUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch("http://localhost:5000/events"),
      },
      {
        path: "/user-events",
        element: <EventListUser></EventListUser>,
        loader: async () => fetch("http://localhost:5000/users-events"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/volunteer-registration",
        element: <VolunteerRegistration></VolunteerRegistration>,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/admin-dashboard",
        element: <VolunteerList></VolunteerList>,
        loader: () => fetch("http://localhost:5000/volunteers"),
      },
      {
        path: "/admin-dashboard/event-list",
        element: <EventListAdmin></EventListAdmin>,
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
