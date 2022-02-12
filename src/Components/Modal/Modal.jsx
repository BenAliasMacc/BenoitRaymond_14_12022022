import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../Redux/createEmployee/actionCreateEmployee';


const Modal = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.createEmployee.isOpen)

    const handleModal = () => {
        dispatch(closeModal())
    }

    const modal = isOpen && (
        <div className="modal">
                <p>Employee Created!</p><button className="modal-close" onClick={handleModal}>X</button>
        </div>
    )

    return (
        <>
            {modal}
        </>
    )
};

  export default Modal