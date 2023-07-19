import React, { useState } from "react";
import DataTable from "./component/DataTable";
import DataChart from "./component/DataChart";
import './App.css'
// import DataTable from "react-data-table-component"
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newdata, setnewdata] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, such as API calls to authenticate the user
    // For simplicity, let's assume the login is successful if email and password are not empty
    if (email === "shoaib.123@gmail.com" && password === "sho123") {
      setLoggedIn(true);
    } else {
      alert("Wrong Credential");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  const Chart = () => {
    setnewdata(true);
  };
  const BacktoDataPage = () => {
    setnewdata(false);
  };
  if (newdata) {
    return (
      <div>
        <h1>Welcome to the Chart page!</h1>
        <button onClick={BacktoDataPage}>Back to DataTable</button>
        <DataChart />
      </div>
    );
  }

  if (loggedIn) {
    return (
      <div className="container">
        <h1>Welcome to the DataTable page!</h1>
        <button onClick={handleLogout}>Logout</button>

        <DataTable Chart={Chart} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form className="form" onSubmit={handleLogin}>
        <label className="label">
          Email
          
        </label>
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className="labelp">
          Password
          
        </label>
        <input className="input"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button className="btnlogin" type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
