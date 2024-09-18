import React, { useState } from "react";
import InputApp from "./components/Input";

const App = () => {
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    age: "",
    password: "",
  });

  const [record, setRecord] = useState([]);

  const handleSubmit = () => {
    setRecord([...record, { registration }]);
    setRegistration({
      firstName: "",
      lastName: "",
      age: "",
      password: "",
    });
  };
  console.log(registration);
  return (
    <div>
      <InputApp
        onChange={(e) =>
          setRegistration({ ...registration, firstName: e.target.value })
        }
        label="Enter Your firstName"
        type="text"
      />
      <InputApp
        onChange={(e) =>
          setRegistration({ ...registration, lastName: e.target.value })
        }
        label="Enter Your lastName"
        type="text"
      />
      <InputApp
        onChange={(e) =>
          setRegistration({ ...registration, age: e.target.value })
        }
        label="Enter Your Age"
        type="number"
      />
      <InputApp
        onChange={(e) =>
          setRegistration({ ...registration, password: e.target.value })
        }
        label="Enter Your Password"
        type="password"
      />
      <button onClick={handleSubmit}>Submit</button>

      {/* {
        record.map((e, i) => {
          return (
            <div>
              <h1>{e.registration.firstName}</h1>
              <h1>{e.registration.lastName}</h1>
              <h1>{e.registration.age}</h1>
              <h1>{e.registration.password}</h1>
            </div>
          );
        })
      } */}
      <table border={2}>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Password</td>
          </tr>
        </thead>

        <tbody>
          {
            record.map((e, i) =>{
              return(
                <tr key={i}>
                  <td>{e.registration.firstName}</td>
                  <td>{e.registration.lastName}</td>
                  <td>{e.registration.age}</td>
                  <td>{e.registration.password}</td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  );
};

export default App;
