import React from 'react';
import { Spinner } from 'react-bootstrap';

const loaderViewStyle: any = {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    zIndex: '9',
    opacity: '0.5',
    background: '#fff'
}

const LoaderView: React.FC<any> = ({showLoader}: any) => {

    return (
        showLoader && <div style={loaderViewStyle} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
                <span className="sr-only"></span>
            </Spinner>
        </div>
    )
}

export default LoaderView;