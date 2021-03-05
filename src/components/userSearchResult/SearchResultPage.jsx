import React, {Component} from "react";
import RightNavigation from "../userFileManage/RightNavigation";
import LeftNavigation from "../userFileManage/LeftNavigation";
import {loadSearchInfo, loadUserInfo} from "../Cookies/Cookies";
import SearchTopHeader from './SearchTopHeader'
import axios from "axios";

export default class SearchResultPage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userID:null,
			userName:null,
			inputSearch:null,
		}
	}
	componentWillMount() {
		const userInfo = loadUserInfo();
		const searchInfo = loadSearchInfo();
		this.setState({
			userID:userInfo.userID,
			userName:userInfo.userName,
			inputSearch:searchInfo.inputSearch,
		})
	}



	render() {
		return (
			<div className="layout-wrapper">
				{/*-----------------------顶栏-------------------------*/}
				<SearchTopHeader userName={this.state.userName} userID={this.state.userID} history={this.props.history}/>
				{/*---------------------------------------------------*/}

				<div className="content-wrapper">

					{/*------------------------左侧侧边栏----------------------------*/}
					<LeftNavigation history={this.props.history}/>
					{/*------------------------------------------------------------*/}

					<div className="content-body">

						<div className="content">
							<div className="page-header">
								<h2>Search Result</h2>
							</div>
							<div className="dataTables_wrapper dt-bootstrap4">
								<div className="row">
									<div className="col-sm-12">
										<table className="table table-borderless table-hover">
											<thead>
											<tr role="row">
												<th hidden={true}>fileId</th>
												<th >Index</th>
												<th>File Name</th>
												<th>Upload Date</th>
												<th>Options</th>
											</tr>
											</thead>
											<SearchResultTable userID={this.state.userID} searchInfo={this.state.inputSearch}/>
											{/*<tbody>
											<tr role="row" className="odd">
												<td tabIndex="0" className="sorting_1">Tiger Nixon</td>
												<td>System Architect</td>
												<td>Edinburgh</td>
												<td>61</td>
											</tr>
											</tbody>*/}
										</table>
									</div>
								</div>
								{/*<div className="row">
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
								</div>*/}
							</div>

						</div>

						<footer className="content-footer d-print-none">
							<div>© 2020 Filedash - Laborasyon</div>
						</footer>

					</div>

					{/*-------------------------右侧侧边栏----------------------------*/}
					<RightNavigation userID={this.state.userID}
									 userName={this.state.userName}
									 history={this.props.history}/>
					{/*-------------------------------------------------------------*/}

				</div>

			</div>
		);
	}
}

class SearchResultTable extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userID:this.props.userID,
			searchInfo:this.props.searchInfo,
			listSearchResult:[],
		}
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleDownloadClick = this.handleDownloadClick.bind(this);
	}

	componentWillMount() {
		axios.post('http://192.168.43.178:8080/file/selectByKeyword?userID=' + this.state.userID + '&keyword=' + this.state.searchInfo)
			.then((response)=>{
				this.setState({
					listSearchResult:response.data,
				})
			})
	}
	handleDeleteClick(e){
		let tr = e.nativeEvent.target.parentNode.parentNode.parentNode;
		axios.post("http://192.168.43.178:8080/file/delete?userId=" + this.state.userID + '&' + 'filename=' + tr.id);
		window.location.reload(true);
	}
	handleDownloadClick(e){
		let tr = e.nativeEvent.target.parentNode.parentNode.parentNode;
		window.location.href="http://192.168.43.178:8080/file/download?filename=" + tr.id + '&userId=' + this.state.userID;
	}

	render() {
		return (
			<tbody>
			{
				this.state.listSearchResult.map((listFile,key)=>{
					console.log(this.state.listSearchResult);
					return(
						<tr id={listFile.fileName} role="row" className="odd">
							<th hidden={true}>{listFile.fileId}</th>
							<th>{key+1}</th>
							<th>{listFile.fileName}</th>
							<th>{listFile.createDate}</th>
							<th>
								<button className={"btn btn-sm btn-rounded"} onClick={this.handleDeleteClick}>
									<i className="ti-trash"></i>
								</button>
								|
								<button className={"btn btn-sm btn-rounded"} onClick={this.handleDownloadClick}>
									<i className={"fa fa-download"}></i>
								</button>
							</th>
						</tr>
					)
				})

			}
			</tbody>
		);
	}
}