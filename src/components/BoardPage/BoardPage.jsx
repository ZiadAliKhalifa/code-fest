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
const BoardPage = ({}) => {
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
              <span className="add">Board</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="board-area">
            <div className="col-sm-12">
              <p className="form-title">Board</p>
              <div className="row ">
                <div className="col-sm-12">
                  <div className="assigned-area">
                    <label className="checkbox-area">
                      Assigned to me
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <div className="dropdown show">
                      <a
                        className="btn btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown link
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                    <input
                      type="search"
                      className="float-left"
                      placeholder="Search tasks"
                    />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="task-area">
                    <h2>TO DO</h2>
                    <div className="task">
                      <div className="row">
                        <div className="col-sm-8">
                          <h3>
                            <a href="task-detail.html">Task Name 1</a>
                          </h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img src="Assets/profile.png" />
                          <label>Due Date</label>
                          <label>15 May 2020</label>
                        </div>
                      </div>
                    </div>
                    <div className="task">
                      <div className="row">
                        <div className="col-sm-8">
                          <h3>
                            <a href="task-detail.html">Task Name 1</a>
                          </h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img src="Assets/profile.png" />
                          <label>Due Date</label>
                          <label>15 May 2020</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="task-area">
                    <h2>IN PROGRESS</h2>
                    <div className="task">
                      <div className="row">
                        <div className="col-sm-8">
                          <h3>
                            <a href="task-detail.html">Task Name 1</a>
                          </h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,{" "}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img src="Assets/profile.png" />
                          <label>Due Date</label>
                          <label>15 May 2020</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="task-area">
                    <h2>DONE</h2>
                    <div className="task">
                      <div className="row">
                        <div className="col-sm-8">
                          <h3>
                            <a href="task-detail.html">Task Name 1</a>
                          </h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img src="Assets/profile.png" />
                          <label>Due Date</label>
                          <label>15 May 2020</label>
                        </div>
                      </div>
                    </div>
                    <div className="task">
                      <div className="row">
                        <div className="col-sm-8">
                          <h3>
                            <a href="task-detail.html">Task Name 1</a>
                          </h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img src="Assets/profile.png" />
                          <label>Due Date</label>
                          <label>15 May 2020</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
