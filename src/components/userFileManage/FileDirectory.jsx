import React,{Component} from 'react';
import axios from "axios";
import moment from 'moment';

export default class FileDirectory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            //文件列表
            listFiles:[],
            locationAllFiles:true,
            locationPictures:false,
            locationDocuments:false,
        }
        this.handlePicturesClick = this.handlePicturesClick.bind(this);
        this.handleDocumentsClick = this.handleDocumentsClick.bind(this);
        this.handleAllFilesClick = this.handleAllFilesClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }

    handleAllFilesClick(){
        this.setState({
            locationAllFiles:true,
            locationPictures:false,
            locationDocuments:false,
        })
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=0,1,2,3")
            .then((response)=>{
                this.setState({
                    listFiles:response.data,
                })
            })
    }

    handlePicturesClick(){
        this.setState({
            locationAllFiles:false,
            locationPictures:true,
            locationDocuments:false,
        })
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=2,3")
            .then((response)=>{
                this.setState({
                    listFiles:response.data,
                })
            })
    }
    handleDocumentsClick(){
        this.setState({
            locationAllFiles:false,
            locationPictures:false,
            locationDocuments:true,
        })
        axios.post("http://192.168.43.178:8080/file/mulTypeFile?userID="+this.state.userID+"&fileTypes=0,1")
            .then((response)=>{
                this.setState({
                    listFiles:response.data,
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
                    listFiles:response.data,
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
                                <button className={this.state.locationAllFiles ? "btn btn-block btn-primary" : "btn btn-block"}
                                        onClick={this.handleAllFilesClick}>All Files</button>
                            </div>
                            <br/>
                            <div>
                                <button className={this.state.locationPictures ? "btn btn-block btn-primary" : "btn btn-block"} onClick={this.handlePicturesClick}>Pictures</button>
                            </div>
                            <br/>
                            <div>
                                <button className={this.state.locationDocuments ? "btn btn-block btn-primary" : "btn btn-block"} onClick={this.handleDocumentsClick}>Documents</button>
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
                                <tr style={{textAlign:"center"}}>
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
                                    this.state.listFiles.map((listFile,key)=>{
                                        return(
                                            <tr id={listFile.fileName} style={{textAlign:"center"}}>
                                                <th hidden={true}>{listFile.fileId}</th>
                                                <th>{key+1}</th>
                                                <th>{listFile.fileName}</th>
                                                <th>{moment(listFile.createDate).format('YYYY-MM-DD')}</th>
                                                <th>
                                                    <button className={"btn btn-sm btn-rounded"}
                                                            onClick={this.handleDeleteClick}
                                                            data-toggle={"tooltip"} data-placement={"bottom"}
                                                            title={"Delete " + listFile.fileName}>
                                                        <i className="ti-trash"></i>
                                                    </button>
                                                    |
                                                    <button className={"btn btn-sm btn-rounded"}
                                                            onClick={this.handleDownloadClick}
                                                            data-toggle={"tooltip"} data-placement={"bottom"}
                                                            title={"Download " + listFile.fileName}>
                                                        <i className={"fa fa-download"}></i>
                                                    </button>
                                                </th>
                                            </tr>
                                        )
                                    })

                                }
                                </tbody>
                            </table>

                            {/*-------------------------------------------------------------------------------------*/}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
