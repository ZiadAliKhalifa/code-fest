import React from "react";
import "../../assets/styles/media_query.css";
import "../../assets/styles/profile.css";
import "../../assets/styles/body-style.css";
import "../../assets/styles/tags-input.css";
import "../../assets/styles/dropdown.css";
import "../../assets/styles/board.css";
import "../../assets/styles/icomoon_style.css";
import "../../assets/styles/styles.css";
import "../../assets/styles/task-detail.css";

const TaskDetailsPage = ({}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light nav_bar_prop justify-content-between tq-navbar">
        <a className="navbar-brand logo" href="#">
          <img className="img-fluid" src="Assets/logo.png" />
        </a>
        <button
          className="navbar-toggler navbar-light bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-md-auto pr-md-5 center-text-ul ">
            <li className="nav-item active">
              <a className="nav-link nav_items_active text-nav" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav_items text-nav" href="#">
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav_items text-nav" href="Board.html">
                Board
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle profile-border text-nav"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img id="image" />
                <span id="ProfileName" />
              </a>
              <div
                className="dropdown-menu dropdown drop-menu"
                aria-labelledby="navbarDropdown"
              >
                <div>
                  <a className="dropdown-item center-text-ul" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="title m-left">
              <img src="Assets/board-icon.png" />
              <span className="add">
                <a href="board.html">Board</a>{" "}
                <img src="Assets/arrow-right.png" /> Task Details
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="task-details-area">
            <div className="col-sm-12">
              <p className="form-title">Task Details</p>
              <div className="row details-area">
                <div className="col-sm-12">
                  <h2>DETAILS</h2>
                </div>
                <div className="col-sm-5 float-left">
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Task Name</label>
                    </div>
                    <div className="col-sm-7">
                      <label className="bold">HUB</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Task Type</label>
                    </div>
                    <div className="col-sm-7">
                      <label>Associate Project Manager Development</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">SPL</label>
                    </div>
                    <div className="col-sm-7">
                      <label>Text</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Direct Manager</label>
                    </div>
                    <div className="col-sm-7">
                      <label>Ayman</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Project</label>
                    </div>
                    <div className="col-sm-7">
                      <label>WE</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 float-left">
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Available Percentage</label>
                    </div>
                    <div className="col-sm-7">
                      <label>50%</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">From</label>
                    </div>
                    <div className="col-sm-7">
                      <label>14/10/2019</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">To</label>
                    </div>
                    <div className="col-sm-7">
                      <label>15/11/2019</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Technologies</label>
                    </div>
                    <div className="col-sm-7">
                      <label className="grey-bg">Sitecore</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <label className="bold">Brief Description</label>
                    </div>
                    <div className="col-sm-7">
                      <label>Associate Project Manager Development</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 float-left">
                  <label className="bold">Added By</label>
                  <br />
                  <label>Heba Fouad</label>
                </div>
                <div className="clearfix" />
              </div>
              <hr />
              <div className="row description-area">
                <div className="col-sm-12">
                  <h2>DESCRIPTION</h2>
                </div>
                <div className="col-sm-12">
                  <div className="description-content">
                    <h3>Description:</h3>
                    <ol>
                      <li>Open team assessment.</li>
                      <li>
                        Click on the manager assessment for one of the
                        employees.
                      </li>
                      <li>
                        Fill all the required assessment and add some comment.
                      </li>
                      <li>Click "complete" button.</li>
                    </ol>
                    <h3>Expected:</h3>
                    <p className="bold">Open team assessment.</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row comment-area">
                <div className="col-sm-12">
                  <h2>COMMENT</h2>
                </div>
                <div className="col-sm-12">
                  <div className="comment-content">
                    <textarea
                      placeholder="Enter your comment..."
                      defaultValue={""}
                    />
                    <button>POST</button>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-sm-12 comment-details">
                  <img src="Assets/image.png" />
                  <div className="float-left">
                    <label className="bold">Heba Fouad</label>
                    <label className="light">15/06/2019</label>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
                <div className="clearfix" />
                <hr />
                <div className="col-sm-12 comment-details">
                  <img src="Assets/user-icon.jpg" />
                  <div className="float-left">
                    <label className="bold">Michael Garas</label>
                    <label className="light">15/06/2019</label>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="clearfix" />
                <hr />
                <div className="col-sm-12 comment-details">
                  <img src="Assets/user-icon.jpg" />
                  <div className="float-left">
                    <label className="bold">Eman Mamdouh</label>
                    <label className="light">15/06/2019</label>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
                <div className="clearfix" />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
