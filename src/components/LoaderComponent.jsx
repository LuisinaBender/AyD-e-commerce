import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = () => {

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }}
        />        
        </div>
    )
}
export default LoaderComponent;