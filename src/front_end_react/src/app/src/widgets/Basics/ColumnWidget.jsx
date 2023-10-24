import { Row, Col } from 'react-bootstrap';
function ColumnWidget({ children }) {
  return (
    <Col>
      {children}
    </Col>
  );
}

export default ColumnWidget;
