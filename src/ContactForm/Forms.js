import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./Modal";
// import Logo from 'formImg.png';
// import Popup from 'reactjs-popup';
import "./Forms.css";
function FormsComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhonenumber] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  const names = { firstName, lastName, email,phone };

  // const isValid=firstName&&lastName&&email&&password
  const validateEmail = () => {
    if (!email) {
      setEmailError("Email can't be empty");
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Email is invalid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      phone.length === 0 ||
      email.length === 0
    ) {
      setError(true);
      setSuccess(false);
    } else {
      setSuccess(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    console.log(firstName, lastName, email, phone);
  };
  const setBack = () => {
    setSuccess(false);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <ClipLoader
            color={"green"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : success ? (
        <div>
          <div className="card ">
            <div>
              <h1 className="heading">Successfully! your form submitted</h1>
              <div className="d-flex flex-row justify-content-center">
                <a href="/" className="m-4 back-btn" onClick={setBack}>
                  Back
                </a>
                <button className="print-btn" onClick={toggleModal}>
                  Print
                </button>
              </div>
            </div>
            {modal && (
              <div>
                <Modal names={names} toggleModal={toggleModal}></Modal>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex flex-row">
            <div className="col-7 bg-container">
              <form onSubmit={handleSubmit}>
                <h1 className="heading-reg">Registration Form</h1>
                <div className="d-flex flex-row pr-3">
                  <div>
                    <input
                      className="name-input"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {error && firstName.length <= 0 ? (
                      <label>First name can't be empty</label>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <input
                      type="text" className="name-input"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {error && lastName.length <= 0 ? (
                      <label>Last name can't be empty</label>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                  />
                </div>
                {error && email.length <= 0 ? (
                  <label>Email can't be empty</label>
                ) : emailError ? (
                  <label>Provide Valid Email</label>
                ) : (
                  ""
                )}
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                  {/* <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
                </div>
                {error && phone.length <= 0 ? (
                  <label>Password can't be empty</label>
                ) : (
                  ""
                )}
                <div>
                  <button type="submit" className="submitbtn">
                    Submit
                  </button>
                </div>
                {/* {isValid&&(<div>
                    <button type="submit" className="submitbtn">Submit</button>
                </div>)} */}
              </form>
            </div>
            <div className="col-5">
              <img
                className="flight-img"
                src="formImg.png"
                alt="registration img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default FormsComponent;
