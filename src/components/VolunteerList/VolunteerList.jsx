import React from "react";
import { FaTrashRestore } from "react-icons/fa";

const VolunteerList = () => {
  return (
    <>
      <h2 className="text-xl font-medium mb-8">Volunteer register list</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Registating date</th>
              <th>Volunteer list</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>
                <button className="bg-red-400 text-white p-2 rounded-md">
                  <FaTrashRestore className="h-4 w-4"></FaTrashRestore>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VolunteerList;
