{
  /* <input onChange={(e) =>setRegistration({FirstName:e.target.value})}  /> */
}
{
  /* <input onChange={(e) =>setRegistration({...Registration.FirstName:e.target.value})}  /> */
}
// Name : aman raza 0328-3497529

import React, { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    occupation: "",
  });

  const [record, setRecord] = useState([])

  const handleSubmit = () => {
    setRecord([...record, {registration}])
    setRegistration({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    occupation: "",

    })
  }
  console.log(registration);
  return (
    <div>
      <Input value={registration.firstName}
        onChange={(e) =>
          setRegistration({ ...registration, firstName: e.target.value })
        }
        label="Enter first name"
        type="text"
      />
      <Input value={registration.lastName}
        onChange={(e) =>
          setRegistration({ ...registration, lastName: e.target.value })
        }
        label="Enter last name"
        type="text"
      />
      <Input value={registration.email}
        onChange={(e) =>
          setRegistration({ ...registration, email: e.target.value })
        }
        label="Enter email"
        type="email"
      />
      <Input value={registration.password}
        onChange={(e) =>
          setRegistration({ ...registration, password: e.target.value })
        }
        label="Enter password"
        type="password"
      />
      <Input value={registration.age}
        onChange={(e) =>
          setRegistration({ ...registration, age: e.target.value })
        }
        label="Enter Age"
        type="text"
      />
      <Input value={registration.occupation}
        onChange={(e) =>
          setRegistration({ ...registration, occupation: e.target.value })
        }
        label="Enter occupation"
        type="text"
      />
      
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {/* {
        record.map((e, i) => {
          return(

            <div key ={i}>
            <h1>{e.registration.firstName}</h1>
            <h1>{e.registration.lastName}</h1>
            <h1>{e.registration.email}</h1>
            <h1>{e.registration.age}</h1>
            <h1>{e.registration.occupation}</h1>
            <h1>{e.registration.password}</h1> */}

              <table>
                <thead>
                  <tr>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Age</td>
                    <td>Email</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    record.map((e,i) => {
                      return(
                        <tr  key={i}>
                          <td>{e.registration.firstName}</td>
                          <td>{e.registration.lastName}</td>
                          <td>{e.registration.age}</td>
                          <td>{e.registration.email}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
          ) }
      



export default App;
