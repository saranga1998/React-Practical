import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast = (closeToast) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}>close</button>
        </div>
    );
}

function Notifi() {

    const notify = () => {
        toast.info('Hello user', { position: "top-center" })
        toast.info(<CustomToast />, { position: "bottom-left" })
    }

    return (
        <div>
            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Notifi
