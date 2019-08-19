import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// --------------------------------------------------- //
import { showSideMenuItems } from './actions/HeaderActions';
import AppHeaderView from './presentation/AppHeaderView';

class SideNavItem {
    public menuName?: string;
    public path?: string;
}

class HeaderMenu {
    public menuName?: string;
    public path?: string;
    public subMenu?: SideNavItem[];
}

class AppHeader extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            headerMenus: [
                { menuName: 'Home', path: '/', subMenu: []},
                { 
                    menuName: 'TO DO', 
                    path: '/todo', 
                    subMenu: [
                        { menuName: 'TO DO ADD', path: '/todo/add'},
                        { menuName: 'TO DO List', path: '/todo/list'}
                    ]
                }
            ]
        }

        const headerMenus: HeaderMenu = this.state.headerMenus;

        if (window.location.pathname.includes('todo')) {
            this.props.showSideMenuItems(headerMenus[1].subMenu);
            return;
        } else {
            this.props.showSideMenuItems([]);
        }
    }

    public render() {
        return <AppHeaderView headerMenus={this.state.headerMenus} {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    sideMenuItems: state.headerReducer.sideMenuItems
});

const mapDispatchToProps = (dispatch: any) => ({
    showSideMenuItems: (subMenu: SideNavItem) => dispatch(showSideMenuItems(subMenu))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader);