import React from "react";
import { FaTrashRestore } from "react-icons/fa";

const VolunteerCard = ({ volunteer, handleDelete }) => {
  const { _id, full_name, email, date, description, volunteer_list } =
    volunteer;
  return (
    <tr>
      <td>{full_name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{volunteer_list}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-400 text-white p-2 rounded-md"
        >
          <FaTrashRestore className="h-4 w-4"></FaTrashRestore>
        </button>
      </td>
    </tr>
  );
};

export default VolunteerCard;
