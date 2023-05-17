import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateEvent = () => {
  const singleEvent = useLoaderData();
  const { _id, banner, event_title, event_date, description } = singleEvent;

  const [bannerImage, setBannerImage] = useState(null);
  const handleFileChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const eventTitle = form.eventTitle.value;
    const eventDate = form.eventDate.value;
    const description = form.description.value;
    const imageName = banner;

    try {
      const formData = new FormData();
      formData.append("eventTitle", eventTitle);
      formData.append("eventDate", eventDate);
      formData.append("description", description);
      formData.append("bannerImage", bannerImage);

      const response = await axios.put(
        `http://localhost:5000/events/${_id}`,
        formData,
        {
          headers: {
            "Custom-Header": `${imageName}`,
          },
        }
      );
      const { data } = response;

      if (data.modifiedCount === 1) {
        alert("Successfully updated one document.");
      }
    } catch (error) {
      console.error("Error submitting event data", error);
    }
  };
  return (
    <>
      <h2 className="text-xl font-medium mb-8">Update event</h2>
      <form onSubmit={handleUpdate}>
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 rounded-md">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Title</span>
            </label>
            <input
              name="eventTitle"
              type="text"
              required
              defaultValue={event_title}
              placeholder="Event Title"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Date</span>
            </label>
            <input
              name="eventDate"
              type="date"
              required
              defaultValue={event_date}
              placeholder="Event Date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              required
              defaultValue={description}
              placeholder="Description"
              className="textarea textarea-bordered textarea-md w-full h-36"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Banner</span>
            </label>
            <input
              name="banner"
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              className="file-input w-full input-bordered"
            />
          </div>
        </div>
        <div className="flex justify-end mt-2 md:mt4">
          <button className="btn btn-primary btn-sm">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UpdateEvent;
