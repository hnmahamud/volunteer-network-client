import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard/EventCard";

const EventList = () => {
  const allEventData = useLoaderData();
  const [events, setEvents] = useState(allEventData);

  const handleDelete = (id, imageName) => {
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
          alert("Successfully deleted one document.");
        }
      })
      .catch((error) => console.log(error));
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
              <EventCard
                key={event._id}
                event={event}
                handleDelete={handleDelete}
              ></EventCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventList;
