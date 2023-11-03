import React from 'react';
import { Row, Col } from 'react-bootstrap';

function RowWidget({ children }) {
  return (

    <Row>
        <div className="row row-cols-3 justify-content-center">
        {children}
        </div>
    </Row>
  
  );
}

export default RowWidget;
