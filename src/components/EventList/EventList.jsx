import React from "react";
import { FaTrashRestore, FaEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const EventList = () => {
  const allEventData = useLoaderData();
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
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={
                          `http://localhost:5000/uploads/${allEventData[0]?.banner}` ||
                          ""
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Purple</td>
              <td>
                <div className="flex gap-2">
                  <button className="bg-green-400 text-white p-2 rounded-md">
                    <FaEdit className="h-4 w-4"></FaEdit>
                  </button>
                  <button className="bg-red-400 text-white p-2 rounded-md">
                    <FaTrashRestore className="h-4 w-4"></FaTrashRestore>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventList;
