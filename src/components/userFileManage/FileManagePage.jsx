import React, {Component} from "react"
import {withRouter} from "react-router-dom";
import LeftNavigation from "./LeftNavigation";
import FileDirectory from "./FileDirectory";
import RightNavigation from "./RightNavigation";
import TopHeader from "./TopHeader";
import {loadUserInfo} from "../Cookies/Cookies";

class FileManagePage extends Component{
	constructor(props) {
		super(props);
		this.state={
			userName:null,
			userID:null,
		}
	}
	componentWillMount() {
		const userInfo = loadUserInfo();
		this.setState({
			userName:userInfo.userName,
			userID:userInfo.userID,
		})
	}
	render() {
		return(
			<div>
				<div className="layout-wrapper">
					{/*---------------------头像显示区域--------------------------*/}
					<TopHeader userName={this.state.userName} userID={this.state.userID} history = {this.props.history}/>
					{/*---------------------------------------------------------*/}

					<div className="content-wrapper">

						{/*-----------------------侧边栏-------------------------*/}
						<LeftNavigation history = {this.props.history}/>
						{/*----------------------侧边栏end-----------------------*/}
						
						<div className="content-body">
							{/*-----------------------文件夹--------------------------*/}
							<FileDirectory userID={this.state.userID}/>
							{/*----------------------文件夹end-------------------------*/}
							<footer className="content-footer d-print-none">
								<div>© 2020 Filedash - Laborasyon</div>
							</footer>
						</div>
						{/*---------------------------右侧存储空间-----------------------------*/}
						<RightNavigation userID = {this.state.userID}
										 userName = {this.state.userName}
										 history={this.props.history}/>
						{/*---------------------------右侧存储空间end-----------------------------*/}
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(FileManagePage);