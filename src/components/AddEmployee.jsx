import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  const history = useHistory();

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    salary: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation if needed

    // Send a POST request to add the new employee
    fetch("http://localhost:5000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Employee added successfully:", data);
        // Redirect back to the employees list page
        history.push("/employees");
      })
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Add Employee</h2>
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
            value={newEmployee.name}
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
            value={newEmployee.position}
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
            type="number"
            id="salary"
            name="salary"
            value={newEmployee.salary}
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
            value={newEmployee.experience}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
