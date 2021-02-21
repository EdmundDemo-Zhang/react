import React, {Component} from "react"

export default class SearchResultPage extends Component{
	
	render() {
		return(
			<div className="layout-wrapper">
				<div className="header d-print-none">
					<div className="header-container">
						<div className="header-body">
							<div className="header-body-left">
								<ul className="navbar-nav">
									<li className="nav-item navigation-toggler">
										<a href="#" className="nav-link">
											<i className="ti-menu"></i>
										</a>
									</li>
									<li className="nav-item">
										<div className="header-search-form">
											<form>
												<div className="input-group">
													<div className="input-group-prepend">
														<button className="btn">
															<i className="ti-search"></i>
														</button>
													</div>
													<input type="text" className="form-control"
													       placeholder="Search something..."/>
														<div className="input-group-append">
															<button className="btn header-search-close-btn">
																<i data-feather="x"></i>
															</button>
														</div>
												</div>
											</form>
										</div>
									</li>
								</ul>
							</div>
							
							<div className="header-body-right">
								<ul className="navbar-nav">
									<li className="nav-item">
										<a href="#" className="nav-link mobile-header-search-btn" title="Search">
											<i className="ti-search"></i>
										</a>
									</li>
									
									<li className="nav-item dropdown">
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
											<div className="bg-primary px-3 py-3">
												<h6 className="mb-0">Notifications</h6>
											</div>
											<div className="dropdown-scroll">
												<ul className="list-group list-group-flush">
													<li>
														<a href="#"
														   className="list-group-item d-flex hide-show-toggler">
															<div>
																<figure className="avatar mr-3">
                                                        <span
	                                                        className="avatar-title bg-secondary-bright text-secondary rounded-circle">
                                                            <i className="ti-server"></i>
                                                        </span>
																</figure>
															</div>
															<div className="flex-grow-1">
																<p className="mb-0">
																	Your storage space is running low!
																	<i title="Mark as unread" data-toggle="tooltip"
																	   className="hide-show-toggler-item fa fa-check font-size-11 position-absolute right-0 top-0 mr-3 mt-3"></i>
																</p>
																<span className="text-muted small">4 sec ago</span>
															</div>
														</a>
													</li>
													<li>
														<a href="#"
														   className="list-group-item d-flex hide-show-toggler">
															<div>
																<figure className="avatar mr-3">
																	<img src="../../assets/media/image/user/man_avatar4.jpg" className="rounded-circle" alt="avatar"/>
																</figure>
															</div>
															<div>
																<p className="mb-0">
																	<span
																		className="text-primary">Jonny Richie</span> uploaded
																	new
																	files
																	<i title="Mark as read" data-toggle="tooltip"
																	   className="hide-show-toggler-item fa fa-circle-o font-size-11 position-absolute right-0 top-0 mr-3 mt-3"></i>
																</p>
																<span className="text-muted small">20 min ago</span>
															</div>
														</a>
													</li>
													<li className="text-divider text-center small pb-2 px-3">
														<span>Old notifications</span>
													</li>
													<li>
														<a href="#"
														   className="list-group-item d-flex hide-show-toggler">
															<div>
																<figure className="avatar mr-3">
                                                        <span
	                                                        className="avatar-title bg-info-bright text-info rounded-circle">
                                                            <i className="fa fa-cloud-upload"></i>
                                                        </span>
																</figure>
															</div>
															<div className="flex-grow-1">
																<p className="mb-0">
																	Upgrade plan
																	<i title="Mark as unread" data-toggle="tooltip"
																	   className="hide-show-toggler-item fa fa-check font-size-11 position-absolute right-0 top-0 mr-3 mt-3"></i>
																</p>
																<span className="text-muted small">45 sec ago</span>
															</div>
														</a>
													</li>
													<li>
														<a href="#"
														   className="list-group-item d-flex hide-show-toggler">
															<div>
																<figure className="avatar mr-3">
                                                        <span
	                                                        className="avatar-title bg-success-bright text-success rounded-circle">
                                                            <i className="ti-share"></i>
                                                        </span>
																</figure>
															</div>
															<div className="flex-grow-1">
																<p className="mb-0">
																	A file has been shared
																	<i title="Mark as unread" data-toggle="tooltip"
																	   className="hide-show-toggler-item fa fa-check font-size-11 position-absolute right-0 top-0 mr-3 mt-3"></i>
																</p>
																<span className="text-muted small">58 sec ago</span>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div className="px-3 py-2 text-right border-top">
												<ul className="list-inline small">
													<li className="list-inline-item mb-0">
														<a href="#">Mark All Read</a>
													</li>
												</ul>
											</div>
										</div>
									</li>
									
									<li className="nav-item dropdown">
										<a href="#" className="nav-link" title="Settings"
										   data-sidebar-target="#settings">
											<i className="ti-settings"></i>
										</a>
									</li>
									
									<li className="nav-item dropdown">
										<a href="#" className="nav-link profile-nav-link dropdown-toggle"
										   title="User menu"
										   data-toggle="dropdown">
											<span className="mr-2 d-sm-inline d-none">Bony Gidden</span>
											<figure className="avatar avatar-sm">
												<img src="../../assets/media/image/user/man_avatar3.jpg" className="rounded-circle" alt="avatar"/>
											</figure>
										</a>
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
											<div className="text-center py-4"
											     data-background-image="../../assets/media/image/image1.jpg">
												<figure className="avatar avatar-lg mb-3 border-0">
													<img src="../../assets/media/image/user/man_avatar3.jpg"
													     className="rounded-circle" alt="image"/>
												</figure>
												<h5 className="mb-0">Bony Gidden</h5>
											</div>
											<div className="list-group list-group-flush">
												<a href="#" className="list-group-item"
												   data-sidebar-target="#settings">Settings</a>
												<a href="http://bifor.laborasyon.com/login"
												   className="list-group-item text-danger"
												   data-sidebar-target="#settings">Sign Out!</a>
											</div>
											<div className="pb-0 p-4">
												<div className="mb-4">
													<h6 className="d-flex justify-content-between">
														Completed Tasks
														<span className="float-right">%68</span>
													</h6>
													<div className="progress">
														<div className="progress-bar bg-primary" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						
						<ul className="navbar-nav ml-auto">
							<li className="nav-item header-toggler">
								<a href="#" className="nav-link">
									<i className="ti-arrow-down"></i>
								</a>
							</li>
							<li className="nav-item sidebar-toggler">
								<a href="#" className="nav-link">
									<i className="ti-cloud"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				
				<div className="content-wrapper">
					
					<div className="navigation">
						<div className="logo">
							<a>
								<img src="../../assets/media/image/logo.png" alt="logo"/>
							</a>
						</div>
						<ul>
							<li>
								<a>
									<i className="nav-link-icon ti-file"></i>
									<span className="nav-link-label">Files</span>
								</a>
							</li>
							<li>
								<a>
									<i className="nav-link-icon ti-pulse"></i>
									<span className="nav-link-label">URL</span>
								</a>
							</li>
							
							<li>
								<a>
									<i className="nav-link-icon ti-settings"></i>
									<span className="nav-link-label">Settings</span>
								</a>
							</li>
						</ul>
					</div>
					
					<div className="content-body">
						
						<div className="content">
							<div className="page-header">
								<h2>Search Result</h2>
							</div>
							<div className="dataTables_wrapper dt-bootstrap4">
								<div className="row">
									<div className="col-sm-12">
										<table id="example1"
										       className="table table-striped table-bordered dataTable dtr-inline"
										       role="grid" aria-describedby="example1_info">
											<thead>
											<tr role="row">
												<th className="sorting_asc" tabIndex="0" aria-controls="example1"
												    rowSpan="1" colSpan="1"  aria-sort="ascending"
												    aria-label="Name: activate to sort column descending">Name
												</th>
												<th className="sorting" tabIndex="0" aria-controls="example1"
												    rowSpan="1" colSpan="1"
												    aria-label="Position: activate to sort column ascending">Position
												</th>
												<th className="sorting" tabIndex="0" aria-controls="example1"
												    rowSpan="1" colSpan="1"
												    aria-label="Office: activate to sort column ascending">Office
												</th>
												<th className="sorting" tabIndex="0" aria-controls="example1"
												    rowSpan="1" colSpan="1"
												    aria-label="Age: activate to sort column ascending">Age
												</th>
												<th className="sorting" tabIndex="0" aria-controls="example1"
												    rowSpan="1" colSpan="1"
												    aria-label="Start date: activate to sort column ascending">Start
													date
												</th>
												<th className="sorting" tabIndex="0" aria-controls="example1"
												    rowSpan="1" colSpan="1"
												    aria-label="Salary: activate to sort column ascending">Salary
												</th>
											</tr>
											</thead>
											<tbody>
											
											
											<tr role="row" className="odd">
												<td tabIndex="0" className="sorting_1">Tiger Nixon</td>
												<td>System Architect</td>
												<td>Edinburgh</td>
												<td>61</td>
												<td>2011/04/25</td>
												<td>$320,800</td>
											</tr>
											<tr role="row" className="even">
												<td className="sorting_1" tabIndex="0">Timothy Mooney</td>
												<td>Office Manager</td>
												<td>London</td>
												<td>37</td>
												<td>2008/12/11</td>
												<td>$136,200</td>
											</tr>
											<tr role="row" className="odd">
												<td className="sorting_1" tabIndex="0">Unity Butler</td>
												<td>Marketing Designer</td>
												<td>San Francisco</td>
												<td>47</td>
												<td>2009/12/09</td>
												<td>$85,675</td>
											</tr>
											<tr role="row" className="even">
												<td className="sorting_1" tabIndex="0">Vivian Harrell</td>
												<td>Financial Controller</td>
												<td>San Francisco</td>
												<td>62</td>
												<td>2009/02/14</td>
												<td>$452,500</td>
											</tr>
											<tr role="row" className="odd">
												<td className="sorting_1" tabIndex="0">Yuri Berry</td>
												<td>Chief Marketing Officer (CMO)</td>
												<td>New York</td>
												<td>40</td>
												<td>2009/06/25</td>
												<td>$675,000</td>
											</tr>
											<tr role="row" className="even">
												<td className="sorting_1" tabIndex="0">Zenaida Frank</td>
												<td>Software Engineer</td>
												<td>New York</td>
												<td>63</td>
												<td>2010/01/04</td>
												<td>$125,250</td>
											</tr>
											<tr role="row" className="odd">
												<td className="sorting_1" tabIndex="0">Zorita Serrano</td>
												<td>Software Engineer</td>
												<td>San Francisco</td>
												<td>56</td>
												<td>2012/06/01</td>
												<td>$115,000</td>
											</tr>
											</tbody>
											<tfoot>
											<tr>
												<th rowSpan="1" colSpan="1">Name</th>
												<th rowSpan="1" colSpan="1">Position</th>
												<th rowSpan="1" colSpan="1">Office</th>
												<th rowSpan="1" colSpan="1">Age</th>
												<th rowSpan="1" colSpan="1">Start date</th>
												<th rowSpan="1" colSpan="1">Salary</th>
											</tr>
											</tfoot>
										</table>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-5">
										<div className="dataTables_info" id="example1_info" role="status"
										     aria-live="polite">Showing 51 to 57 of 57 entries
										</div>
									</div>
									<div className="col-sm-12 col-md-7">
										<div className="dataTables_paginate paging_simple_numbers"
										     id="example1_paginate">
											<ul className="pagination">
												<li className="paginate_button page-item previous"
												    id="example1_previous"><a href="#" aria-controls="example1"
												                              data-dt-idx="0" tabIndex="0"
												                              className="page-link">Previous</a></li>
												<li className="paginate_button page-item "><a href="#"
												                                              aria-controls="example1"
												                                              data-dt-idx="1"
												                                              tabIndex="0"
												                                              className="page-link">1</a>
												</li>
												<li className="paginate_button page-item "><a href="#"
												                                              aria-controls="example1"
												                                              data-dt-idx="2"
												                                              tabIndex="0"
												                                              className="page-link">2</a>
												</li>
												<li className="paginate_button page-item "><a href="#"
												                                              aria-controls="example1"
												                                              data-dt-idx="3"
												                                              tabIndex="0"
												                                              className="page-link">3</a>
												</li>
												<li className="paginate_button page-item "><a href="#"
												                                              aria-controls="example1"
												                                              data-dt-idx="4"
												                                              tabIndex="0"
												                                              className="page-link">4</a>
												</li>
												<li className="paginate_button page-item "><a href="#"
												                                              aria-controls="example1"
												                                              data-dt-idx="5"
												                                              tabIndex="0"
												                                              className="page-link">5</a>
												</li>
												<li className="paginate_button page-item active"><a href="#"
												                                                    aria-controls="example1"
												                                                    data-dt-idx="6"
												                                                    tabIndex="0"
												                                                    className="page-link">6</a>
												</li>
												<li className="paginate_button page-item next disabled"
												    id="example1_next"><a href="#" aria-controls="example1"
												                          data-dt-idx="7" tabIndex="0"
												                          className="page-link">Next</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							
						
						</div>
						
						<footer className="content-footer d-print-none">
							<div>© 2020 Filedash - <a href="http://laborasyon.com" target="_blank">Laborasyon</a></div>
							<div>
								<nav className="nav">
									<a href="https://themeforest.net/licenses/standard"
									   className="nav-link">Licenses</a>
									<a href="#" className="nav-link">Change Log</a>
									<a href="#" className="nav-link">Get Help</a>
								</nav>
							</div>
						</footer>
						
					</div>
					
					
					
					<div className="sidebar-group d-print-none">
						
						<div className="sidebar primary-sidebar show" id="storage">
							<div className="sidebar-header">
								<h4>Storage Overview</h4>
							</div>
							<div className="sidebar-content">
								<div id="justgage_five" className="mb-3"></div>
								<div>
									<div className="list-group list-group-flush mb-3">
										<a href="#" className="list-group-item px-0 d-flex align-items-center">
											<div className="mr-3">
												<figure className="avatar">
                                        <span className="avatar-title bg-primary-bright text-primary rounded">
                                            <i className="ti-image"></i>
                                        </span>
												</figure>
											</div>
											<div className="flex-grow-1">
												<p className="mb-0">Images</p>
												<span className="small text-muted">259 Files</span>
											</div>
											<div>
												<h5 className="text-primary">15.7 GB</h5>
											</div>
										</a>
										<a href="#" className="list-group-item px-0 d-flex align-items-center">
											<div className="mr-3">
												<figure className="avatar">
                                        <span className="avatar-title bg-primary-bright text-primary rounded">
                                            <i className="ti-control-play"></i>
                                        </span>
												</figure>
											</div>
											<div className="flex-grow-1">
												<p className="mb-0">Videos</p>
												<span className="small text-muted">8 Files</span>
											</div>
											<div>
												<h5 className="text-primary">20 GB</h5>
											</div>
										</a>
										<a href="#" className="list-group-item px-0 d-flex align-items-center">
											<div className="mr-3">
												<figure className="avatar">
                                        <span className="avatar-title bg-primary-bright text-primary rounded">
                                            <i className="ti-files"></i>
                                        </span>
												</figure>
											</div>
											<div className="flex-grow-1">
												<p className="mb-0">Documents</p>
												<span className="small text-muted">46 Files</span>
											</div>
											<div>
												<h5 className="text-primary">10.5 GB</h5>
											</div>
										</a>
										<a href="#" className="list-group-item px-0 d-flex align-items-center">
											<div className="mr-3">
												<figure className="avatar">
                                        <span className="avatar-title bg-primary-bright text-primary rounded">
                                            <i className="ti-file"></i>
                                        </span>
												</figure>
											</div>
											<div className="flex-grow-1">
												<p className="mb-0">Other Files</p>
												<span className="small text-muted">50 Files</span>
											</div>
											<div>
												<h5 className="text-primary">2.8 GB</h5>
											</div>
										</a>
									</div>
								</div>
								<div className="card border shadow-none">
									<div className="card-body text-center">
										<img className="img-fluid mb-3" src="../../assets/media/svg/upgrade.svg"
										     alt="upgrade"/>
											<h5>Get an Upgrade</h5>
											<p className="text-muted">Get additional 500 GB space for your documents and
												files. Unlock now
												for more space.</p>
											<button className="btn btn-primary">Upgrade</button>
									</div>
								</div>
							</div>
							<div className="sidebar-footer">
								<button className="btn btn-lg btn-block btn-outline-primary">
									<i className="fa fa-cloud-upload mr-3"></i> Upload
								</button>
							</div>
						</div>
						
						<div className="sidebar" id="view-detail">
							<div className="sidebar-header">
								<h4>View Detail</h4>
								<a href="#" className="btn btn-light btn-floating sidebar-close-btn">
									<i className="ti-angle-right"></i>
								</a>
							</div>
							<div className="sidebar-content">
								<figure className="avatar mb-4">
                        <span className="avatar-title bg-info-bright text-info rounded-pill">
                            <i className="ti-file"></i>
                        </span>
								</figure>
								<div className="row mb-3">
									<div className="col-md-5">File name:</div>
									<div className="col-md-7"><a href="#" className="link-1">Meeting-notes.doc</a></div>
								</div>
								<div className="row mb-3">
									<div className="col-md-5">File type:</div>
									<div className="col-md-7">Word File</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-5">File size:</div>
									<div className="col-md-7">22 KB</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-5">Created:</div>
									<div className="col-md-7">Monday, July 02, 2020 9:34am</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-5">Modified:</div>
									<div className="col-md-7 text-success">Monday, July 02, 2020 9:34am</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-5">Accessed:</div>
									<div className="col-md-7">Monday, July 03, 2020 10:22am</div>
								</div>
							</div>
							<div className="sidebar-footer">
								<button className="btn btn-lg btn-block btn-primary">
									<i className="ti-share mr-3"></i> Share
								</button>
							</div>
						</div>
						
						<div className="sidebar" id="settings">
							<div className="sidebar-header">
								<h4>Settings</h4>
								<a href="#" className="btn btn-light btn-floating sidebar-close-btn">
									<i className="ti-angle-right"></i>
								</a>
							</div>
							<div className="sidebar-content">
								<ul className="list-group list-group-flush">
									<li className="list-group-item pl-0 pr-0">
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input" id="customSwitch1" checked/>
												<label className="custom-control-label" htmlFor="customSwitch1">Allow
													notifications.</label>
										</div>
									</li>
									<li className="list-group-item pl-0 pr-0">
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input" id="customSwitch2"/>
												<label className="custom-control-label" htmlFor="customSwitch2">Hide
													user requests</label>
										</div>
									</li>
									<li className="list-group-item pl-0 pr-0">
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input" id="customSwitch3"
											       checked/>
												<label className="custom-control-label" htmlFor="customSwitch3">Speed up
													demands</label>
										</div>
									</li>
									<li className="list-group-item pl-0 pr-0">
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input" id="customSwitch4"
											       checked/>
												<label className="custom-control-label" htmlFor="customSwitch4">Hide
													menus</label>
										</div>
									</li>
									<li className="list-group-item pl-0 pr-0">
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input" id="customSwitch5"/>
												<label className="custom-control-label" htmlFor="customSwitch5">Remember
													next visits</label>
										</div>
									</li>
									<li className="list-group-item pl-0 pr-0">
										<div className="custom-control custom-switch">
											<input type="checkbox" className="custom-control-input" id="customSwitch6"/>
												<label className="custom-control-label" htmlFor="customSwitch6">Enable
													report
													generation.</label>
										</div>
									</li>
								</ul>
							</div>
						</div>
						
					</div>
					
				</div>
				
			</div>
		)
	}
	
} 