import { Fondo, Modal } from "./Ayuda.styles"
import PropTypes from 'prop-types';


const Ayuda = ( {isOpen, onClose, clase, cantidad} ) => {

    return (
      <Fondo popUp={isOpen} onClick={onClose}>   
            <Modal>
                <p>En este componente debe indicar el número de {clase} que tendrá su web. Actualmente tiene: {cantidad}</p>
            </Modal>
      </Fondo>
    );
}

Ayuda.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    clase: PropTypes.string,
    cantidad: PropTypes.number
  };

export default Ayuda