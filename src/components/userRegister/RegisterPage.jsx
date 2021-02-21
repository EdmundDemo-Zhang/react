import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class RegisterPage extends Component{
	//内部状态
	constructor(props) {
		super(props);
		this.state = {
			email:null,//邮箱
			userName:null,//用户名
			password:null,//密码
			confirm_password:null,//确认密码
			email_VerificationCode: null,//系统返回验证码
			input_VerificationCode:null,//用户输入验证码
			verificationCodeSendFlag:false,//验证码发送按钮点击标志
			
			//错误提示动画控制
			animate_UserName: true,
			animate_Email:true,
			animate_Password:true,
			animate_ConfirmPassword:true,
			animate_VerificationCode:true,
			//错误提示输入框边框颜色
			borderColor_Email: '',
			borderColor_Password: '',
			borderColor_UserName:'',
			borderColor_ConfirmPassword: '',
			borderColor_VerificationCode: '',
			//错误提示文字 当鼠标移到对应输入框时显示
			title_Email: "请输入你要注册邮箱并点击发送验证码验证",
			title_Password:"密码长度为8-16位，数字、字母、字符至少包含两种",
			title_UserName: "请输入你的用户名",
			title_ConfirmPassword:"请再次输入你的密码",
			title_VerificationCode: "请输入你邮箱所收到的验证码"
			
		}
		//绑定函数
		this.handle_EmailChang = this.handle_EmailChang.bind(this);
		this.handle_UserNameChang = this.handle_UserNameChang.bind(this);
		this.handle_PasswordChang = this.handle_PasswordChang.bind(this);
		this.handle_ConfirmPasswordChang = this.handle_ConfirmPasswordChang.bind(this);
		this.handle_EmailVerificationCodeChang = this.handle_EmailVerificationCodeChang.bind(this);
		this.handle_VerificationCodeSend = this.handle_VerificationCodeSend.bind(this);
		this.handle_RegisterClick = this.handle_RegisterClick.bind(this);
		this.stateIni = this.stateIni.bind(this);
		
	}
	//邮箱变化处理函数
	handle_EmailChang(e){
		this.setState({email:e.target.value});
		this.stateIni();
	}
	//用户名变化处理函数
	handle_UserNameChang(e){
		this.setState({userName:e.target.value});
		this.stateIni();
	}
	//密码变化处理函数
	handle_PasswordChang(e){
		this.setState({password:e.target.value,})
		this.stateIni();
	}
	//确认密码变化处理函数
	handle_ConfirmPasswordChang(e){
		this.setState({confirm_password:e.target.value,})
		this.stateIni();
	}
	//验证码变化处理函数
	handle_EmailVerificationCodeChang(e){
		this.setState({input_VerificationCode:e.target.value.toString()})
		this.stateIni();
	}
	
	//错误提示初始化函数
	stateIni(){
		this.setState({
			//错误提示动画控制
			animate_UserName: true,
			animate_Email:true,
			animate_Password:true,
			animate_ConfirmPassword:true,
			animate_VerificationCode:true,
			//错误提示输入框边框颜色
			borderColor_Email: '',
			borderColor_Password: '',
			borderColor_UserName:'',
			borderColor_ConfirmPassword: '',
			borderColor_VerificationCode: '',
			//错误提示文字 当鼠标移到对应输入框时显示
			title_Email: "请输入你要注册邮箱并点击发送验证码",
			title_Password:"密码长度为8-16位，数字、字母、字符至少包含两种",
			title_UserName: "请输入你的用户名",
			title_ConfirmPassword:"请再次输入你的密码",
			title_EmailVerificationCode: "请输入你邮箱所收到的验证码"
		})
	}
	//发送验证码按钮点击处理函数
	handle_VerificationCodeSend() {
		//初始化状态
		this.setState({
			borderColor_Email: '',
			animate_Email: true,
			title_Email: "输入需要注册的邮箱并点击发送验证码",
		});
		//0、判断邮箱是否为空
		if (this.state.email === null) {
			this.setState({
				borderColor_Email: 'red',
				title_Email: '邮箱不得为空',
				animate_Email: false,
			})
		}
		//邮箱不为空
		else {
			//1、检查邮箱格式是否正确
			//邮箱格式验证正则表达式
			let emailRegEpx = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");
			let email_Veri  = emailRegEpx.test(this.state.email);
			if (!email_Veri)
			{
				this.setState({
					borderColor_Email: 'red',
					animate_Email: false,
					title_Email:"请输入正确的邮箱格式",
				})
			}
			//2、邮箱格式正确 查看是否曾注册过系统
			else{
				axios.get("http://localhost:8080/user/emailIsNoRegistered?email=" + this.state.email)
					.then((response) => {
						if (response.data !== 0 )
						{
							this.setState({
								borderColor_Email: 'red',
								animate_Email: false,
								title_Email:"该邮箱已注册，请直接登陆！",
							})
						}
						//用户未曾注册过 发送验证码
						else{
							axios.get("http://localhost:8080/user/emailCheck?email=" + this.state.email)
								.then((response)=>{
									this.setState({
										email_VerificationCode: response.data.toString(),
										verificationCodeSendFlag:true,
									})
								})
						}
					})
			}
		}
	}
	
	//注册按钮点击
	handle_RegisterClick(){
		this.stateIni();
		
		//密码 正则表达式
		let passwordRegEpx = new RegExp("(?!.*\\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$");
		let passwordVeri = passwordRegEpx.test(this.state.password);
		//邮箱 正则表达式
		let emailRegEpx = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");
		let emailVeri = emailRegEpx.test(this.state.email);
		//用户账号名称检测
		if (this.state.userName === null)
		{
			this.setState({
				borderColor_UserName:'red',
				title_UserName:"用户名不能为空",
				animate_UserName:false,
			})
		}
		//密码判断
		if (!passwordVeri){
			this.setState({
				borderColor_Password:'red',
				title_Password:'请检查密码格式，密码长度为8-16位，数字、字母、字符至少包含两种',
				animate_Password: false,
			})
		}
		//两次密码确认判断
		if (this.state.password !== this.state.confirm_password){
			this.setState({
				borderColor_ConfirmPassword:'red',
				animate_ConfirmPassword:false,
				title_ConfirmPassword:"两次密码输入不一致",
			})
		}
		//邮箱验证码为空 即未点击发送验证码
		if (this.state.email_VerificationCode === null)
		{
			this.setState({
				borderColor_Email: 'red',
				animate_Email: false,
				title_Email:"请点击发送邮箱验证码",
			})
		}
		else {
			if (this.state.email_VerificationCode !== this.state.input_VerificationCode)
			{
				this.setState({
					borderColor_VerificationCode:'red',
					title_VerificationCode:"验证码输入错误",
					animate_VerificationCode:false,
				})
			}
		}
		//检查条件 进行注册
		if (
			this.state.email !== null
			&& emailVeri === true
			&& passwordVeri === true
			&& this.state.password === this.state.confirm_password
			&& this.state.email_VerificationCode === this.state.input_VerificationCode
			&& this.state.email_VerificationCode !== null
			&& this.state.input_VerificationCode !== null
		){
			let today = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' +new Date().getUTCDate();
			axios.post("http://localhost:8080/user/register?"
				+ "userName=" + this.state.userName
				+ "&email=" +  this.state.email
				+ "&password=" + this.state.password
				+ "&createDate=" + today
			).then((response) => {
				if (response.data === true)
				{
					this.props.history.push("/")
				}
			})
		}
		
	}
	
	render() {
		return(
			<body className="form-membership" style={{backgroundImage:"url(./assets/media/image/image1.jpg)"}}>
			<div className="form-wrapper">
				
				<div id="logo">
					<img src="./assets/media/image/logo-dark.png" alt="image"/>
				</div>
				
				
				
				<h5>Create account</h5>
				
				
				<form className="m-t" role="form">
					<div className="form-group">
						<div className="input-group">
							<input type="email" placeholder="Email" name="email" data-toggle="tooltip"  data-placement="bottom"
							       title={this.state.title_Email}
							       className={this.state.animate_Email ? "form-control" : "form-control animated shake"}
							       style={{borderColor: this.state.borderColor_Email}}
							       onChange={this.handle_EmailChang}  required/>
							<span className="input-group-btn">
								<a className="btn btn-light" onClick={this.handle_VerificationCodeSend}>发送验证码</a>
							</span>
						</div>
					</div>
					<div className="form-group">
						<input type="text" placeholder="UserName" name="userName" data-toggle="tooltip"  data-placement="bottom"
						       title={this.state.title_UserName}
						       className={this.state.animate_UserName ?  "form-control" : "form-control animated shake"}
						       style={{borderColor: this.state.borderColor_UserName}}
						       onChange={this.handle_UserNameChang} required/>
					</div>
					<div className="form-group">
						<input type="password" placeholder="Password" name="password" data-toggle="tooltip"  data-placement="bottom"
						       title={this.state.title_Password}
						       className={this.state.animate_Password ? "form-control" : "form-control animated shake"}
						       style={{borderColor: this.state.borderColor_Password}}
						       onChange={this.handle_PasswordChang}required/>
					</div>
					<div className="form-group">
						<input type="password" placeholder="Confirm Password" name="confirm_password" data-toggle="tooltip"  data-placement="bottom"
						       title={this.state.title_ConfirmPassword}
						       className={this.state.animate_ConfirmPassword ? "form-control" : "form-control animated shake"}
						       style={{borderColor: this.state.borderColor_ConfirmPassword}}
						       onChange={this.handle_ConfirmPasswordChang} required/>
					</div>
					<div className="form-group">
						<input type="text"  placeholder="Email Verification Code" name="verificationCode" data-toggle="tooltip"  data-placement="bottom"
						       title={this.state.title_EmailVerificationCode}
						       className={this.state.animate_VerificationCode ? "form-control" : "form-control animated shake"}
						       style={{borderColor: this.state.borderColor_VerificationCode}}
						       onChange={this.handle_EmailVerificationCodeChang} required/>
					</div>
					<button className="btn btn-primary btn-block"  onClick={this.handle_RegisterClick}>Register</button>
					<hr/>
					<p className="text-muted">Already have an account?</p>
					<a className="btn btn-outline-light btn-sm"> <Link to='/'>Sign in!</Link></a>
				</form>
			
			</div>
			</body>
		)
	}
}