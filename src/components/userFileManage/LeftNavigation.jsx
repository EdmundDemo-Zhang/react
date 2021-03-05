import React, {Component} from "react";
import {Link} from "react-router-dom";


/*------------------------页面侧边栏-----------------------*/
export default class LeftNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation">
                {/*LOGO*/}
                <div className="logo">
                    <a >
                        <img src="assets/media/image/logo.png" alt="logo"/>
                    </a>
                </div>
                {/*侧边点击按钮 文件管理 URL Settings*/}
                <ul>
                    <Link to={'/fileManage'}>
                        <li>
                            <a className="active">
                                <i className="nav-link-icon ti-file"></i>
                                <span className="nav-link-label">Files</span>
                            </a>
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}