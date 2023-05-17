import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventCardAdmin from "./EventCardAdmin";
import Swal from "sweetalert2";

const EventListAdmin = () => {
  const allEventData = useLoaderData();
  const [events, setEvents] = useState(allEventData);

  const handleDelete = (id, imageName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/events/${id}`, {
          method: "DELETE",
          headers: {
            "Custom-Header": `${imageName}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = events.filter((event) => event._id !== id);
              setEvents(remaining);
              Swal.fire("Deleted!", "Your event has been deleted.", "success");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <>
      <h2 className="text-xl font-medium mb-8">Event list</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Event Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <EventCardAdmin
                key={event._id}
                event={event}
                handleDelete={handleDelete}
              ></EventCardAdmin>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventListAdmin;
