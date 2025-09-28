import { use } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const ShareTip = () => {
  const { user } = use(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const type = e.target.type.value;
    const difficulty = e.target.difficulty.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const avail = e.target.avail.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    console.log(
      title,
      type,
      difficulty,
      description,
      category,
      avail,
      name,
      email,
      photo
    );

    const newPost = {
      title,
      type,
      difficulty,
      description,
      category,
      avail,
      name,
      email,
      photo,
    };

    fetch("https://project-server-sandy.vercel.app/garden", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Tips Added");
      });
  }

  return (
    <div>
      <div className="p-10 lg:p-24">
        <h1 className="mb-10 text-center text-2xl font-bold text-[#01875F]">
          Add A Tip!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Plant Type/Topic</label>
              <input
                type="text"
                name="type"
                className="input w-full"
                placeholder="Plant Type/Topic"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Difficulty Level</label>
              <select name="difficulty" defaultValue="Easy" className="select">
                <option disabled={true}>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                placeholder="Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <select
                name="category"
                defaultValue="Composting"
                className="select"
              >
                <option disabled={true}>Composting</option>
                <option>Plant Care</option>
                <option>Vertical Gardening</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Availability</label>
              <select name="avail" defaultValue="Public" className="select">
                <option disabled={true}>Public</option>
                <option>Hidden</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                defaultValue={user?.displayName}
                disabled
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                className="input w-full"
                defaultValue={user?.email}
                disabled
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full text-[#01875F] font-bold text-[18px]"
            value="Submit"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ShareTip;
