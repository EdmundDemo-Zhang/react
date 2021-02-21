import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class ChangePasswordPage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			email:null,//用户邮箱
			userId: null,//用户id
			email_VerificationCode:null,//系统邮箱验证码
			input_VerificationCode : null,//用户输入的邮箱验证码
			password:null, //用户输入新密码
			confirmPassword:null,//用户输入确认密码
			flag_VerificationCodeSendClick:false,//发送验证码点击标志
			
			//输入错误动画标志
			animate_Email:true,
			animate_VerificationCode:true,
			animate_Password:true,
			animate_ConfirmPassword:true,
			//输入错误边框颜色
			borderColor_Email:'',
			borderColor_VerificationCode:'',
			borderColor_Password:'',
			borderColor_ConfirmPassword:'',
			//输入错误提示
			title_Email:"请输入你需要更改密码的邮箱",
			title_VerificationCode:'请输入你邮箱收到的验证码',
			title_Password:"请输入你的新密码",
			title_ConfirmPassword:"请再次输入你的新密码",
		}
		this.handle_EmailChange = this.handle_EmailChange.bind(this);
		this.handle_VerificationCodeInput = this.handle_VerificationCodeInput.bind(this);
		this.handle_PasswordChange = this.handle_PasswordChange.bind(this);
		this.handle_ConfirmPasswordChange = this.handle_ConfirmPasswordChange.bind(this);
		this.handle_VerificationCodeSend = this.handle_VerificationCodeSend.bind(this);
		this.handle_SubmitClick = this.handle_SubmitClick.bind(this);
	}
	//处理邮箱输入框
	handle_EmailChange (e){
		this.setState({email: e.target.value.toString(),})
		//重新输入时，重置错误提示
		this.setState({
			animate_Email:true,
			borderColor_Email:'',
			title_Email:"请输入你需要更改密码的邮箱",
		})
	}
	//处理验证码输入框
	handle_VerificationCodeInput(e){
		this.setState({
			input_VerificationCode: e.target.value.toString(),
		})
		//重新输入时，取消错误提示
		this.setState({
			animate_VerificationCode:true,
			borderColor_VerificationCode:'',
			title_VerificationCode:'请输入你邮箱收到的验证码',
		})
		
	}
	//处理密码输入框
	handle_PasswordChange(e){
		this.setState({
			password: e.target.value.toString(),
		})
		//重新输入时，取消错误提示
		this.setState({
			animate_Password:true,
			borderColor_Password:'',
			title_Password:'请输入你的新密码',
		})
	}
	//处理确认密码输入框
	handle_ConfirmPasswordChange(e){
		this.setState({
			confirmPassword: e.target.value.toString(),
		})
		//重新输入时，取消错误提示
		this.setState({
			animate_confirmPassword:true,
			borderColor_confirmPassword:'',
			title_confirmPassword:'请重新输入你的新密码',
		})
		
	}
	//处理发送验证码按钮点击
	handle_VerificationCodeSend(){
		//初始化状态
		this.setState({
			animate_Email:true,
			borderColor_Email:'',
			title_Email:"请输入你需要更改密码的邮箱"
		})
		let emailRegEpx = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$");
		//邮箱格式错误
		if (emailRegEpx.test(this.state.email) === false)
		{
			this.setState({
				title_Email: "邮箱格式错误！",
				animate_Email: false,
				borderColor_Email: 'red'
			})
		}else{
			//检查是否注册
			axios.get("http://localhost:8080/user/emailIsNoRegistered?email=" + this.state.email)
				.then((response) => {
					//未注册
					if (response.data === 0 )
					{
						this.setState({
							animate_Email:false,
							title_Email:"该账号未注册，请先注册！",
							borderColor_Email:'red',
						})
					}
					//已注册 请求验证码 并将验证码存入状态
					else{
						//将用户id存入状态
						this.setState({userId: response.data,});
						axios.get("http://localhost:8080/user/emailCheck?email=" + this.state.email)
							.then((response) => {
								//存入系统返回验证码
								this.setState({
									email_VerificationCode: response.data.toString(),
									flag_VerificationCodeSendClick:true,
								});
							})
					}
				})
		}
	}
	
	//处理提交按钮点击
	handle_SubmitClick(){
		this.setState({
			animate_VerificationCode:true,
			borderColor_VerificationCode:'',
			title_VerificationCode:'请输入你邮箱收到的验证码',
		});
		//密码 正则表达式
		let passwordRegEpx = new RegExp("(?!.*\\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$");
		let passwordVeri = passwordRegEpx.test(this.state.password);
		
		if (this.state.flag_VerificationCodeSendClick === false)
		{
			this.setState({
				title_Email: "请先获取邮箱验证码！",
				animate_Email: false,
				borderColor_Email: 'red'
			})
		}
		else{
			//验证码错误
			if (this.state.email_VerificationCode !== this.state.input_VerificationCode){
				this.setState({
					animate_VerificationCode:false,
					title_VerificationCode:"验证码错误",
					borderColor_VerificationCode : 'red',
				})
			}
			//验证码正确
			else {
				//验证密码格式
				//密码格式错误 即模式匹配失败
				if (passwordVeri === false)
				{
					this.setState({
						title_Password : '密码格式错误，密码长度为8-16位，数字、字母、字符至少包含两种',
						borderColor_Password: 'red',
						animate_Password:false,
					})
				}
				//密码格式正确 检查两次输入密码是否相同
				else
				{
					//密码不一致 更改错误提示
					if (this.state.password !== this.state.confirmPassword){
						this.setState({
							title_ConfirmPassword : '密码不一致',
							borderColor_ConfirmPassword: 'red',
							animate_ConfirmPassword:false,
						})
					}
					//密码一致 修改用户密码 并跳转至登录界面
					else{
						axios.post("http://localhost:8080/user/userInfoChange?" +
							"email=" + this.state.email +
							"&password=" + this.state.password
						);
						
						this.props.history.push('/');
					}
				}
			}
			
		}
	}
	
	render() {
		return(
			<body className="form-membership" style={{backgroundImage:"url(./assets/media/image/image1.jpg)"}}>
			<div className="form-wrapper">
				
				<div id="logo">
					<img src="./assets/media/image/logo-dark.png" alt="image"/>
				</div>
				
				<h5>Change Password</h5>
				
				<form className="m-t" role="form">
					<div className="form-group">
						<div className="input-group">
							<input type="email"  placeholder="邮箱地址" name="email" data-toggle="tooltip"  data-placement="bottom"
							       title={this.state.title_Email}
							       className={this.state.animate_Email ? "form-control" : "form-control animated shake"}
							       style={{borderColor : this.state.borderColor_Email}}
							       onChange={this.handle_EmailChange} required/>
							<span className="input-group-btn">
								<a className="btn btn-light" onClick={this.handle_VerificationCodeSend}>发送验证码</a>
							</span>
						</div>
					</div>
					<div className="form-group">
						<input type="text" placeholder="邮箱验证码" name="verification_text"
						       title={this.state.title_VerificationCode}
						       className={this.state.animate_VerificationCode ? "form-control" : "form-control animated shake"}
						       style={{borderColor : this.state.borderColor_VerificationCode}}
						       onChange={this.handle_VerificationCodeInput} required/>
					</div>
					<div className="form-group">
						<input  type="password"  placeholder="输入新密码" name="password"
						        className={this.state.animate_Password ?"form-control" : "form-control animated shake"}
						        title={this.state.title_Password}
						        style={{borderColor:this.state.borderColor_Password}}
						        onChange={this.handle_PasswordChange} required/>
					</div>
					<div className="form-group">
						<input type="password"  placeholder="确认新密码" name="confirm_password"
						       className={this.state.animate_ConfirmPassword ? "form-control": "form-control animated shake"}
						       title={this.state.title_ConfirmPassword}
						       style={{borderColor: this.state.borderColor_ConfirmPassword}}
						       onChange={this.handle_ConfirmPasswordChange} required/>
					</div>
					<button className="btn btn-primary btn-block" onClick={this.handle_SubmitClick}>Change Password</button>
				</form>
			</div>
			</body>
		)
	}
	
} 