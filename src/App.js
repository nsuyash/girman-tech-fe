import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import useFetch from "./useFetch";
import { useState } from "react";
import FetchDetails from "./components/fetchDetails";

const Search = () => {
  const { data, error, loading } = useFetch("https://girman-tech-be.vercel.app/users");

  const [input, setInput] = useState("");
  const [user, setUser] = useState(null)

  const filteredData = data
    ? data.filter((user) =>
        (user.first_name.toLowerCase() + " " + user.last_name.toLowerCase()).includes(input.toLowerCase())
      )
    : data;

  return (
    <>
      <Header />
      <FetchDetails user={user} />
      <div className="container my-5">
        <div className="mx-2">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-search text-primary"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        </div>
      </div>

      <div className="container mt-4">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-danger">Error loading data!</p>}
        {filteredData && filteredData.length > 0 ? (
          <div className="row g-4">
            {filteredData.map((user, index) => (
              <div key={index} className="col-md-4">
                <div className="card mx-2">
                    <div className="pt-3 px-3 user-card-border">
                        <img className="user-card-img" src={user.profile_url} alt="Profile Pricture" />
                        <h3>{user.first_name}{" "}{user.last_name}</h3>
                    </div>
                    <div className="ps-3 pt-2">
                        <p className="card-text text-muted">
                        <i className="bi bi-geo-alt-fill"></i> {user.city}
                        </p>
                    </div>
                    <div className="container mt-4">
                        <p className="horizontal-line"></p>
                    </div>
                    <div className="ps-3 user-card-border">
                        <div>
                        <p>
                        <strong>
                            <i className="bi bi-telephone-fill"></i> {user.contact_number}
                        </strong>
                        </p>
                        <p className="contact-availabe-show"><small>Available on phone</small></p>     
                        </div>
                        <div>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark btn-arrangement" onClick={() => setUser(user)}>Fetch Details</button>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        ) : !loading && (
            <div className="text-center">
            <img
              className="img-fluid"
              src="https://comodosslstore.com/blog/wp-content/uploads/2024/01/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg"
              alt="Data Not Found"
              style={{ maxWidth: "400px" }}
            />
            <p className="mt-3">Oops, no data found.</p>
            </div>
        )}
      </div>
    </>
  );
};

export default Search;

