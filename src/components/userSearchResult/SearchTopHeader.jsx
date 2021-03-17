import React,{Component} from "react";
import {Link} from "react-router-dom";
import {deleteSearchInfo, onLogout} from "../Cookies/Cookies";

export default class SearchTopHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID:this.props.userID,
            userName:this.props.userName,
        }
        this.handleSignOutClick = this.handleSignOutClick.bind(this);
    }
    /*登录按钮点击*/
    handleSignOutClick(){
        onLogout();
        deleteSearchInfo();
    }


    render() {
        return (
            <div className="header d-print-none">
                <div className="header-container">
                    <div className="header-body">
                        <div className="header-body-left">
                        </div>
                        {/*用户信息显示区域*/}
                        <div className="header-body-right">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link profile-nav-link dropdown-toggle"
                                       title="User menu"
                                       data-toggle="dropdown">
                                        <span className="mr-2 d-sm-inline d-none">{this.state.userName}</span>
                                        <figure className="avatar avatar-sm">
                                            <img src="./assets/media/image/logo-dark.png" className="rounded-circle" alt="avatar"/>
                                        </figure>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                        <div className="text-center py-4"
                                             data-background-image="assets/media/image/image1.jpg">
                                            <figure className="avatar avatar-lg mb-3 border-0">
                                                <img src="./assets/media/image/logo-dark.png" className="rounded-circle" alt="image"/>
                                            </figure>
                                            <h5 className="mb-0">{this.state.userName}</h5>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <a href="#" className="list-group-item"><Link to={"/changePassword"}>Reset Password</Link></a>
                                            <a href="" className="list-group-item text-danger" onClick={this.handleSignOutClick}><Link to={'/'}>Sign Out!</Link></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}