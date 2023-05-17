import React from "react";

const EventCard = ({ event, handleGoingEvent }) => {
  const { _id, event_title, banner } = event;
  return (
    <div
      onClick={() => handleGoingEvent(_id)}
      className="h-96 card card-compact bg-base-100 shadow-md hover:shadow-2xl border rounded-md"
    >
      <figure>
        <img src={`http://localhost:5000/uploads/events/${banner}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event_title}</h2>
      </div>
    </div>
  );
};

export default EventCard;
