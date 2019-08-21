import React from 'react';
import { connect } from 'react-redux';

import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ----------------------------------------------------- //
import { hideToaster } from './actions/ToasterActions';

class Toaster extends React.Component<any, any> {
    constructor(props) {
        super(props);

        const ZOOM = cssTransition({
            enter: 'zoomIn',
            exit: 'zoomOut'
        });

        this.state = {
            ZOOM: ZOOM
        }
    }

    shouldComponentUpdate(props) {
        if (props.message) {
            this.notify(props.message);
            this.props.hideToaster();
        }
        return true;
    }

    public notify(message: string) {
        toast.success(
            message, 
            { autoClose: 1000, transition: this.state.ZOOM }
        );
    }

    public render() {
        return <ToastContainer />
    }
}

const mapStateToProps = (state: any) => ({
    message: state.toaster.message
})

const mapDispatchToProps: any = (dispatch: any) => ({
    hideToaster: () => dispatch(hideToaster())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toaster);