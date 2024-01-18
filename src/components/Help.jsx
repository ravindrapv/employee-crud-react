import React from "react";

const Help = () => {
  return (
    <div className="help-content max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">
        Welcome to Employee Management Help
      </h2>

      <p className="mb-4">
        Our Employee Management application allows you to efficiently manage
        your employee records. Below are key features and tips to help you make
        the most of this application:
      </p>

      <h3 className="text-xl font-bold mb-2">Adding a New Employee</h3>
      <p className="mb-4">
        To add a new employee, navigate to the "Add Employee" section. Fill in
        the required details such as name, position, salary, and experience.
        Click the "Add Employee" button to save the employee information.
      </p>

      <h3 className="text-xl font-bold mb-2">Editing Employee Details</h3>
      <p className="mb-4">
        To edit an existing employee's details, click the "Edit" button on the
        employee details page. Update the necessary information and click "Save
        Changes" to apply the modifications.
      </p>

      <h3 className="text-xl font-bold mb-2">Deleting an Employee</h3>
      <p className="mb-4">
        To remove an employee from the records, click the "Delete" button on the
        employee details page. Confirm the deletion when prompted. Please note
        that this action is irreversible.
      </p>

      <h3 className="text-xl font-bold mb-2">Viewing All Employees</h3>
      <p className="mb-4">
        The "All Employees" page displays a list of all employees in your
        database. Clicking on an employee's ID will take you to their detailed
        information page.
      </p>

      <h3 className="text-xl font-bold mb-2">Need Further Assistance?</h3>
      <p>
        If you encounter any issues or have questions that are not addressed in
        this help section, feel free to contact our support team at{" "}
        <a
          href="mailto:support@example.com"
          className="text-indigo-600 hover:underline"
        >
          support@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default Help;
