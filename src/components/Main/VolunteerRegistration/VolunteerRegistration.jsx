import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProviders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VolunteerRegistration = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const date = form.date.value;
    const description = form.description.value;
    const volunteerList = form.volunteerList.value;

    const volunteerInfo = {
      full_name: fullName,
      email,
      date,
      description,
      volunteer_list: volunteerList,
    };

    fetch("http://localhost:5000/volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Volunteer registration successful!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/", { replace: true });
        }
        if (data.error) {
          toast.error("Email already registered!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-md border rounded-md bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-8">Register as a Volunteer</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="form-control">
              <input
                type="text"
                name="fullName"
                defaultValue={user ? user.displayName : ""}
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                value={user ? user.email : ""}
                placeholder="Email"
                className="input input-bordered"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="description"
                className="input input-bordered"
                placeholder="Description"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="volunteerList"
                className="input input-bordered"
                placeholder="Volunteer list"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Registration</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistration;
