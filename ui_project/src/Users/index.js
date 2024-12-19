import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
export default function Users() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");

  useEffect(() => {
    getAPI();
  }, []);

  const saveAPI = () => {
    // console.log(email);
    // console.log(name);
    // console.log(password);
    // console.log(dob);
    try{
        axios
        .post("http://localhost:6060/users", { id:(Math.random() * 1000), email, name, password, dob })
        .then((res) => {
            getAPI();
        });
    }
    catch(err){
        console.log(err);
    }
  };

  const getAPI = () => {
    axios.get("http://localhost:6060/users").then((res) => {
      setData(res.data);
    });
  };

  const deleteAPI = (userId) =>{
    console.log(userId);
    axios.delete("http://localhost:6060/users",{data:{id:userId}}).then((res) => {
        getAPI();
      });
  }
  return (
    <div>
      <div class="addData">
        <div class="container text-center">
          <div class="row customForm">
            <div class="mb-3">
              <label for="Name" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="Name"
                placeholder="Enter the Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="DOB" class="form-label">
                DOB
              </label>
              <input
                type="email"
                class="form-control"
                id="DOB"
                placeholder="Dnter the DOB"
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="Password" class="form-label">
                Password
              </label>
              <input
                type="email"
                class="form-control"
                id="Password"
                placeholder="Enter the password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button class="btn btn-primary" onClick={saveAPI}>
              Register
            </button>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          {data.map((record) => (
            <div class="col">
              <div class="card">
                <img
                  src="https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{record.name}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button class="btn btn-warning" onClick={(e)=> deleteAPI(record.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
