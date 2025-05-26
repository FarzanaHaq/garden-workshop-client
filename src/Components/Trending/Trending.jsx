import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/garden")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  return (
    <div className="mt-20 ">
      <Fade duration={9000}>
        <h1 className="text-center text-2xl font-bold text-[#01875F]">Top Trending Tips</h1>
      </Fade>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20">
        {data.slice(0, 6).map((data) => (
          <div className="card bg-base-100 rounded-none shadow-2xl">
            <figure>
              <img
                className="h-[200px] w-[400px] object-cover object-center"
                src={data.photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body pb-8">
              <h2 className="card-title">{data.title}</h2>
              <p className="text-[14px] text-gray-800">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
