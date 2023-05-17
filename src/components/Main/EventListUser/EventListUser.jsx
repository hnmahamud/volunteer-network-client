import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventCardUser from "./EventCardUser";

const EventListUser = () => {
  const userEventsData = useLoaderData();
  const [userEvents, setUserEvents] = useState(userEventsData);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/users-events/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.deletedCount === 1) {
      const remaining = userEvents.filter((event) => event._id !== id);
      setUserEvents(remaining);
      alert("Event cancel successful!");
    }
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
