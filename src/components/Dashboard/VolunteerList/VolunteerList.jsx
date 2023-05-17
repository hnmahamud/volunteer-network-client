import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";
import Swal from "sweetalert2";

const VolunteerList = () => {
  const volunteersData = useLoaderData();
  const [volunteers, setVolunteers] = useState(volunteersData);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/volunteers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = volunteers.filter(
                (volunteer) => volunteer._id !== id
              );
              setVolunteers(remaining);
              Swal.fire(
                "Deleted!",
                "Your volunteer has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
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
            {volunteers.map((volunteer) => (
              <VolunteerCard
                key={volunteer._id}
                volunteer={volunteer}
                handleDelete={handleDelete}
              ></VolunteerCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VolunteerList;
