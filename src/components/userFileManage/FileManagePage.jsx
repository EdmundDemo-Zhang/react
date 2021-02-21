import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FileManagePage extends Component{
	
	render() {
		return(
			<div>
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
													<img src="./assets/media/image/user/man_avatar3.jpg"
													     className="rounded-circle"
													     alt="avatar"/>
												</figure>
											</a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
												<div className="text-center py-4"
												     data-background-image="assets/media/image/image1.jpg">
													<figure className="avatar avatar-lg mb-3 border-0">
														<img src="./assets/media/image/user/man_avatar3.jpg" className="rounded-circle" alt="image"/>
													</figure>
													<h5 className="mb-0">Bony Gidden</h5>
												</div>
												<div className="list-group list-group-flush">
													<a href="#" className="list-group-item"
													   data-sidebar-target="#settings">Settings</a>
													<a href="" className="list-group-item text-danger"
													   data-sidebar-target="#settings">Sign Out!</a>
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
								<a >
									<img src="assets/media/image/logo.png" alt="logo"/>
								</a>
							</div>
							<ul>
								<li>
									<a className="active">
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
								<div className="page-header d-flex justify-content-between">
									<h2>Files</h2>
									<a href="#" className="files-toggler">
										<i className="ti-menu"></i>
									</a>
								</div>
								
								<div className="row">
									<div className="col-xl-3 files-sidebar">
										<div className="card border-0">
											<h6 className="card-title">My Folders</h6>
											<div id="files"></div>
										</div>
									</div>
									<div className="col-xl-9">
										<div className="content-title mt-0">
											<h4>Documents</h4>
										</div>
										<div className="d-md-flex justify-content-between mb-4">
											<ul className="list-inline mb-3">
												<li className="list-inline-item mb-0">
													<a href="#" className="btn btn-outline-light dropdown-toggle"
													   data-toggle="dropdown">
														Add
													</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">New Folder</a>
														<a className="dropdown-item" href="#">New File</a>
													</div>
												</li>
												<li className="list-inline-item mb-0">
													<a href="#" className="btn btn-outline-light dropdown-toggle"
													   data-toggle="dropdown">
														Tags
													</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">Public</a>
														<a className="dropdown-item" href="#">Project</a>
														<a className="dropdown-item" href="#">Software</a>
														<a className="dropdown-item" href="#">Social Media</a>
														<a className="dropdown-item" href="#">Design</a>
													</div>
												</li>
												<li className="list-inline-item mb-0">
													<a href="#" className="btn btn-outline-light dropdown-toggle"
													   data-toggle="dropdown">
														Sort
													</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">Ascending</a>
														<a className="dropdown-item" href="#">Descending</a>
													</div>
												</li>
											</ul>
											<div id="file-actions" className="d-none">
												<ul className="list-inline">
													<li className="list-inline-item mb-0">
														<a href="#" className="btn btn-outline-light" data-toggle="tooltip"
														   title="Move">
															<i className="ti-arrow-top-right"></i>
														</a>
													</li>
													<li className="list-inline-item mb-0">
														<a href="#" className="btn btn-outline-light" data-toggle="tooltip"
														   title="Download">
															<i className="ti-download"></i>
														</a>
													</li>
													<li className="list-inline-item mb-0">
														<a href="#" className="btn btn-outline-danger" data-toggle="tooltip"
														   title="Delete">
															<i className="ti-trash"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="table-responsive">
											<table id="table-files" className="table table-borderless table-hover">
												<thead>
												<tr>
													<th>
														<div className="custom-control custom-checkbox">
															<input type="checkbox" className="custom-control-input" id="files-select-all"/>
															<label className="custom-control-label" htmlFor="files-select-all"></label>
														</div>
													</th>
													<th>Name</th>
													<th>Modified</th>
													<th>Label</th>
													<th>Members</th>
													<th></th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                    <span className="avatar-title bg-warning text-black-50 rounded-pill">
                                        <i className="ti-folder"></i>
                                    </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">Design Thinking Project</span>
                                    <span className="small font-italic">550 KB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-info-bright text-info">Design</div>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg" className="rounded-circle" alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Jo Hugill"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar1.jpg" className="rounded-circle" alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Cullie Philcott"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar5.jpg" className="rounded-circle" alt="image"/>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                    <span className="avatar-title bg-warning text-black-50 rounded-pill">
                                        <i className="ti-folder"></i>
                                    </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">User Research</span>
                                    <span className="small font-italic">250 KB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg" className="rounded-circle" alt="image"/>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                    <span className="avatar-title bg-warning text-black-50 rounded-pill">
                                        <i className="ti-folder"></i>
                                    </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">Important Documents</span>
                                    <span className="small font-italic">590 KB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                    <span className="avatar-title rounded-pill">
                                        <i className="ti-file"></i>
                                    </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">Meeting-notes.doc</span>
                                    <span className="small font-italic">139KB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-primary-bright text-primary">Public</div>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Mella Mixter"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar1.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title=""
															        data-toggle="tooltip"
															        data-original-title="Cullie Philcott">
															<span
																className="avatar-title bg-primary rounded-circle">+ 5</span>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                            <span className="avatar-title rounded-pill">
                                                <i className="ti-file"></i>
                                            </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">composer.json</span>
                                    <span className="small font-italic">55 KB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-primary-bright text-primary">Public</div>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Mella Mixter"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar1.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Jo Hugill"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar1.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Cullie Philcott"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title=""
															        data-toggle="tooltip"
															        data-original-title="Cullie Philcott">
															<span
																className="avatar-title bg-primary rounded-circle">+ 5</span>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                            <span className="avatar-title rounded-pill">
                                                <i className="ti-folder"></i>
                                            </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">error_log.txt</span>
                                    <span className="small font-italic">2MB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-warning-bright text-warning">Project</div>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                            <span className="avatar-title rounded-pill">
                                                <i className="ti-folder"></i>
                                            </span>
															</figure>
															<span className="d-flex flex-column">
                                    <span className="text-primary">package.json</span>
                                    <span className="small font-italic">5 KB</span>
                                </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-warning-bright text-warning">Project</div>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                            <span className="avatar-title rounded-pill">
                                                <i className="ti-image"></i>
                                            </span>
															</figure>
															<span className="d-flex flex-column">
                                            <span className="text-primary">Sitemap.png</span>
                                            <span className="small font-italic">810KB</span>
                                        </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-success-bright text-success">Social Media
														</div>
													</td>
													<td>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                            <span className="avatar-title rounded-pill">
                                                <i className="ti-file"></i>
                                            </span>
															</figure>
															<span className="d-flex flex-column">
                                            <span className="text-primary">Analytics.pdf</span>
                                            <span className="small font-italic">10KB</span>
                                        </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-info-bright text-info">Design</div>
													</td>
													<td>
														<div className="avatar-group">
															<figure className="avatar avatar-sm" title="Lisle Essam"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar2.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Baxie Roseblade"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/man_avatar5.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Mella Mixter"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar1.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
															<figure className="avatar avatar-sm" title="Mella Mixter"
															        data-toggle="tooltip">
																<img src="assets/media/image/user/women_avatar4.jpg"
																     className="rounded-circle"
																     alt="image"/>
															</figure>
														</div>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td></td>
													<td>
														<a href="#" className="d-flex align-items-center">
															<figure className="avatar avatar-sm mr-3">
                                            <span className="avatar-title rounded-pill">
                                                <i className="ti-file"></i>
                                            </span>
															</figure>
															<span className="d-flex flex-column">
                                            <span className="text-primary">Task-list.txt</span>
                                            <span className="small font-italic">12 KB</span>
                                        </span>
														</a>
													</td>
													<td>3/9/19, 2:40PM</td>
													<td>
														<div className="badge bg-info-bright text-info">Design</div>
													</td>
													<td>
													</td>
													<td className="text-right">
														<div className="dropdown">
															<a href="#" className="btn btn-floating" data-toggle="dropdown">
																<i className="ti-more-alt"></i>
															</a>
															<div className="dropdown-menu dropdown-menu-right">
																<a href="#" className="dropdown-item"
																   data-sidebar-target="#view-detail">View
																	Details</a>
																<a href="#" className="dropdown-item">Share</a>
																<a href="#" className="dropdown-item">Download</a>
																<a href="#" className="dropdown-item">Copy to</a>
																<a href="#" className="dropdown-item">Move to</a>
																<a href="#" className="dropdown-item">Rename</a>
																<a href="#" className="dropdown-item">Delete</a>
															</div>
														</div>
													</td>
												</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								
								<div className="modal fade" id="newTaskModal" tabIndex="-1" role="dialog"
								     aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title">New Task</h5>
												<button type="button" className="close" data-dismiss="modal"
												        aria-label="Close">
													<i className="ti-close"></i>
												</button>
											</div>
											<div className="modal-body">
												<form autoComplete="off">
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Task title</label>
														<div className="col-sm-9">
															<input type="text" className="form-control"/>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Tags</label>
														<div className="col-sm-9">
															<select className="js-example-basic-single" multiple>
																<option value="Theme Support">Theme Support</option>
																<option value="Freelance">Freelance</option>
																<option selected value="Social">Social</option>
																<option selected value="Friends">Friends</option>
																<option value="Coding">Coding</option>
															</select>
														</div>
													</div>
													<div className="form-group row row-sm">
														<label className="col-sm-3 col-form-label">Deadline</label>
														<div className="col-sm-5">
															<input type="text"
															       className="form-control create-event-datepicker"
															       placeholder="Date"/>
														</div>
														<div className="col-sm-4">
															<input type="text" className="form-control create-event-demo"
															       placeholder="Time"/>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Participate</label>
														<div className="col-sm-9">
															<div className="avatar-group">
																<figure className="avatar avatar-sm">
																	<img src="assets/media/image/user/women_avatar3.jpg"
																	     className="rounded-circle"
																	     alt="image"/>
																</figure>
																<figure className="avatar avatar-sm">
																<span
																	className="avatar-title bg-danger rounded-circle">S</span>
																</figure>
																<figure className="avatar avatar-sm">
																	<img src="assets/media/image/user/women_avatar5.jpg"
																	     className="rounded-circle"
																	     alt="image"/>
																</figure>
															</div>
															<button type="button"
															        className="btn btn-outline-light btn-sm btn-floating"
															        title="Add User"
															        data-toggle="dropdown">
																<i className="ti-plus"></i>
															</button>
															<div className="dropdown-menu p-0">
																<div className="p-3">
																	<h6 className="text-uppercase font-size-11 mb-3">Add
																		User</h6>
																	<div className="input-group input-group-sm">
																		<input type="text" className="form-control" placeholder="Search User" aria-describedby="button-addon2"/>
																		<div className="input-group-append">
																			<button className="btn btn-outline-light"
																			        type="button" id="button-addon2">
																				<i className="ti-search"></i>
																			</button>
																		</div>
																	</div>
																	<ul className="list-group list-group-flush mt-2">
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																				<span
																					className="avatar-title bg-primary rounded-circle">V</span>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																					<img
																						src="assets/media/image/user/women_avatar3.jpg" className="rounded-circle" alt="image"/>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																					<img src="assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="image"/>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm ml-3"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																					<img src="assets/media/image/user/man_avatar2.jpg" className="rounded-circle" alt="image"/>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm ml-3"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Description</label>
														<div className="col-sm-9">
															<textarea className="form-control" rows="6"></textarea>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3"></label>
														<div className="col-sm-9">
															<button type="submit" className="btn btn-primary">Create
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								
								<div className="modal fade" id="editTaskModal" tabIndex="-1" role="dialog"
								     aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title">Edit Task</h5>
												<button type="button" className="close" data-dismiss="modal"
												        aria-label="Close">
													<i className="ti-close"></i>
												</button>
											</div>
											<div className="modal-body">
												<form autoComplete="off">
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Task title</label>
														<div className="col-sm-9">
															<input type="text" className="form-control" placeholder="Title"
															       value="Draw design and presentation for customers."/>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Tags</label>
														<div className="col-sm-9">
															<select className="js-example-basic-single" multiple>
																<option selected value="Theme Support">Theme Support
																</option>
																<option value="Freelance">Freelance</option>
																<option value="Social">Social</option>
																<option value="Friends">Friends</option>
																<option value="Coding">Coding</option>
															</select>
														</div>
													</div>
													<div className="form-group row row-sm">
														<label className="col-sm-3 col-form-label">Deadline</label>
														<div className="col-sm-5">
															<input type="text"
															       className="form-control create-event-datepicker"
															       placeholder="Date" value="10/31/2019"/>
														</div>
														<div className="col-sm-4">
															<input type="text" className="form-control create-event-demo"
															       value="11:57"
															       placeholder="Time"/>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Participate</label>
														<div className="col-sm-9">
															<div className="avatar-group">
																<figure className="avatar avatar-sm">
																	<img src="assets/media/image/user/women_avatar3.jpg"
																	     className="rounded-circle"
																	     alt="image"/>
																</figure>
																<figure className="avatar avatar-sm">
																<span
																	className="avatar-title bg-danger rounded-circle">S</span>
																</figure>
																<figure className="avatar avatar-sm">
																	<img src="assets/media/image/user/women_avatar5.jpg"
																	     className="rounded-circle"
																	     alt="image"/>
																</figure>
															</div>
															<button type="button"
															        className="btn btn-outline-light btn-sm btn-floating"
															        title="Add User"
															        data-toggle="dropdown">
																<i className="ti-plus"></i>
															</button>
															<div className="dropdown-menu p-0">
																<div className="p-3">
																	<h6 className="text-uppercase font-size-11 mb-3">Add
																		User</h6>
																	<div className="input-group input-group-sm">
																		<input type="text" className="form-control"
																		       placeholder="Search User"
																		       aria-describedby="button-addon3"/>
																		<div className="input-group-append">
																			<button className="btn btn-outline-light"
																			        type="button" id="button-addon3">
																				<i className="ti-search"></i>
																			</button>
																		</div>
																	</div>
																	<ul className="list-group list-group-flush mt-2">
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																				<span
																					className="avatar-title bg-primary rounded-circle">V</span>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																					<img
																						src="assets/media/image/user/women_avatar3.jpg"
																						className="rounded-circle"
																						alt="image"/>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																					<img
																						src="assets/media/image/user/women_avatar2.jpg"
																						className="rounded-circle"
																						alt="image"/>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm ml-3"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																		<li className="list-group-item d-flex align-items-center pl-0 pr-0">
																			<div className="mr-2">
																				<figure className="avatar avatar-sm">
																					<img
																						src="assets/media/image/user/man_avatar2.jpg"
																						className="rounded-circle"
																						alt="image"/>
																				</figure>
																			</div>
																			<div>
																				<h6 className="mb-0">Valentine Maton</h6>
																			</div>
																			<div className="dropdown ml-auto">
																				<a href="#" data-toggle="dropdown"
																				   className="btn btn-outline-light btn-sm ml-3"
																				   aria-haspopup="true"
																				   aria-expanded="false">
																					<i data-feather="plus"></i>
																				</a>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3 col-form-label">Description</label>
														<div className="col-sm-9">
															<textarea className="form-control" rows="6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis incidunt labore modi numquam omnis pariatur possimus suscipit vitae voluptas?</textarea>
														</div>
													</div>
													<div className="form-group row">
														<label className="col-sm-3"></label>
														<div className="col-sm-9">
															<button type="submit" className="btn btn-success">
																<i data-feather="check" className="mr-2"></i>
																Save
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							
							</div>
							
							<footer className="content-footer d-print-none">
								<div>© 2020 Filedash - <a href="" target="_blank">Laborasyon</a></div>
								<div>
									<nav className="nav">
										<a href="http://www.bootstrapmb.com" className="nav-link">Licenses</a>
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
								</div>
								<div className="sidebar-footer">
									<form>
										<div><input className="btn btn-lg btn-block btn-outline-primary" type="submit" value="Upload"/></div>
									</form>
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
												<label className="custom-control-label" htmlFor="customSwitch1">Allow notifications.</label>
											</div>
										</li>
										<li className="list-group-item pl-0 pr-0">
											<div className="custom-control custom-switch">
												<input type="checkbox" className="custom-control-input" id="customSwitch2"/>
												<label className="custom-control-label" htmlFor="customSwitch2">Hide user requests</label>
											</div>
										</li>
										<li className="list-group-item pl-0 pr-0">
											<div className="custom-control custom-switch">
												<input type="checkbox" className="custom-control-input" id="customSwitch3" checked />
												<label className="custom-control-label" htmlFor="customSwitch3">Speed up demands</label>
											</div>
										</li>
										<li className="list-group-item pl-0 pr-0">
											<div className="custom-control custom-switch">
												<input type="checkbox" className="custom-control-input" id="customSwitch4" checked/>
												<label className="custom-control-label" htmlFor="customSwitch4">Hide menus</label>
											</div>
										</li>
										<li className="list-group-item pl-0 pr-0">
											<div className="custom-control custom-switch">
												<input type="checkbox" className="custom-control-input" id="customSwitch5"/>
												<label className="custom-control-label" htmlFor="customSwitch5">Remember next visits</label>
											</div>
										</li>
										<li className="list-group-item pl-0 pr-0">
											<div className="custom-control custom-switch">
												<input type="checkbox" className="custom-control-input" id="customSwitch6"/>
												<label className="custom-control-label" htmlFor="customSwitch6">Enable report generation.</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					
					</div>
				
				</div>
			</div>
		)
	}
} 