import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";

const EmployeeDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    console.log("Fetching employee details for ID:", id);
    fetch(`http://localhost:5000/api/employees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched employee data:", data);
        setEmployee(data.employee);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  console.log(employee);

  const handleEdit = () => {
    history.push(`/employees/edit/${id}`);
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/api/employees/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Employee deleted successfully");

          history.push("/employees");
        } else {
          console.error("Failed to delete employee");
        }
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-2/4 mt-8 p-8 bg-white rounded-lg shadow-xl text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"
          alt="Avatar"
        />
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">
          {employee.name}'s Details
        </h2>
        <div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Position:</span> {employee.position}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Salary:</span> {employee.salary}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Experience:</span>{" "}
            {employee.experience}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleEdit}
            className="flex items-center bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mr-2"
          >
            <FaEdit className="mr-2" />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
          >
            <FaTrash className="mr-2" />
            Delete
          </button>
        </div>
        <Link
          to="/employees"
          className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetail;
