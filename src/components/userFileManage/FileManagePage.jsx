import React, {Component} from "react"

export default class FileManagePage extends Component{
	
	render() {
		return(
			
			<div id="wrapper">
					<nav className="navbar-default navbar-static-side animated fadeIn" role="navigation" style={{height:"100vh"}}>
						<div className="sidebar-collapse">
							<ul className="nav " id="side-menu">
								<li className="nav-header">
									<div className="dropdown profile-element">
	                        <span>
                                <img alt="image" className="img-circle" src="img/img-a.jpg" style={{width:"50px", height:"50px"}}/>
                             </span>
										<a data-toggle="dropdown" className="dropdown-toggle">
                                <span className="clear">
                                    <span className="block m-t-xs"> <strong className="font-bold">{this.props.userID}</strong>
                                    </span>
                                <span className="text-muted text-xs block">普通用户<b className="caret"></b></span>
                            </span>
										</a>
										<ul className="dropdown-menu animated fadeInRight m-t-xs">
											<li><a >文件管理</a></li>
											<li><a >修改密码</a></li>
											<li className="divider"></li>
											<li><a>登出</a></li>
										</ul>
									</div>
									<div className="logo-element">
										IN+
									</div>
								</li>
								
								
								<li>
									<a><i className="fa fa-edit"></i> <span className="nav-label">个人中心</span><span className="fa arrow"></span></a>
								</li>
							</ul>
						</div>
					</nav>
					
					<div id="page-wrapper" className="gray-bg">
						
						<div className="row border-bottom">
							<nav className="navbar navbar-static-top  " role="navigation">
								<div className="navbar-header">
									<a className="navbar-minimalize minimalize-styl-2 btn btn-primary "><i className="fa fa-bars"></i> </a>
									<form role="search" className="navbar-form-custom">
										<div className="form-group">
											<input type="text" placeholder="在你所有的文件中搜索..." className="form-control" name="top-search" id="top-search"/>
										</div>
									</form>
								</div>
								<ul className="nav navbar-top-links navbar-right">
									<li>
										<span className="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
									</li>
									<li className="dropdown">
										
										<ul className="dropdown-menu dropdown-messages">
											<li>
												<div className="dropdown-messages-box">
													<a  className="pull-left">
														<img alt="image" className="img-circle" src="img/a7.jpg"/>
													</a>
													<div className="media-body">
														<small className="pull-right">46h ago</small>
														<strong>Mike Loreipsum</strong> started following <strong>Monica
														Smith</strong>. <br/>
														<small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
													</div>
												</div>
											</li>
											<li className="divider"></li>
											<li>
												<div className="dropdown-messages-box">
													<a className="pull-left">
														<img alt="image" className="img-circle" src="img/a4.jpg"/>
													</a>
													<div className="media-body ">
														<small className="pull-right text-navy">5h ago</small>
														<strong>Chris Johnatan Overtunk</strong> started
														following <strong>Monica Smith</strong>. <br/>
														<small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
													</div>
												</div>
											</li>
											<li className="divider"></li>
										</ul>
									</li>
									<li>
										<a>
											<i className="fa fa-sign-out"></i> 登出
										</a>
									</li>
								</ul>
							
							</nav>
						</div>
						
						<div className="row wrapper border-bottom white-bg page-heading">
							<div className="col-lg-9">
								<h2>文件管理</h2>
								<ol className="breadcrumb">
									<li>
										<a >个人中心</a>
									</li>
									<li className="active">
										<strong>文件管理</strong>
									</li>
								</ol>
							</div>
						</div>
						<div className="wrapper wrapper-content">
							<div className="row">
								<div className="col-lg-3">
									<div className="ibox float-e-margins">
										<div className="ibox-content">
											<div className="file-manager">
												<h5>上传:</h5>
												<div className="hr-line-dashed"></div>
												<button className="btn btn-primary btn-block">上传文件
												</button>
												<div className="hr-line-dashed"></div>
												<h5>文件列表</h5>
												<ul className="folder-list">
													<li><a><i className="fa fa-folder"></i> Files</a></li>
													<li><a><i className="fa fa-folder"></i> Pictures</a></li>
													<li><a><i className="fa fa-folder"></i> Web pages</a></li>
													<li><a><i className="fa fa-folder"></i> Illustrations</a></li>
													<li><a><i className="fa fa-folder"></i> Films</a></li>
													<li><a><i className="fa fa-folder"></i> Books</a></li>
												</ul>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-lg-9 animated fadeInRight">
									<div className="row">
										<div className="col-lg-12">
											<form className="form-inline">
												<div className="form-group file-box">
													<div className="file">
														<a>
															<span className="corner"></span>
															<div className="icon">
																<i className="fa fa-music"></i>
															</div>
															<div className="file-name">
																Michal Jackson.mp3
																<br/>
																<small>
																	<a><i className="fa fa-arrow-circle-down"></i>下载</a>
																	<a><i className="fa fa-trash-o"></i> 删除</a>
																</small>
															</div>
														</a>
													</div>
												</div>
												<div className="form-group file-box">
													<div className="file">
														<a href="file_manager.html#">
															<span className="corner"></span>
															<div className="icon">
																<i className="img-responsive fa fa-film"></i>
															</div>
															<div className="file-name">
																Monica's birthday.mp4
																<br/>
																<small>
																	<a><i className="fa fa-arrow-circle-down"></i>下载</a>
																	<a><i className="fa fa-trash-o"></i> 删除</a>
																</small>
															</div>
														</a>
													</div>
												</div>
												<div className="form-group file-box">
													<a>
														<div className="file">
															<span className="corner"></span>
															<div className="icon">
																<i className="fa fa-bar-chart-o"></i>
															</div>
															<div className="file-name">
																Annual report 2014.xls
																<br/>
																<small>
																	<a><i className="fa fa-arrow-circle-down"></i>下载</a>
																	<a><i className="fa fa-trash-o"></i> 删除</a>
																</small>
															</div>
														</div>
													</a>
												</div>
												<div className="form-group file-box">
													<div className="file">
														<a>
															<span className="corner"></span>
															
															<div className="icon">
																<i className="fa fa-file"></i>
															</div>
															<div className="file-name">
																Document_2014.doc
																<br/>
																<small>
																	<a><i className="fa fa-arrow-circle-down"></i>下载</a>
																	<a><i className="fa fa-trash-o"></i> 删除</a>
																</small>
															</div>
														</a>
													</div>
												
												</div>
												
												
												<div className="form-group file-box">
													<div className="file">
														<a>
															<span className="corner"></span>
															
															<div className="image">
																<img alt="image" className="img-responsive" src="img/p1.jpg"/>
															</div>
															<div className="file-name">
																Italy street.jpg
																<br/>
																<small>
																	<a><i className="fa fa-arrow-circle-down"></i>下载</a>
																	<a><i className="fa fa-trash-o"></i> 删除</a>
																</small>
															</div>
														</a>
													
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="footer">
							<div className="pull-right">
								10GB of <strong>250GB</strong> Free.
							</div>
						</div>
					</div>
				</div>
			
		)
	}
} 