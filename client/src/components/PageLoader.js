import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

export const PageLoader = () => (
    <div className="align-middle" style={{ 'margin': '20px', 'padding': '20px' }}>
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
    </div>
);