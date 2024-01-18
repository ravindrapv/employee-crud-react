import React, { useState, useEffect } from "react";

const Home = () => {
  const [totalSalary, setTotalSalary] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    // Fetch employee data and calculate total salary
    fetch("http://localhost:5000/api/employees")
      .then((response) => response.json())
      .then((data) => {
        const employees = data.employees;
        setTotalEmployees(employees.length);

        const salarySum = employees.reduce(
          (total, employee) => total + parseInt(employee.salary, 10),
          0
        );
        setTotalSalary(salarySum);
      })
      .catch((error) => console.error("Error fetching employee data:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Home Page</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Card for total salary */}
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Salary</h3>
          <p className="text-2xl font-bold text-indigo-800">${totalSalary}</p>
        </div>

        {/* Card for total employees */}
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Employees</h3>
          <p className="text-2xl font-bold text-indigo-800">{totalEmployees}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
