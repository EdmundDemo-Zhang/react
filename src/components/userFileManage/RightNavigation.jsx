import React, {Component} from 'react';
import axios from "axios";

let formData = new FormData;

export default class RightNavigation extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            userID:this.props.userID,
            userName:this.props.userName,
            countPictures: 0,
            countDocuments: 0,
            listPictures:[],
            listDocuments:[],
            listAllFiles:[],
        }
        this.handleUploadChange = this.handleUploadChange.bind(this);
        this.handleUploadClick = this.handleUploadClick.bind(this);
    }

    /*选择文件
    * 选择时暂存在formData中
    * */
    handleUploadChange(e){
        e.preventDefault();
        let file = e.target.files[0];
        formData.append('file', file);
        formData.append('userId',this.state.userID);
    }
    /*点击上传文件
    * 点击上传按钮时再上传至服务器
    * */
    handleUploadClick(){
        const url = 'http://192.168.43.178:8080/file/upload';
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(response => {
            response.json().then((data)=> {
                    if (data === 1) {
                        alert("Upload Success");
                        window.location.reload(true);
                    }
                }
            )
        })
    }

    /*预加载文件数量*/
    componentWillMount() {
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID=" + this.state.userID + "&" + "fileTypes=2,3")
            .then((response)=>{
                this.setState({
                    listPictures:response.data,
                    countPictures:response.data.length,
                })
            });
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID=" + this.state.userID + "&" + "fileTypes=0,1")
            .then((response)=>{
                this.setState({
                    listDocuments:response.data,
                    countDocuments:response.data.length,
                })
            })
    }

    render() {
        return(
            <div className="sidebar-group d-print-none">

                <div className="sidebar primary-sidebar show" id="storage">
                    <div className="sidebar-header">
                        <h4>Storage Overview</h4>
                    </div>
                    <div className="sidebar-content">
                        <div id="justgage_five" className="mb-3"></div>
                        <div>
                            <div className="list-group list-group-flush mb-3">
                                <a className="list-group-item px-0 d-flex align-items-center">
                                    <div className="mr-3">
                                        <figure className="avatar">
                                        <span className="avatar-title bg-primary-bright text-primary rounded">
                                            <i className="ti-image"></i>
                                        </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">Images</p>
                                    </div>
                                    <div>
                                        <h5 className="text-primary">{this.state.countPictures} files</h5>
                                    </div>
                                </a>
                                <a className="list-group-item px-0 d-flex align-items-center">
                                    <div className="mr-3">
                                        <figure className="avatar">
                                        <span className="avatar-title bg-primary-bright text-primary rounded">
                                            <i className="ti-files"></i>
                                        </span>
                                        </figure>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="mb-0">Documents</p>
                                    </div>
                                    <div>
                                        <h5 className="text-primary">{this.state.countDocuments} files</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        <form>
                            <input type="file" onChange={this.handleUploadChange}/>
                            <a className="btn btn-sm btn-block btn-outline-primary" type={"submit"}
                               onClick={this.handleUploadClick}>
                                Upload
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}