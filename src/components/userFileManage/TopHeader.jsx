import React,{Component} from "react";
import {Link} from "react-router-dom";
import {deletaSearchInfo, onLogout, saveSearchInfo} from "../Cookies/Cookies";


export default class TopHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID:this.props.userID,
            userName:this.props.userName,
            inputSearch:null,
        }
        this.handleSignOutClick = this.handleSignOutClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }
    /*登录按钮点击*/
    handleSignOutClick(){
        onLogout();
        deletaSearchInfo();
    }

    /*搜索输入框改变 获取输入的值*/
    handleSearchInputChange(e){
        this.setState({
            inputSearch:e.target.value,
        })
    }

    /*点击搜索按钮*/
    handleSearchClick(){
        const searchInfo = {
            inputSearch:this.state.inputSearch,
        }
        saveSearchInfo(searchInfo);
        this.props.history.push('/searchResult');
    }

    render() {
        return (
            <div className="header d-print-none">
                <div className="header-container">
                    <div className="header-body">
                        {/*头像左侧搜索框*/}
                        <div className="header-body-left">
                            <ul className="navbar-nav">
                                <li className="nav-item navigation-toggler">
                                    <a href="#" className="nav-link">
                                        <i className="ti-menu"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <div className="header-search-form">
                                        <form>
                                            <div className="input-group">
                                                {/*---------------------------搜索框------------------------------------------*/}
                                                <input type="text"
                                                       className="form-control"
                                                       placeholder="Search something..."
                                                       onChange={this.handleSearchInputChange}
                                                />
                                                <div className="input-group-prepend">
                                                    <button className="btn">
                                                        <i className="ti-search"></i>
                                                    </button>
                                                </div>
                                                <button className={"btn btn-primary"}
                                                        style={{height:40}}
                                                        onClick={this.handleSearchClick}>
                                                    Search
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
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