import React, {Component} from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

class LoginPage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			user_id: null, //用户id
			email: null,//用户邮箱
			password: null,//用户密码
			password_borderColor: '',//密码输入框颜色
			email_borderColor: '',//邮箱输入框颜色
			title_Email:'请输入你的账号',//邮箱输入框提示信息
			title_Password:'请输入你的密码',//密码输入框提示信息
			animate_Email: true,//邮箱输入框动画控制
			animate_Password: true//密码输入框动画控制
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
			axios.get("http://localhost:8080/user/login?email=" + this.state.email + '&password=' + this.state.password)
				.then((response)=> {
					if (response.data !== 0 && response.data !== -1)
					{
						this.setState({user_id: response.data});
						this.props.getUserIDFromLogin(this.state.user_id);
						this.props.history.push('/fileManage');
						
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
			/*<!--用户登录-->*/
			<div className="middle-box text-center animated fadeInDown" >
				<div>
					<div>
						<h1 className="logo-name">XX-C</h1>
					</div>
					<h3>Welcome to XX-CloudDisk</h3>
					<p>登录到系统。</p>
					{/*登录组件*/}
					<form className="m-t" role="form">
						<div className="form-group">
							<input type="email" className={this.state.animate_Email ? "form-control" : "form-control animated shake"} style={{borderColor: this.state.email_borderColor}} data-toggle="tooltip"  data-placement="bottom" title={this.state.title_Email} placeholder="邮箱" name="email"  onChange={this.handle_Email_Change}/>
						</div>
						<div className="form-group">
							<input type="password" className={this.state.animate_Password ? "form-control" : "form-control animated shake"} style={{borderColor: this.state.password_borderColor}} data-toggle="tooltip"   data-placement="bottom" title={this.state.title_Password} placeholder="密码" name="password" onChange={this.handle_password_Change}/>
						</div>
						<a className="btn btn-primary block full-width m-b" onClick={this.handleLogin_Click}>登录</a>
					</form>
					{/*忘记密码组件*/}
					<ForgetPassword/>
					{/*注册组件*/}
					<Register/>
				</div>
			</div>
		)
	}
}

class Register extends Component{
	render(){
		return (
			<form className="m-t" role="form">
				<div className="form-group">
					<button className="btn btn-primary full-width"><small className="btn-sm">没有账户?</small><Link to={"/register"}>注册</Link></button>
				</div>
			</form>
		)
	}
}

class ForgetPassword extends Component{
	render(){
		return(
			<form className="m-t form-inline" role="form">
				<div className="form-group">
					<button type="submit" className="btn btn-sm"> <Link to={"/changePassword"}>忘记密码？</Link></button>
				</div>
			</form>
		)
	}
}

export default withRouter(LoginPage);