import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "../userLogin/LoginPage";
import RegisterPage from "../userRegister/RegisterPage";
import ChangePasswordPage from "../userChangePassword/ChangePasswordPage";
import FileManagePage from "../userFileManage/FileManagePage";
import SearchResultPage from "../userSearchResult/SearchResultPage";
import FileUploadPage from "../userFileUpload/FileUploadPage";


export default class RouterIndex extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userID: null,
		}
		this.getUserIDFromLogin = this.getUserIDFromLogin.bind(this);
	}
	getUserIDFromLogin(userId){
		this.setState({
			userID: userId,
		})
	}
	
	render() {
		return(
			<BrowserRouter>
				<Switch>
					{/*主页 即登录界面*/}
					<Route path="/" exact={true}>
						<LoginPage history = {this.props.history} getUserIDFromLogin = {this.getUserIDFromLogin}/>
					</Route>
					{/*注册界面*/}
					<Route path="/register">
						<RegisterPage/>
					</Route>
					{/*更改密码界面*/}
					<Route path="/changePassword">
						<ChangePasswordPage/>
					</Route>
					{/*文件管理界面*/}
					<Route path="/fileManage">
						<FileManagePage userID = {this.state.userID}/>
					</Route>
					{/*文件搜索结果界面*/}
					<Route path="/searchResult">
						<SearchResultPage/>
					</Route>
					{/*文件上传界面*/}
					<Route path="/fileUpload">
						<FileUploadPage/>
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
	
}