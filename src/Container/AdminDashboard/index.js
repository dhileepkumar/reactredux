import React, { Component, Fragment } from 'react';
import Sidebar from '../../Components/Sidebar'
import PannelHeader from '../PannelHeader'
import { Redirect } from 'react-router-dom';

let selectedTabId = '';

const togglesidebar = (e) =>{
    var getBodyClass = document.getElementById('body').className;
    if(getBodyClass.includes('sidebar-lg-show')){
        document.getElementById('body').className=""
    }
    else{
        document.getElementById('body').className="sidebar-lg-show"
    }
}

class AdminDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleMobileMenu = this.handleMobileMenu.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            auth: this.props.auth,
            SidebarClass: false
        };
        let location_path = this.props.location.pathname.split('/');
        this.props.menu.map((menu, index) => {
            let menu_name = menu.weblink.split('/')
            // if(menu.weblink === this.props.location.pathname) {
            //     selectedTabId = index;
            //     return false;
            // }
            if (menu_name[2] === location_path[2]) {
                selectedTabId = index;
                return false;
            }
            return true;
        });
    }


    


    static getDerivedStateFromProps(props) {
        return { auth: props.auth };
    }

    logout = (e) => {
        var login_token={
            token:this.props.token
        }
        this.props.UserLogout(login_token);
    }

    handleMobileMenu = () => {
        this.handleClick();
        this.setState({ SidebarClass: true });
    }

    Hidesidebar = (e) => {
        // e.preventDefault;
        this.setState({ SidebarClass: false })
    }

    handleClick() {
        if (!this.state.SidebarClass) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            SidebarClass: !prevState.SidebarClass,
        }));
    }

    handleOutsideClick(e) {
        if (!this.state.SidebarClass) {
            return;
        }
        this.handleClick();
    }

    render() {
        if (this.state.auth === false) {
            return <Redirect to="/login" />
        }

        return <Fragment>
            <Sidebar menu={this.props.menu} selectedTabId={selectedTabId} sidebarshow={this.state.SidebarClass} Hidesidebar={this.Hidesidebar} location_detail={this.props.location} />
            <div className="mainwrapper mvleft">
                <div className="userheader">
                    <div className="no-gutter">
                        <PannelHeader userdetails={this.props.userdetails} rightmenu={this.props.supplierrightmenu} logout={this.logout} handlemanu={this.handleMobileMenu} user_type={this.props.user_type} gettoggle={togglesidebar}/>
                    </div>
                </div>
                {this.props.children}
            </div>
        </Fragment>;
    }
}

export default AdminDashboard



