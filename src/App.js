import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Employees from "./components/Employees";
import Help from "./components/Help";
import EmployeeDetail from "./components/EmployeeDetail";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Header />
      <div
        className={`flex h-screen ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/employees/add" component={AddEmployee} />
            <Route path="/employees/edit/:id" component={EditEmployee} />
            <Route path="/employees/:id" component={EmployeeDetail} />
            <Route path="/employees" component={Employees} />
            <Route path="/help" component={Help} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
