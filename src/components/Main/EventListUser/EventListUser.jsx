import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventCardUser from "./EventCardUser";
import Swal from "sweetalert2";

const EventListUser = () => {
  const userEventsData = useLoaderData();
  const [userEvents, setUserEvents] = useState(userEventsData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users-events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = userEvents.filter((event) => event._id !== id);
              setUserEvents(remaining);
              Swal.fire(
                "Canceled!",
                "Your event has been canceled.",
                "success"
              );
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
      {userEvents.map((event) => (
        <EventCardUser
          key={event._id}
          event={event}
          handleDelete={handleDelete}
        ></EventCardUser>
      ))}
    </div>
  );
};

export default EventListUser;
