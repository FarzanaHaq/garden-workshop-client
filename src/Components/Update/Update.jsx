import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {
  const data = useLoaderData();
  console.log(data);

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

    fetch(`http://localhost:3000/garden/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Tips Updated")
      });
  }
  return (
    <div>
      <div className="p-24">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-3xl font-medium">Update Your Tips</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                defaultValue={data.title}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Plant Type/Topic</label>
              <input
                type="text"
                name="type"
                className="input w-full"
                defaultValue={data.type}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Difficulty Level</label>
              <input
                type="text"
                name="difficulty"
                className="input w-full"
                defaultValue={data.difficulty}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                defaultValue={data.description}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>

              <input
                type="text"
                name="category"
                className="input w-full"
                defaultValue={data.category}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Availability</label>
              <input
                type="text"
                name="avail"
                className="input w-full"
                defaultValue={data.avail}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                defaultValue={data.name}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                className="input w-full"
                defaultValue={data.email}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              defaultValue={data.photo}
            />
          </fieldset>

          <input type="submit" className="btn w-full" value="Submit" />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Update;
