import { useLoaderData } from "react-router";
import { SlLike } from "react-icons/sl";

const Details = () => {
  const data = useLoaderData();
  function handleClick(params) {
    console.log(params);
    fetch(`http://localhost:3000/garden/${params}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="max-w-6xl mx-auto my-14">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-[550px] h-[450px] object-cover object-center">
          <img
            className="w-[333px] object-cover object-center"
            src={data.photo}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="">
            <span className="text-[16px] font-bold">Title: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.title}
            </span>
          </h2>
          <p>
            <span className="text-[16px] font-bold">Description: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.description}
            </span>
          </p>
          <p>
            <span className="text-[16px] font-bold">Type: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.type}
            </span>
          </p>
          <p>
            <span className="text-[16px] font-bold">Category: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.category}
            </span>
          </p>
          <p>
            <span className="text-[16px] font-bold">Difficulty: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.difficulty}
            </span>
          </p>
          <p>
            <span className="text-[17px] font-bold">Availability: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.avail}
            </span>
          </p>
          <p>
            <span className="text-[16px] font-bold">By: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.name}
            </span>
          </p>
          <p>
            <span className="text-[16px] font-bold">Contact: </span>
            <span className="text-[15px] font-medium text-gray-600">
              {data.email}
            </span>
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick(data._id)}
              className="btn bg-[#01875F] text-white rounded-full"
            >
              <SlLike />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
