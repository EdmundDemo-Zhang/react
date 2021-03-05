import React,{Component} from 'react';
import axios from "axios";

export default class FileDirectory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            //文件列表
            listAllFiles:[],
        }
        this.handlePicturesClick = this.handlePicturesClick.bind(this);
        this.handleDocumentsClick = this.handleDocumentsClick.bind(this);
        this.handleAllFilesClick = this.handleAllFilesClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }

    handleAllFilesClick(){
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=0,1,2,3")
            .then((response)=>{
                this.setState({
                    listAllFiles:response.data,
                })
            })
    }

    handlePicturesClick(){
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=2,3")
            .then((response)=>{
                this.setState({
                    listAllFiles:response.data,
                })
            })
    }
    handleDocumentsClick(){
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=0,1")
            .then((response)=>{
                this.setState({
                    listAllFiles:response.data,
                })
            })
    }

    handleDeleteClick(e){
        let tr = e.nativeEvent.target.parentNode.parentNode.parentNode;
        axios.post("http://192.168.43.178:8080/file/delete?userId=" + this.state.userID + '&' + 'filename=' + tr.id);
        window.location.reload(true);
    }
    handleDownloadClick(e){
        let tr = e.nativeEvent.target.parentNode.parentNode.parentNode;
        window.location.href="http://192.168.43.178:8080/file/download?filename=" + tr.id + '&userId=' + this.state.userID;
    }
    componentWillMount() {
        //初始状态
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=0,1,2,3")
            .then((response)=>{
                this.setState({
                    listAllFiles:response.data,
                })
            })
    }


    render() {
        return(
            <div className="content">
                <div className="pcreateDate-header d-flex justify-content-between">
                    <h2>Files</h2>
                    <a href="#" className="files-toggler">
                        <i className="ti-menu"></i>
                    </a>
                </div>

                <div className="row">
                    {/*我的文件*/}
                    <div className="col-xl-3 files-sidebar">
                        <div className="card border-0">
                            <h6 className="card-title">My Folders</h6>
                            <div>
                                <button className={"btn btn-block"} onClick={this.handleAllFilesClick}>All Files</button>
                            </div>
                            <br/>
                            <div>
                                <button className={"btn btn-block"} onClick={this.handlePicturesClick}>Pictures</button>
                            </div>
                            <br/>
                            <div>
                                <button className={"btn btn-block"} onClick={this.handleDocumentsClick}>Documents</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="content-title mt-0">
                            <h4>Files List</h4>
                        </div>
                        <div className="table-responsive">
                            {/*---------------------------------------文件展示列表--------------------------------------*/}
                            <table  className="table table-borderless table-hover">
                                {/*文件展示表头*/}
                                <thead>
                                <tr>
                                    <th hidden={true}>fileId</th>
                                    <th >Index</th>
                                    <th>File Name</th>
                                    <th>Upload Date</th>
                                    <th>Options</th>
                                </tr>
                                </thead>
                                {/*文件展示内容*/}
                                <tbody>
                                {
                                    this.state.listAllFiles.map((listAllFile,key)=>{
                                        return(
                                            <tr id={listAllFile.fileName}>
                                                <th hidden={true}>{listAllFile.fileId}</th>
                                                <th>{key+1}</th>
                                                <th>{listAllFile.fileName}</th>
                                                <th>{listAllFile.createDate}</th>
                                                <th>
                                                    <button className={"btn btn-sm btn-rounded"} onClick={this.handleDeleteClick}>
                                                        <i className="ti-trash"></i>
                                                    </button>
                                                    |
                                                    <button className={"btn btn-sm btn-rounded"} onClick={this.handleDownloadClick}>
                                                        <i className={"fa fa-download"}></i>
                                                    </button>
                                                </th>
                                            </tr>
                                        )
                                    })

                                }
                                </tbody>
                                {/*<Files userID ={this.state.userID}
                                       locationPictures={this.state.locationPictures}
                                       locationDocuments={this.state.locationDocuments}
                                       locationAllFiles={this.state.locationAllFiles}
                                />*/}
                            </table>

                            {/*-------------------------------------------------------------------------------------*/}
                        </div>                    </div>
                </div>

            </div>
        )
    }
}

class  Files extends Component{
    constructor(props) {
        super(props);
        this.state ={
            userID:this.props.userID,
            listAllFiles:[],
        }
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }

    handleDeleteClick(e){
        let tr = e.nativeEvent.target.parentNode.parentNode.parentNode;
        axios.post("http://192.168.43.178:8080/file/delete?userId=" + this.state.userID + '&' + 'filename=' + tr.id);
        window.location.reload(true);
    }
    handleDownloadClick(e){
        let tr = e.nativeEvent.target.parentNode.parentNode.parentNode;
        window.location.href="http://192.168.43.178:8080/file/download?filename=" + tr.id + '&userId=' + this.state.userID;
    }
    componentWillMount() {
        //初始状态
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=0,1,2,3")
            .then((response)=>{
                this.setState({
                    listAllFiles:response.data,
                })
            })
    }

    render() {
        return(
            <tbody>
                {
                    this.state.listAllFiles.map((listAllFile,key)=>{
                        return(
                            <tr id={listAllFile.fileName}>
                                <th hidden={true}>{listAllFile.fileId}</th>
                                <th>{key}</th>
                                <th>{listAllFile.fileName}</th>
                                <th>{listAllFile.createDate}</th>
                                <th>
                                    <button className={"btn btn-sm btn-rounded"} onClick={this.handleDeleteClick}>
                                        <i className="ti-trash"></i>
                                    </button>
                                    |
                                    <button className={"btn btn-sm btn-rounded"} onClick={this.handleDownloadClick}>
                                        <i className={"fa " +
                                        "fa-download"}></i>
                                    </button>
                                </th>
                            </tr>
                        )
                    })

                }
            </tbody>
        )
    }
}
