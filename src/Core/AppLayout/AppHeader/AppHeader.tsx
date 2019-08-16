import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// --------------------------------------------------- //
import { showSideMenuItems } from './actions/HeaderActions';

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
        console.log(this.props);
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
        return (
            <ul className="nav d-flex justify-content-center bg-light mb-4">
                {
                    this.state.headerMenus.map((item: HeaderMenu, index: number) => 
                        <li className="nav-item" key={index} onClick={this.props.showSideMenuItems.bind(this, item.subMenu)}>
                            <Link className="nav-link"  to={item.path}>{item.menuName}</Link>
                        </li>
                    )
                }
            </ul>
        );
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