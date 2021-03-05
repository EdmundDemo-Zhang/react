import React, {Component} from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {loginUser, onLogin} from "../Cookies/Cookies"

class LoginPage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userID: null, //用户id
			userName:null,
			email: null,//用户邮箱
			password: null,//用户密码
			password_borderColor: '',//密码输入框颜色
			email_borderColor: '',//邮箱输入框颜色
			title_Email:'请输入你的账号',//邮箱输入框提示信息
			title_Password:'请输入你的密码',//密码输入框提示信息
			animate_Email: true,//邮箱输入框动画控制
			animate_Password: true,//密码输入框动画控制
			borderColor_Email: '',
			borderColor_Password: '',
		};
		this.handle_Email_Change = this.handle_Email_Change.bind(this);
		this.handle_password_Change = this.handle_password_Change.bind(this);
		this.handleLogin_Click = this.handleLogin_Click.bind(this);
	}
	
	handle_Email_Change(e){
		this.setState({email:e.target.value})
	}
	
	handle_password_Change(e){
		this.setState({password:e.target.value})
	}
	
	handleLogin_Click(){
		//初始化状态 每次点击
		this.setState({
			password_borderColor: '',
			email_borderColor: '',
			title_Email:'请输入你的账号',
			title_Password:'请输入你的密码',
			animate_Email: true,
			animate_Password: true
		})
		/*获取用户ID*/
		axios.get("http://192.168.43.178:8080/user/getUserIDUserName?email=" + this.state.email)
			.then((response)=>{
				if(response.data === -1)
				{
					this.setState({
						title_Email:'该账号没有注册，请注册后登录！',
						email_borderColor: 'red',
						animate_Email: false,
						animate_Password: true,
						title_Password: '请输入你的密码',
						password_borderColor: '',
					});
				}
				else{
					this.setState({
						userID:response.data.userID,
						userName:response.data.userName,
					});
				}
			});
		//邮箱格式验证
		let emailRegEpx = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");

		if (emailRegEpx.test(this.state.email) === false)
		{
			this.setState({
				title_Email: "邮箱格式错误！",
				animate_Email: false,
				email_borderColor: 'red'
			})
		}else{
			//根据邮箱地址获取用户是否可以登录
			axios.get("http://192.168.43.178:8080/user/login?email=" + this.state.email + '&password=' + this.state.password)
				.then((response)=> {
					if (response.data !== 0 && response.data !== -1)
					{
						const user = {
							userID:this.state.userID,
							userName:this.state.userName,
							email:this.state.email,
						}
						onLogin(user);
						this.props.history.push({pathname:'/fileManage'});
					}
					if (response.data === 0)
					{
						this.setState({
							password_borderColor:'red',
							title_Password: '密码错误',
							title_Email:'请输入你的账号',
							email_borderColor: '',
							animate_Password: false,
							animate_Email:true
						})
					}
					if (response.data === -1)
					{
						this.setState({
							title_Email:'该账号没有注册，请注册后登录！',
							email_borderColor: 'red',
							animate_Email: false,
							animate_Password: true,
							title_Password: '请输入你的密码',
							password_borderColor: '',
						})
					}
				})
		}
	}
	render() {
		return(
			<body className="form-membership" style={{backgroundImage:"url(./assets/media/image/image1.jpg)"}}>
			<div className="form-wrapper animated fadeIn">
				<div id="logo">
					<img src="./assets/media/image/logo-dark.png" alt="image"/>
				</div>
				
				<h5>Sign in</h5>
				
				<form>
					<div className="form-group">
						<input type="email" placeholder="Email" name="email" data-toggle="tooltip"  data-placement="bottom" required autoFocus
						       title={this.state.title_Email}
						       className={this.state.animate_Email ? "form-control" : "form-control animated shake"}
						       style={{borderColor: this.state.borderColor_Email}}
						       onChange={this.handle_Email_Change}
						/>
					</div>
					<div className="form-group">
						<input type="password" placeholder="Password" name="password" data-toggle="tooltip"  data-placement="bottom" required
						       title={this.state.title_Password}
						       className={this.state.animate_Password ? "form-control" : "form-control animated shake"}
						       style={{borderColor: this.state.borderColor_Password}}
						       onChange={this.handle_password_Change}
						/>
					</div>
					<a className="btn btn-primary btn-block btn-rounded" onClick={this.handleLogin_Click}>Sign in</a>
					<br/>
					<ForgetPassword/>
					<hr/>
					<Register/>
				</form>
			</div>
			</body>
			
		)
	}
}

class Register extends Component{
	render(){
		return (
			<div className="form-group justify-content-between">
				<p className="text-muted">Don't have an account?</p>
				<a className="btn btn-outline-light btn-sm btn-rounded"><Link to={'/register'}>Register now!</Link></a>
			</div>
		)
	}
}

class ForgetPassword extends Component{
	render(){
		return(
			<div className="form-group justify-content-between">
				<small>
					<a className="btn btn-outline-light btn-sm btn-rounded"> <Link to={'/changePassword'}>Reset password</Link></a>
				</small>
			</div>
		)
	}
}


export default withRouter(LoginPage);