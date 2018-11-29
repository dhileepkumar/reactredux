import React, {Component} from 'react';
import Logo from '../Logo'
import {Link} from 'react-router-dom'

class Sidebar extends Component{

    constructor(props){
        super(props)
        this.state={
            selectedTabId:this.props.selectedTabId,
        }
        this.menu= this.extractmenu(this.props.menu,this.state,  this.props.location_detail.pathname);
    }

    onActiveTab = (index, e) => {
        this.setState({ selectedTabId: index });
        if(this.refs.side_menubar.children){
            Array.prototype.map.call(this.refs.side_menubar.children, function(obj) {
                obj.className=' ';
            });
            this.refs.side_menubar.children[index].className='active';
        }
    }

    static getDerivedStateFromProps(props, state){
    let location_path = props.location_detail.pathname.split('/');
        if(location_path.length===4){
            if(location_path[2] === 'productbrowser' && state.selectedTabId!==2) {
                
                return {
                    selectedTabId:2
                }
               
            }
        }
         return false
      
    }

    componentDidUpdate(){
        let location_path = this.props.location_detail.pathname.split('/');
        if(location_path.length===4){
            if(location_path[2] === 'productbrowser') {
                Array.prototype.map.call(this.refs.side_menubar.children, function(obj) {
                    obj.className=' ';
               });
               this.refs.side_menubar.children[1].className='active';
            }
        }
       
    }

    onActiveSubTab = (index, e) => {
        //alert('sub'+index);
    }
  
    extractmenu = (list,state, path) =>{
    var listmenu='';
        if(list.length){
            listmenu =  list.map((list,index)=>{
                if(list.hasOwnProperty('submenu')){
                  return  <li key={index} className={(this.state.selectedTabId === index) ? 'active' : '' }  onClick={ this.onActiveTab.bind(this, index) } ><Link to={list.weblink}>
                    <span className="nr">
                        <img src={list.icon} alt="icon" />
                    </span>
                    <span className="av">
                        <img src={list.icon} alt="icon" />
                    </span>
                    <span className="text_menu">{list.weblinkname}</span><b className="caret"></b></Link>
                        <ul className="dropdown">
                            
                            {this.extractsubmenu(list.submenu)}
                        </ul>
                    </li>

                }else{
                return <li key={index} className={(this.state.selectedTabId === index) ? 'active' : '' }  onClick={ this.onActiveTab.bind(this, index) } ><Link to={list.weblink} >
                    <span className="nr">
                    <i className={list.icon} alt="icon" ></i>
                    </span>
                    <span className="av">
                        <i className={list.icon} alt="icon" ></i>
                    </span>
                    <span className="text_menu"> {list.weblinkname}</span></Link></li>
                }
            })
        }
        else{
            listmenu='';
        }
        return listmenu;
    }

    extractsubmenu = (list,state) =>{
        var listmenu='';
            if(list.length){
                listmenu =  list.map((list,index)=>{
                    return <li key={index} onClick={ this.onActiveSubTab.bind(this, index) } ><Link to={list.weblink} >
                    {list.weblinkname}</Link></li>
                });
            }
            else{
                listmenu='';
            }
            return listmenu;
        }
    
    render(){
      
        return <div  ref="sidebarmain" className={(this.props.sidebarshow) ? 'sidebar show' : 'sidebar' }>
                    <Logo/>
                    <div className="navigation">
                        <div className="header">MAIN NAVIGATION</div>
                        <ul ref="side_menubar">
                            { this.menu }
                        </ul>
                    </div>
                    <div className="close_sidebar"><span className="closespan"><i className="fa fa-close fa-2x"></i></span></div>
                </div>;
    }
}

export default Sidebar



