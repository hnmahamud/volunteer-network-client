import React from "react";
import { FaTrashRestore, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventCardAdmin = ({ event, handleDelete }) => {
  const { _id, banner, event_title, event_date, description } = event;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`http://localhost:5000/uploads/events/${banner}` || ""}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{event_title}</div>
          </div>
        </div>
      </td>
      <td>{event_date}</td>
      <td>{description.slice(0, 20)}...</td>
      <td>
        <div className="flex gap-2">
          <Link
            to={`/admin-dashboard/update-event/${_id}`}
            className="bg-green-400 text-white p-2 rounded-md"
          >
            <FaEdit className="h-4 w-4"></FaEdit>
          </Link>
          <button
            onClick={() => handleDelete(_id, banner)}
            className="bg-red-400 text-white p-2 rounded-md"
          >
            <FaTrashRestore className="h-4 w-4"></FaTrashRestore>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EventCardAdmin;
