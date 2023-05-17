import React, { useContext, useState } from "react";
import EventCard from "./EventCard";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  const allEventData = useLoaderData();
  const [events, setEvents] = useState(allEventData);

  const handleGoingEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/events/${id}`);
      const data = await response.json();

      const userEvent = {
        user_name: user.displayName,
        user_email: user.email,
        event_title: data.event_title,
        event_date: data.event_date,
        description: data.description,
        banner: data.banner,
      };

      const response2 = await fetch("http://localhost:5000/users-events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEvent),
      });
      const data2 = await response2.json();
      if (data2.insertedId) {
        alert("Event added successful!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center my-12 space-y-2">
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          I grow by helping people in need.
        </h2>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered input-sm md:input-md"
            />
            <button className="btn btn-square btn-sm md:btn-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 mb-8">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            handleGoingEvent={handleGoingEvent}
          ></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
