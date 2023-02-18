import React from "react"

const Modal=({names,toggleModal})=>{
    
    return(
        <div>
            <div className="modal">
                <div onClick={toggleModal} className="overlay">
                  <div className="modal-content ">
                    <div className="line-card">
                      <div className="d-flex flex-row">
                        <div className="dtls">
                          <h2>
                            <b>Your Details</b>
                          </h2>
                          <br />

                          <p>
                            <b>First Name:</b> &nbsp;{names.firstName}
                          </p>
                          <p>
                            <b>Last Name:</b> &nbsp;{names.lastName}
                          </p>
                          <p>
                            <b>Email:</b> &nbsp;{names.email}
                          </p>
                          <p>
                            <b>Phone:</b> &nbsp;{names.phone}
                          </p>
                        </div>
                        <div className="image-card">
                        <img className="image" alt="profile" 
                        src="https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180902667/109317646-profile-pic-vector-icon-isolated-on-transparent-background-profile-pic-logo-concept.jpg"/>
                          </div>
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <button className="m-2 close-btn" onClick={toggleModal}>
                          Close
                        </button>
                        <button className="m-2 download-btn">Download</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}
export default Modal