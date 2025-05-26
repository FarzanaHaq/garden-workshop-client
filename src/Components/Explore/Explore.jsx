import { useLoaderData } from "react-router";

const Explore = () => {
  const data = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto mt-10">
      {data.map((data) => (
        <>
          <div className="card card-side bg-base-100 shadow-sm  rounded-none">
            <figure className="w-[400px]">
              <img
                className="w-[400px] object-cover object-center"
                src={data.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p>
                <span className="font-semibold text-[16px]">Name:</span>
                <span className="font-medium text-gray-700"> {data.name}</span>
              </p>
              <p>
                <span className="font-semibold text-[16px]">Age:</span>
                <span className="font-medium text-gray-700"> {data.age}</span>
              </p>
              <p>
                <span className="font-semibold text-[16px]">Gender:</span>
                <span className="font-medium text-gray-700">
                  {" "}
                  {data.gender}
                </span>
              </p>
              <p>
                <span className="font-semibold text-[16px]">Status:</span>
                <span className="font-medium text-gray-700"> {data.name}</span>
              </p>
              <p>
                <span className="font-semibold text-[16px]">Experiences:</span>
                <span className="font-medium text-gray-700">
                  {" "}
                  {data.experiences}
                </span>
              </p>
              <p>
                <span className="font-semibold text-[16px]">Shared Tips:</span>
                <span className="font-medium text-gray-700">
                  {" "}
                  {data.sharedTips}
                </span>
              </p>
              <p>
                <span className="font-semibold text-[16px]">Location:</span>
                <span className="font-medium text-gray-700">
                  {" "}
                  {data.location}
                </span>
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Explore;
