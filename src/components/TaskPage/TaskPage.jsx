import React from "react";
import "../../assets/styles/media_query.css";
import "../../assets/styles/body-style.css";
import "../../assets/styles/icomoon_style.css";
import "../../assets/styles/dropdown.css";
import "../../assets/styles/profile.css";
import "../../assets/styles/tags-input.css";
import "../../assets/styles/board.css";
import "../../assets/styles/styles.css";
import "../../assets/styles/task-detail.css";

const TaskPage = ({}) => {
          return (
          <div>
            <nav className="navbar navbar-expand-lg bg-light nav_bar_prop justify-content-between tq-navbar">
              <a className="navbar-brand logo" href="#">
                <img className="img-fluid" src={require("../../assets/images/logo.png")} />
              </a>
              <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-md-auto pr-md-5 center-text-ul ">
                  <li className="nav-item active">
                    <a className="nav-link nav_items text-nav" href="#">Resources</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav_items_active text-nav" href="#">Tasks</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav_items text-nav" href="#">Board</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle profile-border text-nav" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img id="image" />
                      <span id="ProfileName" />
                    </a>
                    <div className="dropdown-menu dropdown drop-menu" aria-labelledby="navbarDropdown">
                      <div>
                        <a className="dropdown-item center-text-ul display-inline" href="#">
                          <div className="icon-logout-2 display-inline logout-image" />
                          <p className="display-inline logout-text">Logout</p>
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
                    <i className="icon-business-card-of-a-man-with-contact-info user mr-3" />
                    <span className="add">Add a new needed task</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-3 resource-form m-left task-height">
                  <p className="form-title">
                    Add Task
                  </p>
                  <form className="form-style">
                    <input type="text" placeholder="Task Name" className="form-labels" />
                    <input type="text" placeholder="Task Type" className="form-labels" />
                    <div className="form-group">
                      <label htmlFor="tags-input" className="input_tag">Preferred Technologies</label>
                      <input type="text" id="tag-input1" />
                    </div>
                    <input type="text" placeholder="Urgency" className="form-labels" />
                    <input type="text" placeholder="Function" className="form-labels" />
                    <textarea type="text" rows={4} cols={50} placeholder="Brief Description" className="form-labels" defaultValue={""} />
                    <button className="btn add-button" type="button">ADD</button>
                  </form>
                </div>
                <div className="col-sm-12 col-md-7 resource-form m-left-50">
                  <p className="form-title">
                    Task List
                  </p>
                  <div className="profile-wrapper">
                    <div className="profile">
                      <div className="title-dropdown">
                        <button className="dropbtn bg-btn">    
                          <span className="profile-title-text">Assigning</span>
                          <img className="dropdown-title-image pImage" src={require("../../assets/images/Polygon 7.png" )}/>
                        </button>
                        <div className="title-dropdown-content">
                          <a href="#">Software Engineer</a>
                          <a href="#">Project Manager</a>
                          <a href="#">Consltuant</a>
                        </div>
                      </div>
                    </div>
                    <div className="profile">
                      <div className="title-dropdown">
                        <button className="dropbtn bg-btn">    
                          <span className="profile-title-text">Technology</span>
                          <img className="dropdown-title-image pImage" src={require("../../assets/images/Polygon 7.png")} />
                        </button>
                        <div className=" title-dropdown-content">
                          <div className="title-dropdown-scroll" id="scroll">
                            <a className="padding-5" href="#"><input type="checkbox" name="vehicle1" defaultValue="Bike" /> <span className="drop-text">Sitecore</span></a>
                            <a className="padding-5" href="#"><input type="checkbox" name="vehicle1" defaultValue="Bike" /> <span className="drop-text">Photoshop</span></a>
                            <a className="padding-5" href="#"><input type="checkbox" name="vehicle1" defaultValue="Bike" /> <span className="drop-text">C sharp</span></a>
                            <a className="padding-5" href="#"><input type="checkbox" name="vehicle1" defaultValue="Bike" /> <span className="drop-text">PHP</span></a>
                          </div>
                          <input type="cancel" className="btn dropdown-cancelButton" defaultValue="Select" />
                        </div>
                      </div>
                    </div>
                    <div className="profile">
                      <div className="main">
                        {/* Actual search box */}
                        <div className="form-group has-search form-group-search">
                          <span className="fa fa-search form-control-feedback" />
                          <input type="text" className="form-control" placeholder="All Tasks" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resource-wrapper">
                    <div className="row border-bottom">
                      <div className="col-sm-12 col-md-4">
                        <div className="info">
                          <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                              <div className="modal-content">
                                <div className="modal-body mb-0 p-0">
                                  <div className="row popup-margins">
                                    <div className="col-sm-12 col-md-12 popup-profile">
                                      Profile
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-12 col-md-3 m-left-50 border-right">
                                      <img className="popup-image" src={require("../../assets/images/popup.png")} />
                                      <p className="popup-text">Added by</p>
                                      <p className="popup-name">Heba Fouad</p>
                                      <div className="modal fade" id="modal8" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                          {/*Content*/}
                                          <div className="modal-content">
                                            {/*Body*/}
                                            <div className="modal-body mb-0 p-0">
                                              <p className="edit-form-title popup-margins">
                                                Edit
                                              </p>
                                              <form className="form-style">
                                                <div className="row">
                                                  <div className="col-sm-12 col-md-6">
                                                    <input type="text" placeholder="Task Name" className="form-labels input-value" />
                                                    <input type="text" placeholder="Task Type" className="form-labels input-value" />
                                                    <input type="text" placeholder="Direct Manager" className="form-labels input-value" />
                                                    <input type="text" placeholder="project" className="form-labels input-value" />
                                                    <input type="text" placeholder="Urgency" className="form-labels input-value" />
                                                    <button className="btn add-button" type="button">Done</button>
                                                  </div>
                                                  <div className="col-sm-12 col-md-6">
                                                    <div className="time-wrapper width-100">
                                                      <div className="title-dropdown width-40 float-left">
                                                        <input type="text" placeholder="From" className="form-labels input-value" />
                                                      </div>
                                                      <div className="title-dropdown width-40 float-right">
                                                        <input type="text" placeholder="To" className="form-labels input-value" />
                                                      </div>
                                                    </div>
                                                    <div className="form-labels">
                                                      <label htmlFor="tags-input" className="input_tag">Technologies</label>
                                                    </div>
                                                    <input type="text" placeholder="Name" defaultValue="Function" className="form-labels input-value" />
                                                  </div>
                                                </div>
                                              </form></div>
                                          </div>
                                        </div>
                                      </div>
                                      <a>
                                      </a><div data-toggle="modal" data-target="#modal8" className="icon-writing z-depth-1 display-inline edit-margin"><a>
                                        </a><a href="#" className="edit-text">Edit</a>
                                      </div>
                                      <div className="modal fade" id="modal5" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                          {/*Content*/}
                                          <div className="modal-content delete-cont">
                                            {/*Body*/}
                                            <div className="modal-body mb-0 p-0">
                                              <div className="row">
                                                <div className="col=sm-12 col-md-12 delete-margin">
                                                  <p className="popup-delete-confirm">Confirm to delete</p>
                                                  <p className="popup-confirm">Are you sure you want to delete this?</p>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col=sm-12 col-md-12 delete-padding">
                                                  <button className="btn cancel-button popup-delete" type="button">Delete</button>
                                                  <button className="btn cancel-button popup-cancel" type="button">Cancel</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <a>
                                      </a><div data-toggle="modal" data-target="#modal5" className="icon-rubbish-bin z-depth-1 display-inline edit m-left-10"><a>
                                        </a><a href="#" className="delete-text">Delete</a>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-8">
                                      <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                          <p className="name-info">Name</p>
                                          <p className="name-info">Title</p>
                                          <p className="name-info">SPL</p>
                                          <p className="name-info">Direct Manager</p>
                                          <p className="name-info">Project</p>
                                          <p className="name-info">Available Perecentage</p>
                                          <p className="name-info">From</p>
                                          <p className="name-info">To</p>
                                          <p className="name-info">Technologies</p>
                                          <p className="name-info">Comment</p>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                          <p className="popup-info">Mohamed Elshnawi</p>
                                          <p className="popup-info">Associate Project ManagerDevelopment</p>
                                          <p className="popup-info">Text</p>
                                          <p className="popup-info">Ayman</p>
                                          <p className="popup-info">WE</p>
                                          <p className="popup-info">%60</p>
                                          <p className="popup-info">14/10/2019</p>
                                          <p className="tech-margins">15/11/2019</p>
                                          <p className="tech-margins">
                                          </p><div>
                                            <div className="skill">Sitecore</div>
                                            <div className="skill">Sharepoint</div>
                                            <div className="skill">Photoshop</div>
                                          </div>
                                          <p />
                                          <p className="popup-info">Associate Project ManagerDevelopment</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/*/.Content*/}
                            </div>
                          </div>
                          {/*Modal: Name*/}
                          <a><img className="img-fluid z-depth-1 image-profile avatar" src={require("../../assets/images/avatar.png")} alt="video" data-toggle="modal" data-target="#modal1" /></a>
                          <div className="name span-inline">Task Name 1</div>
                          <div className="m-left-85">
                            <div className="not-available display-inline">
                            </div>
                            <div className="display-inline not-ava-text">Not assigned</div>
                          </div>
                          <div className="resource-title">
                            <span>To:</span>
                            <span className="name-span">N/A</span></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-5">
                        <div className="tech-name display-inline">
                          <div className="skill">Sitecore</div>
                          <div className="skill">Sharepoint</div>
                          <div className="skill">Photoshop</div>
                          <div className="more">...</div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-3">
                        {/*Modal: Name*/}
                        <div className="modal fade" id="modal4" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg" role="document">
                            {/*Content*/}
                            <div className="modal-content">
                              {/*Body*/}
                              <div className="modal-body mb-0 p-0">
                                <p className="edit-form-title popup-margins">
                                  Edit
                                </p>
                                <form className="form-style">
                                  <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                      <input type="text" placeholder="Task Name" className="form-labels input-value" />
                                      <input type="text" placeholder="Task Type" className="form-labels input-value" />
                                      <input type="text" placeholder="Direct Manager" className="form-labels input-value" />
                                      <input type="text" placeholder="project" className="form-labels input-value" />
                                      <input type="text" placeholder="Urgency" className="form-labels input-value" />
                                      <button className="btn add-button" type="button">Done</button>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                      <div className="time-wrapper width-100">
                                        <div className="title-dropdown width-40 float-left">
                                          <input type="text" placeholder="From" className="form-labels input-value" />
                                        </div>
                                        <div className="title-dropdown width-40 float-right">
                                          <input type="text" placeholder="To" className="form-labels input-value" />
                                        </div>
                                      </div>
                                      <div className="form-labels">
                                        <label htmlFor="tags-input" className="input_tag">Technologies</label>
                                      </div>
                                      <input type="text" placeholder="Name" defaultValue="Function" className="form-labels input-value" />
                                    </div>
                                  </div>
                                </form></div>
                            </div>
                          </div>
                        </div>
                        <a>
                        </a><div data-toggle="modal" data-target="#modal4" className="icon-writing z-depth-1 display-inline edit-margin"><a>
                          </a><a href="#" className="edit-text">Edit</a>
                        </div>
                        <div className="modal fade" id="modal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg" role="document">
                            {/*Content*/}
                            <div className="modal-content delete-cont">
                              {/*Body*/}
                              <div className="modal-body mb-0 p-0">
                                <div className="row">
                                  <div className="col=sm-12 col-md-12 delete-margin">
                                    <p className="popup-delete-confirm">Confirm to delete</p>
                                    <p className="popup-confirm">Are you sure you want to delete this?</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col=sm-12 col-md-12 delete-padding">
                                    <button className="btn cancel-button popup-delete" type="button">Delete</button>
                                    <button className="btn cancel-button popup-cancel" type="button">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a>
                        </a><div data-toggle="modal" data-target="#modal3" className="icon-rubbish-bin z-depth-1 display-inline edit m-left-10"><a>
                          </a><a href="#" className="delete-text">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-sm-12 col-md-4">
                        <div className="info">
                          <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                              <div className="modal-content">
                                <div className="modal-body mb-0 p-0">
                                  <div className="row popup-margins">
                                    <div className="col-sm-12 col-md-12 popup-profile">
                                      Profile
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-12 col-md-3 m-left-50 border-right">
                                      <img className="popup-image" src={require("../../assets/images/popup.png")} />
                                      <p className="popup-text">Added by</p>
                                      <p className="popup-name">Heba Fouad</p>
                                      <div className="modal fade" id="modal8" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                          {/*Content*/}
                                          <div className="modal-content">
                                            {/*Body*/}
                                            <div className="modal-body mb-0 p-0">
                                              <p className="edit-form-title popup-margins">
                                                Edit
                                              </p>
                                              <form className="form-style">
                                                <div className="row">
                                                  <div className="col-sm-12 col-md-6">
                                                    <input type="text" placeholder="Task Name" className="form-labels input-value" />
                                                    <input type="text" placeholder="Task Type" className="form-labels input-value" />
                                                    <input type="text" placeholder="Direct Manager" className="form-labels input-value" />
                                                    <input type="text" placeholder="project" className="form-labels input-value" />
                                                    <input type="text" placeholder="Urgency" className="form-labels input-value" />
                                                    <button className="btn add-button" type="button">Done</button>
                                                  </div>
                                                  <div className="col-sm-12 col-md-6">
                                                    <div className="time-wrapper width-100">
                                                      <div className="title-dropdown width-40 float-left">
                                                        <input type="text" placeholder="From" className="form-labels input-value" />
                                                      </div>
                                                      <div className="title-dropdown width-40 float-right">
                                                        <input type="text" placeholder="To" className="form-labels input-value" />
                                                      </div>
                                                    </div>
                                                    <div className="form-labels">
                                                      <label htmlFor="tags-input" className="input_tag">Technologies</label>
                                                    </div>
                                                    <input type="text" placeholder="Name" defaultValue="Function" className="form-labels input-value" />
                                                  </div>
                                                </div>
                                              </form></div>
                                          </div>
                                        </div>
                                      </div>
                                      <a>
                                      </a><div data-toggle="modal" data-target="#modal8" className="icon-writing z-depth-1 display-inline edit-margin"><a>
                                        </a><a href="#" className="edit-text">Edit</a>
                                      </div>
                                      <div className="modal fade" id="modal5" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                          {/*Content*/}
                                          <div className="modal-content delete-cont">
                                            {/*Body*/}
                                            <div className="modal-body mb-0 p-0">
                                              <div className="row">
                                                <div className="col=sm-12 col-md-12 delete-margin">
                                                  <p className="popup-delete-confirm">Confirm to delete</p>
                                                  <p className="popup-confirm">Are you sure you want to delete this?</p>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col=sm-12 col-md-12 delete-padding">
                                                  <button className="btn cancel-button popup-delete" type="button">Delete</button>
                                                  <button className="btn cancel-button popup-cancel" type="button">Cancel</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <a>
                                      </a><div data-toggle="modal" data-target="#modal5" className="icon-rubbish-bin z-depth-1 display-inline edit m-left-10"><a>
                                        </a><a href="#" className="delete-text">Delete</a>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-8">
                                      <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                          <p className="name-info">Name</p>
                                          <p className="name-info">Title</p>
                                          <p className="name-info">SPL</p>
                                          <p className="name-info">Direct Manager</p>
                                          <p className="name-info">Project</p>
                                          <p className="name-info">Available Perecentage</p>
                                          <p className="name-info">From</p>
                                          <p className="name-info">To</p>
                                          <p className="name-info">Technologies</p>
                                          <p className="name-info">Comment</p>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                          <p className="popup-info">Mohamed Elshnawi</p>
                                          <p className="popup-info">Associate Project ManagerDevelopment</p>
                                          <p className="popup-info">Text</p>
                                          <p className="popup-info">Ayman</p>
                                          <p className="popup-info">WE</p>
                                          <p className="popup-info">%60</p>
                                          <p className="popup-info">14/10/2019</p>
                                          <p className="tech-margins">15/11/2019</p>
                                          <p className="tech-margins">
                                          </p><div>
                                            <div className="skill">Sitecore</div>
                                            <div className="skill">Sharepoint</div>
                                            <div className="skill">Photoshop</div>
                                          </div>
                                          <p />
                                          <p className="popup-info">Associate Project ManagerDevelopment</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/*/.Content*/}
                            </div>
                          </div>
                          {/*Modal: Name*/}
                          <a><img className="img-fluid z-depth-1 image-profile" src={require("../../assets/images/pic.png")} alt="video" data-toggle="modal" data-target="#modal1" /></a>
                          <div className="name span-inline">Task Name 2</div>
                          <div className="m-left-85">
                            <div className="available display-inline">
                            </div>
                            <div className="display-inline ava-text">Assigned</div>
                          </div>
                          <div className="resource-title">
                            <span>To:</span>
                            <span className="name-span">Heba Fouad</span></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-5">
                        <div className="tech-name display-inline">
                          <div className="skill">Sitecore</div>
                          <div className="skill">Sharepoint</div>
                          <div className="skill">Photoshop</div>
                          <div className="more">...</div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-3">
                        {/*Modal: Name*/}
                        <div className="modal fade" id="modal4" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg" role="document">
                            {/*Content*/}
                            <div className="modal-content">
                              {/*Body*/}
                              <div className="modal-body mb-0 p-0">
                                <p className="edit-form-title popup-margins">
                                  Edit
                                </p>
                                <form className="form-style">
                                  <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                      <input type="text" placeholder="Task Name" className="form-labels input-value" />
                                      <input type="text" placeholder="Task Type" className="form-labels input-value" />
                                      <input type="text" placeholder="Direct Manager" className="form-labels input-value" />
                                      <input type="text" placeholder="project" className="form-labels input-value" />
                                      <input type="text" placeholder="Urgency" className="form-labels input-value" />
                                      <button className="btn add-button" type="button">Done</button>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                      <div className="time-wrapper width-100">
                                        <div className="title-dropdown width-40 float-left">
                                          <input type="text" placeholder="From" className="form-labels input-value" />
                                        </div>
                                        <div className="title-dropdown width-40 float-right">
                                          <input type="text" placeholder="To" className="form-labels input-value" />
                                        </div>
                                      </div>
                                      <div className="form-labels">
                                        <label htmlFor="tags-input" className="input_tag">Technologies</label>
                                      </div>
                                      <input type="text" placeholder="Name" defaultValue="Function" className="form-labels input-value" />
                                    </div>
                                  </div>
                                </form></div>
                            </div>
                          </div>
                        </div>
                        <a>
                        </a><div data-toggle="modal" data-target="#modal4" className="icon-writing z-depth-1 display-inline edit-margin"><a>
                          </a><a href="#" className="edit-text">Edit</a>
                        </div>
                        <div className="modal fade" id="modal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg" role="document">
                            {/*Content*/}
                            <div className="modal-content delete-cont">
                              {/*Body*/}
                              <div className="modal-body mb-0 p-0">
                                <div className="row">
                                  <div className="col=sm-12 col-md-12 delete-margin">
                                    <p className="popup-delete-confirm">Confirm to delete</p>
                                    <p className="popup-confirm">Are you sure you want to delete this?</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col=sm-12 col-md-12 delete-padding">
                                    <button className="btn cancel-button popup-delete" type="button">Delete</button>
                                    <button className="btn cancel-button popup-cancel" type="button">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a>
                        </a><div data-toggle="modal" data-target="#modal3" className="icon-rubbish-bin z-depth-1 display-inline edit m-left-10"><a>
                          </a><a href="#" className="delete-text">Delete</a>
                        </div>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-sm-12 col-md-4">
                        <div className="info">
                          <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                              <div className="modal-content">
                                <div className="modal-body mb-0 p-0">
                                  <div className="row popup-margins">
                                    <div className="col-sm-12 col-md-12 popup-profile">
                                      Profile
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-12 col-md-3 m-left-50 border-right">
                                      <img className="popup-image" src={require("../../assets/images/popup.png")} />
                                      <p className="popup-text">Added by</p>
                                      <p className="popup-name">Heba Fouad</p>
                                      <div className="modal fade" id="modal8" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                          {/*Content*/}
                                          <div className="modal-content">
                                            {/*Body*/}
                                            <div className="modal-body mb-0 p-0">
                                              <p className="edit-form-title popup-margins">
                                                Edit
                                              </p>
                                              <form className="form-style">
                                                <div className="row">
                                                  <div className="col-sm-12 col-md-6">
                                                    <input type="text" placeholder="Task Name" className="form-labels input-value" />
                                                    <input type="text" placeholder="Task Type" className="form-labels input-value" />
                                                    <input type="text" placeholder="Direct Manager" className="form-labels input-value" />
                                                    <input type="text" placeholder="project" className="form-labels input-value" />
                                                    <input type="text" placeholder="Urgency" className="form-labels input-value" />
                                                    <button className="btn add-button" type="button">Done</button>
                                                  </div>
                                                  <div className="col-sm-12 col-md-6">
                                                    <div className="time-wrapper width-100">
                                                      <div className="title-dropdown width-40 float-left">
                                                        <input type="text" placeholder="From" className="form-labels input-value" />
                                                      </div>
                                                      <div className="title-dropdown width-40 float-right">
                                                        <input type="text" placeholder="To" className="form-labels input-value" />
                                                      </div>
                                                    </div>
                                                    <div className="form-labels">
                                                      <label htmlFor="tags-input" className="input_tag">Technologies</label>
                                                    </div>
                                                    <input type="text" placeholder="Name" defaultValue="Function" className="form-labels input-value" />
                                                  </div>
                                                </div>
                                              </form></div>
                                          </div>
                                        </div>
                                      </div>
                                      <a>
                                      </a><div data-toggle="modal" data-target="#modal8" className="icon-writing z-depth-1 display-inline edit-margin"><a>
                                        </a><a href="#" className="edit-text">Edit</a>
                                      </div>
                                      <div className="modal fade" id="modal5" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                                          {/*Content*/}
                                          <div className="modal-content delete-cont">
                                            {/*Body*/}
                                            <div className="modal-body mb-0 p-0">
                                              <div className="row">
                                                <div className="col=sm-12 col-md-12 delete-margin">
                                                  <p className="popup-delete-confirm">Confirm to delete</p>
                                                  <p className="popup-confirm">Are you sure you want to delete this?</p>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col=sm-12 col-md-12 delete-padding">
                                                  <button className="btn cancel-button popup-delete" type="button">Delete</button>
                                                  <button className="btn cancel-button popup-cancel" type="button">Cancel</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <a>
                                      </a><div data-toggle="modal" data-target="#modal5" className="icon-rubbish-bin z-depth-1 display-inline edit m-left-10"><a>
                                        </a><a href="#" className="delete-text">Delete</a>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-8">
                                      <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                          <p className="name-info">Name</p>
                                          <p className="name-info">Title</p>
                                          <p className="name-info">SPL</p>
                                          <p className="name-info">Direct Manager</p>
                                          <p className="name-info">Project</p>
                                          <p className="name-info">Available Perecentage</p>
                                          <p className="name-info">From</p>
                                          <p className="name-info">To</p>
                                          <p className="name-info">Technologies</p>
                                          <p className="name-info">Comment</p>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                          <p className="popup-info">Mohamed Elshnawi</p>
                                          <p className="popup-info">Associate Project ManagerDevelopment</p>
                                          <p className="popup-info">Text</p>
                                          <p className="popup-info">Ayman</p>
                                          <p className="popup-info">WE</p>
                                          <p className="popup-info">%60</p>
                                          <p className="popup-info">14/10/2019</p>
                                          <p className="tech-margins">15/11/2019</p>
                                          <p className="tech-margins">
                                          </p><div>
                                            <div className="skill">Sitecore</div>
                                            <div className="skill">Sharepoint</div>
                                            <div className="skill">Photoshop</div>
                                          </div>
                                          <p />
                                          <p className="popup-info">Associate Project ManagerDevelopment</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/*/.Content*/}
                            </div>
                          </div>
                          {/*Modal: Name*/}
                          <a><img className="img-fluid z-depth-1 image-profile" src={require("../../assets/images/pic.png")} alt="video" data-toggle="modal" data-target="#modal1" /></a>
                          <div className="name span-inline">Task Name 3</div>
                          <div className="m-left-85">
                            <div className="available display-inline">
                            </div>
                            <div className="display-inline ava-text">Assigned</div>
                          </div>
                          <div className="resource-title">
                            <span>To:</span>
                            <span className="name-span">Amira Samir</span></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-5">
                        <div className="tech-name display-inline">
                          <div className="skill">Sitecore</div>
                          <div className="skill">Sharepoint</div>
                          <div className="skill">Photoshop</div>
                          <div className="more">...</div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-3">
                        {/*Modal: Name*/}
                        <div className="modal fade" id="modal4" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg" role="document">
                            {/*Content*/}
                            <div className="modal-content">
                              {/*Body*/}
                              <div className="modal-body mb-0 p-0">
                                <p className="edit-form-title popup-margins">
                                  Edit
                                </p>
                                <form className="form-style">
                                  <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                      <input type="text" placeholder="Task Name" className="form-labels input-value" />
                                      <input type="text" placeholder="Task Type" className="form-labels input-value" />
                                      <input type="text" placeholder="Direct Manager" className="form-labels input-value" />
                                      <input type="text" placeholder="project" className="form-labels input-value" />
                                      <input type="text" placeholder="Urgency" className="form-labels input-value" />
                                      <button className="btn add-button" type="button">Done</button>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                      <div className="time-wrapper width-100">
                                        <div className="title-dropdown width-40 float-left">
                                          <input type="text" placeholder="From" className="form-labels input-value" />
                                        </div>
                                        <div className="title-dropdown width-40 float-right">
                                          <input type="text" placeholder="To" className="form-labels input-value" />
                                        </div>
                                      </div>
                                      <div className="form-labels">
                                        <label htmlFor="tags-input" className="input_tag">Technologies</label>
                                      </div>
                                      <input type="text" placeholder="Name" defaultValue="Function" className="form-labels input-value" />
                                    </div>
                                  </div>
                                </form></div>
                            </div>
                          </div>
                        </div>
                        <a>
                        </a><div data-toggle="modal" data-target="#modal4" className="icon-writing z-depth-1 display-inline edit-margin"><a>
                          </a><a href="#" className="edit-text">Edit</a>
                        </div>
                        <div className="modal fade" id="modal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-lg" role="document">
                            {/*Content*/}
                            <div className="modal-content delete-cont">
                              {/*Body*/}
                              <div className="modal-body mb-0 p-0">
                                <div className="row">
                                  <div className="col=sm-12 col-md-12 delete-margin">
                                    <p className="popup-delete-confirm">Confirm to delete</p>
                                    <p className="popup-confirm">Are you sure you want to delete this?</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col=sm-12 col-md-12 delete-padding">
                                    <button className="btn cancel-button popup-delete" type="button">Delete</button>
                                    <button className="btn cancel-button popup-cancel" type="button">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a>
                        </a><div data-toggle="modal" data-target="#modal3" className="icon-rubbish-bin z-depth-1 display-inline edit m-left-10"><a>
                          </a><a href="#" className="delete-text">Delete</a>
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

export default TaskPage;
