import { useState } from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";

const BrowseTips = () => {
  const data = useLoaderData();
  const [newData, setNewData] = useState([]);
  const [selected, setSelected] = useState(true);

  function handleClick(params) {
    const filteredData = data.filter((item) => item.difficulty == params);
    setNewData(filteredData);
    setSelected(false);
  }

  function handleAll() {
    setNewData(data);
    setSelected(false);
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 ">
      <div className="flex justify-center">
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            onClick={() => handleAll()}
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="All"
          />
          <input
            onClick={() => handleClick("Easy")}
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="Easy"
          />
          <input
            onClick={() => handleClick("Medium")}
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="Medium"
          />
          <input
            onClick={() => handleClick("Hard")}
            className="btn"
            type="radio"
            name="frameworks"
            aria-label="Hard"
          />
        </form>
      </div>

      {selected ? (
        <div className="overflow-x-auto mt-10 border-2 border-gray-200 p-6">
          <table className="table">
            <thead>
              <tr>
                <th className="">Image</th>
                <th>Title</th>
                <th>Category</th>
              </tr>
            </thead>

            {data.map((data) => (
              <tbody key={data._id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={data.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>
                    <Link to={`/details/${data._id}`}>
                      <button className="btn">See More</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto mt-10 border-2 border-gray-200 p-6">
          <table className="table">
            <thead>
              <tr>
                <th className="">Image</th>
                <th>Title</th>
                <th>Category</th>
              </tr>
            </thead>

            {newData.map((data) => (
              <tbody key={data._id}>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={data.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>
                    <Link to={`/details/${data._id}`}>
                      <button className="btn">See More</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
