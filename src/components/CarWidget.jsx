import { FaOpencart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CarWidget = () => {
    return (
        <div className="carWidget">
            <FaOpencart />
            <Badge bg="danger"className="notificacion">{2}</Badge>
        </div>
    );
}

export default CarWidget;