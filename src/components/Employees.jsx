import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPaginatedEmployees = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/employees?page=${currentPage}&per_page=8`
        );
        const data = await response.json();

        setEmployees(data.employees);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPaginatedEmployees();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className=" w-11/12 mx-auto mt-8 p-8 bg-indigo-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">
        Employees List
      </h2>
      <table className="min-w-full bg-white border border-indigo-200 rounded-md">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Salary</th>
            <th className="py-2 px-4">Experience</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee._id}
              className="border-t border-indigo-200 text-center"
            >
              <td className="py-2 px-4">{employee.name}</td>
              <td className="py-2 px-4">{employee.position}</td>
              <td className="py-2 px-4">{employee.salary}</td>
              <td className="py-2 px-4">{employee.experience}</td>
              <td className="py-2 px-4">
                <Link
                  to={`/employees/${employee._id}`}
                  className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to="/employees/add"
          className="inline-block bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
        >
          Add Employee
        </Link>

        <div className="flex items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Previous
          </button>
          <span className="text-indigo-800">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employees;
