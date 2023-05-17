import React from "react";

const EventCardUser = ({ event, handleDelete }) => {
  const { _id, banner, event_title, event_date } = event;
  return (
    <div className="card card-side bg-base-100 shadow-md border rounded-md">
      <figure>
        <img
          className="h-44 md:h-64"
          src={`http://localhost:5000/uploads/events/${banner}`}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event_title}</h2>
        <p>{event_date}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-active btn-ghost btn-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCardUser;
