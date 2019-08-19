import React from 'react';
import { connect } from 'react-redux';
// --------------------------------------------------- //
import { showSideMenuItems } from './actions/SideNavAction';
import SideNavView from './presentation/SideNavView';

class SideNav extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    public render() {
        return <SideNavView {...this.props}/>
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