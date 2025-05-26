import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Featured = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((fetchedData) => {
        const newData = fetchedData.filter((item) => item.status === "Active");
        setData(newData);
        console.log(fetchedData)
      });
  }, []);

  return (
    <div>
      <h1 className="mt-20 text-center text-2xl font-bold text-[#01875F]">
        <Typewriter cursor={true} cursorBlinking={true} loop
          words={[
            "Our",
            "Featured",
            "Gardeners",
          ]}
        />
      </h1>
      <div className=" mt-8 mx-auto flex justify-center ">
        <div className="grid grid-cols-3 gap-5">
          {data.map((item) => (
            <div className="bg-green-100 w-[300px] px-6 rounded-2xl py-8">
              <div className="flex justify-center">
                <img
                  className="border-2 border-white rounded-full w-24 h-24 object-cover "
                  src={item.image}
                  alt=""
                />
              </div>
              <p className="mt-5 text-center text-[16px] font-bold">
                {item.name}
              </p>
              <p className="mt-3 text-center text-[14px] font-medium text-gray-600">
                {item.experiences}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
