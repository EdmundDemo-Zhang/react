import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "../userLogin/LoginPage";
import RegisterPage from "../userRegister/RegisterPage";
import ChangePasswordPage from "../userChangePassword/ChangePasswordPage";
import FileManagePage from "../userFileManage/FileManagePage";
import SearchResultPage from "../userSearchResult/SearchResultPage";


export default class RouterIndex extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userName: null,
			userID:null,
		}
		this.getUserNameFromLogin = this.getUserNameFromLogin.bind(this);
		this.getUserIDFromLogin = this.getUserIDFromLogin.bind(this);
	}
	getUserNameFromLogin(userName){
		this.setState({
			userName: userName,
		})
	}
	getUserIDFromLogin(userID){
		this.setState({
			userID:userID,
		})
	}
	
	render() {
		return(
			<BrowserRouter>
				<Switch>
					{/*主页 即登录界面*/}
					<Route path="/" exact={true}>
						<LoginPage  history={this.props.history}/>
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
						<FileManagePage history = {this.props.history}/>
					</Route>
					{/*文件搜索结果界面*/}
					<Route path="/searchResult">
						<SearchResultPage history={this.props.history}/>
					</Route>

				</Switch>
			</BrowserRouter>
		)
	}
	
}