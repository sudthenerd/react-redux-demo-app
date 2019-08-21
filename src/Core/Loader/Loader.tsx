import React from 'react';
import { connect } from 'react-redux';
// ---------------------------------------------- //
import LoaderView from './presentation/LoaderView';

class Loader extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return <LoaderView showLoader={this.props.loaderVisibility}/>;
    }
}

const mapStateToProps = (state: any) => ({
    loaderVisibility: state.loader.loaderVisibility
})

const mapDispatchToProps: any = (dispatch: any) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader);