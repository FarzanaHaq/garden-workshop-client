import { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = use(AuthContext);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/mygarden?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyData(data);
      });
  }, [user?.email]);

  function handleClick(params) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/garden/${params}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 ">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="">Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {myData.map((data) => (
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
                  <Link to={`/update/${data._id}`}>
                    <button className="btn">Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleClick(data._id)} className="btn">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyTips;
