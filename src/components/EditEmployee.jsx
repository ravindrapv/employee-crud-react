// EditEmployee.js
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const history = useHistory();
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    salary: "",
    experience: "",
  });

  useEffect(() => {
    // Fetch the employee data based on the ID
    fetch(`http://localhost:5000/api/employees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.employee) {
          // Ensure that the fetched data has the expected properties
          const { name, position, salary, experience } = data.employee;
          setEmployee({ name, position, salary, experience });
        } else {
          console.error("Invalid employee data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting employee data:", employee);

    fetch(`http://localhost:5000/api/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee updated successfully:", data);
        history.push("/employees");
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
        // Handle the error appropriately
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-indigo-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Position:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={employee.position}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Salary:
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Experience:
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={employee.experience}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
