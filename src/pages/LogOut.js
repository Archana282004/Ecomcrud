import  "./LogOut.css"
import { useNavigate } from 'react-router-dom';
export default function LogOut({setOpenModal, setToken}) {
    const navigate= useNavigate()
    const handleConfirm=()=>{
         localStorage.removeItem("token");
         setToken(null);
         navigate("/login");
    }
    return(
        <div className="ModalBackGround">
            <div className="ModalContainer">
                <button onClick={()=> setOpenModal(false)}>X</button>
                <div className="title">
                    <h1>Are you sure to LogOut ?</h1>
                </div>
                <div className="footer">
                    <button onClick={()=> setOpenModal(false)}>Cancel</button>
                    <button onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}