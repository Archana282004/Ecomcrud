import "./LogOut.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/reducers/auth";


export default function LogOut({ setOpenModal, setToken }) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const handleConfirm = () => {
        //localStorage.removeItem("token");
        //setToken(null);
        dispatch(logout());
        navigate("/login");
    }
    return (
        <div className="ModalBackGround">
            <div className="ModalContainer">
                <button onClick={() => setOpenModal(false)}>X</button>
                <div className="title">
                    <h1>Are you sure to LogOut ?</h1>
                </div>
                <div className="footer">
                    <button onClick={() => setOpenModal(false)}>Cancel</button>
                    <button onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}