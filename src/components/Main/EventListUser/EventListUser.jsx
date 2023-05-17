import React, { useContext, useEffect, useState } from "react";
import EventCardUser from "./EventCardUser";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProviders";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const EventListUser = () => {
  const { user } = useContext(AuthContext);
  const [userEvents, setUserEvents] = useState([]);

  const userEmail = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/users-events?email=${userEmail}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "volunteer-access-token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEvents(data);
      })
      .catch((error) => console.log(error));
  }, [userEmail]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users-events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = userEvents.filter((event) => event._id !== id);
              setUserEvents(remaining);
              Swal.fire(
                "Canceled!",
                "Your event has been canceled.",
                "success"
              );
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (!userEvents.length > 0) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
      {userEvents.length > 0 &&
        userEvents.map((event) => (
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
