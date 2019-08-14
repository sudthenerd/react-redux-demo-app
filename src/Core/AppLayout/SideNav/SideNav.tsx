import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSideMenuItems } from './actions/SideNavAction';
// --------------------------------------------------- //

class SideNav extends React.Component<any, any>{
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    public render() {
        return (
            <ul className="list-group">
                {
                    this.props.sideMenuItems.map((item: any) => 
                        <li className="list-group-item">
                            <Link to={item.path}>{item.menuName}</Link>
                        </li>
                    )
                }
            </ul>
        );
    }
}

const mapStateToProps = (state: any) => ({
    sideMenuItems: state.sideNavReducer.sideMenuItems
});

const mapDispatchToProps = (dispatch: any) => ({
    showSideMenuItems: (subMenu: any) => dispatch(showSideMenuItems(subMenu))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav);